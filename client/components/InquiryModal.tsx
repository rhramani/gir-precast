import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductDetail } from "@/data/products";
import { X, Edit, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "@/components/ui/phone-input";
import { sendInquiry } from "@/lib/inquiry";

interface InquiryModalProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
  initialQuantity?: string;
  initialUnit?: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ 
  product, 
  isOpen, 
  onClose,
  initialQuantity,
  initialUnit 
}) => {
  const [quantity, setQuantity] = useState<string>(initialQuantity || product?.moq?.match(/\d+/)?.[0] || "1000");
  const [unit, setUnit] = useState<string>(initialUnit || product?.priceRange?.unit || "Square Feet");
  const [mobile, setMobile] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronize state when props change
  React.useEffect(() => {
    if (isOpen) {
      if (initialQuantity) setQuantity(initialQuantity);
      if (initialUnit) setUnit(initialUnit);
      setIsEditing(false);
      setIsSuccess(false);
    }
  }, [isOpen, initialQuantity, initialUnit]);

  if (!product) return null;

  const priceText = product.priceRange 
    ? `₹ ${product.priceRange.min}.00 - ${product.priceRange.max}.00 / ${product.priceRange.unit}` 
    : "₹ 60.00 - 120.00 / Square Feet";
  const moqText = product.moq || "1000 Square Feet";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(true);
    
    // Trigger redirection / backend call
    sendInquiry({
      name: "Valued Customer", // No name field in this modal, using generic
      email: "N/A",
      mobile: mobile,
      product: product.name,
      details: `Inquiry for ${product.name}. Quantity: ${quantity} ${unit}.`
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Enquiry details prepared for WhatsApp!");
    }, 1000);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[750px] p-0 border border-gray-200 bg-white rounded-xl shadow-2xl gap-0 overflow-visible">

        <DialogHeader className="sr-only">
          <DialogTitle>Inquiry for {product.name}</DialogTitle>
        </DialogHeader>

        {/* Close Button */}
        <DialogClose className="absolute right-3 top-3 z-50 rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none">
          <X className="h-5 w-5 text-gir-dark-blue" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex flex-col md:flex-row">
          {/* ========== LEFT SIDE: Product Info ========== */}
          <div className="w-full md:w-[45%] bg-white flex flex-col border-r border-gray-100">
            {/* Product Name Header */}
            <div className="px-5 pt-5 pb-3 border-b border-gray-100">
              <h2 className="text-gir-dark-blue font-bold text-lg leading-tight">{product.name}</h2>
            </div>

            {/* Product Image */}
            <div className="px-5 flex-grow flex items-center justify-center py-6">
              <motion.img
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="max-h-[200px] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Price & MOQ */}
            <div className="px-5 pb-5 space-y-1 border-t border-gray-100 pt-4">
              <p className="text-gir-dark-blue text-sm">
                Price : <span className="text-gir-orange font-bold">{priceText}</span>
              </p>
              <p className="text-gir-dark-blue text-sm font-bold">
                MOQ : {moqText}
              </p>
            </div>
          </div>

          {/* ========== RIGHT SIDE: Lead Capture Form ========== */}
          <div className="w-full md:w-[55%] flex flex-col bg-white overflow-visible">

            {/* Get a Quick Quote Header */}
            <div className="bg-gir-orange px-6 py-4">
              <h3 className="text-white text-lg font-bold text-center">Get a Quick Quote</h3>
            </div>

            <div className="p-6 flex-grow flex flex-col overflow-visible">

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-5 flex-grow flex flex-col"
                  >
                    {/* Quantity & Measurement Units Row */}
                    <div className="flex items-end gap-3">
                      <div className="flex-1">
                        <label className="text-gray-500 text-xs font-medium mb-1.5 block">Quantity</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) => {
                              const val = e.target.value.replace(/[^0-9]/g, "");
                              setQuantity(val);
                            }}
                            autoFocus
                            className="w-full h-11 bg-gray-50 border border-gray-300 rounded-md px-3 text-gir-dark-blue font-bold outline-none focus:border-gir-orange focus:ring-2 focus:ring-gir-orange/20 transition-all"
                          />
                        ) : (
                          <div className="w-full h-11 bg-gray-50 border border-gray-200 rounded-md px-3 flex items-center text-gir-dark-blue font-bold">
                            {quantity}
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <label className="text-gray-500 text-xs font-medium mb-1.5 block">Measurement Units</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="w-full h-11 bg-gray-50 border border-gray-300 rounded-md px-3 text-gir-dark-blue font-bold outline-none focus:border-gir-orange focus:ring-2 focus:ring-gir-orange/20 transition-all"
                          />
                        ) : (
                          <div className="w-full h-11 bg-gray-50 border border-gray-200 rounded-md px-3 flex items-center text-gir-dark-blue font-bold">
                            {unit}
                          </div>
                        )}
                      </div>

                      {/* Edit Link */}
                      {!isEditing && (
                        <button
                          type="button"
                          onClick={handleEditClick}
                          className="flex items-center gap-1.5 text-gir-orange text-xs font-bold hover:underline underline-offset-4 mb-2.5 whitespace-nowrap transition-all"
                        >
                          <Edit size={14} />
                          Edit
                        </button>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="text-gray-500 text-xs font-medium mb-1.5 block">Mobile No.</label>
                      <PhoneInput
                        value={mobile}
                        onChange={(value) => setMobile(value)}
                        className="w-full"
                      />
                    </div>

                    {/* Send Enquiry Button */}
                    <div className="pt-2 mt-auto">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gir-dark-blue hover:bg-gir-orange text-white font-bold py-3 px-10 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                      >
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 p-4 flex-grow flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-100">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="text-xl font-bold text-gir-dark-blue">Enquiry Sent Successfully!</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">
                      Thank you for your interest in <span className="font-bold text-gir-orange">{product.name}</span>. Our team will contact you on <span className="font-bold text-gir-dark-blue">+91 {mobile}</span> shortly.
                    </p>
                    <div className="pt-4">
                      <Button 
                        onClick={onClose} 
                        className="bg-gir-orange hover:bg-gir-dark-blue text-white px-8 font-bold rounded-lg"
                      >
                        Close
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
