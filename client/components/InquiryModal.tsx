import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductDetail } from "@/data/products";
import { X, ChevronLeft, ChevronRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

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
  const [quantity, setQuantity] = useState<string>(initialQuantity || product?.moq?.match(/\d+/)?.[0] || "100");
  const [unit, setUnit] = useState<string>(initialUnit || "Feet");
  const [mobile, setMobile] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronize state when props change
  React.useEffect(() => {
    if (isOpen) {
      if (initialQuantity) setQuantity(initialQuantity);
      if (initialUnit) setUnit(initialUnit);
    }
  }, [isOpen, initialQuantity, initialUnit]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Enquiry sent successfully!");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-white rounded-xl shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Inquiry for {product.name}</DialogTitle>
        </DialogHeader>

        <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-white/20 hover:bg-white/40 p-1">
          <X className="h-6 w-6 text-gray-800 lg:text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex flex-col lg:flex-row h-full min-h-[550px]">
          {/* Left Side: Product Summary (Reference Style) */}
          <div className="w-full lg:w-[45%] bg-gir-dark-blue flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-concrete-texture opacity-10" />
            
            {/* Product Title Header */}
            <div className="p-6 relative z-10 border-b border-white/10 bg-black/20">
              <h2 className="text-white font-black text-xl leading-tight uppercase tracking-tight">{product.name}</h2>
            </div>

            {/* Featured Image Section */}
            <div className="flex-grow flex items-center justify-center p-8 relative z-10">
              <div className="relative group/image">
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  src={product.image}
                  alt={product.name}
                  className="max-h-[250px] w-auto object-contain rounded-lg shadow-2xl border-4 border-white/15"
                />
                <div className="absolute -bottom-4 -right-4 bg-gir-orange text-gir-dark-blue font-black text-[10px] px-3 py-1.5 rounded uppercase tracking-widest shadow-xl border border-white/50">
                  Best Seller
                </div>
              </div>
            </div>

            {/* Tech Stats Summary */}
            <div className="p-6 relative z-10 bg-black/40 mt-auto border-t border-white/10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">Price Range</p>
                    <p className="text-2xl font-black text-gir-orange truncate">{product.price || "₹ 80 - 150"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">MOQ</p>
                    <p className="text-sm font-bold text-white">{product.moq || "500 Feet"}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                   <div className="flex items-center gap-2 text-white/70 text-[11px] font-bold">
                     <CheckCircle2 size={12} className="text-gir-orange" />
                     <span>Quality Tested</span>
                   </div>
                   <div className="flex items-center gap-2 text-white/70 text-[11px] font-bold">
                     <CheckCircle2 size={12} className="text-gir-orange" />
                     <span>High Strength</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Capture Form */}
          <div className="w-full lg:w-[55%] flex flex-col bg-white">
            <div className="bg-gir-orange p-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center text-white">
                <Mail size={20} />
              </div>
              <h3 className="text-white text-lg font-black uppercase tracking-wider italic">Send Inquiry Now</h3>
            </div>

            <div className="p-8 flex-grow flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="w-full space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="quantity" className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Requirement Quality</Label>
                        <div className="relative">
                          <Input 
                            id="quantity" 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="750"
                            className="bg-gray-50 border-gray-200 focus:ring-gir-orange focus:border-gir-orange h-12 font-bold text-gir-dark-blue"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="unit" className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Preferred Unit</Label>
                        <Select value={unit} onValueChange={setUnit}>
                          <SelectTrigger className="bg-gray-50 border-gray-200 h-12 font-bold text-gir-dark-blue">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Feet">Feet</SelectItem>
                            <SelectItem value="Square Feet">Square Feet</SelectItem>
                            <SelectItem value="Meters">Meters</SelectItem>
                            <SelectItem value="Nos">Nos</SelectItem>
                            <SelectItem value="Running Feet">Running Feet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="mobile" className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Mobile Number (Required)</Label>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-2 px-4 bg-gray-100 border border-gray-200 rounded text-[13px] font-black text-gir-dark-blue">
                          <span>🇮🇳</span> <span>+91</span>
                        </div>
                        <Input 
                          id="mobile" 
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="98XXXXXXXX" 
                          className="bg-gray-50 border-gray-200 focus:ring-gir-orange focus:border-gir-orange h-12 font-bold text-gir-dark-blue"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gir-orange hover:bg-gir-orange/90 text-white font-black uppercase tracking-widest py-7 h-auto shadow-xl transition-all active:scale-[0.98] text-sm italic"
                      >
                       {isSubmitting ? "Processing Inquiry..." : "Submit Best Price Request"}
                      </Button>
                      
                      <p className="text-[9px] text-center text-gray-400 uppercase font-black tracking-tighter mt-4">
                        By clicking, you agree to our privacy policy and terms of service.
                      </p>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-gray-100">
                      <a 
                        href="tel:+918238902687"
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded text-[11px] font-black uppercase text-gir-dark-blue hover:bg-gray-50 transition-colors"
                      >
                        <Phone size={14} className="text-gir-orange" />
                        Quick Call
                      </a>
                      <a 
                        href={`mailto:info@girprecast-industries.com?subject=Inquiry for ${product.slug}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded text-[11px] font-black uppercase text-gir-dark-blue hover:bg-gray-50 transition-colors"
                      >
                        <Mail size={14} className="text-gir-orange" />
                        Send Email
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 p-4"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-100 shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-black text-gir-dark-blue uppercase tracking-tight leading-none">Inquiry Received</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed max-w-[280px] mx-auto">
                      Thank you for choosing **GIR PRECAST**. Our representatives will contact you on <span className="font-bold text-gir-dark-blue">+91 {mobile}</span> shortly.
                    </p>
                    <div className="pt-8">
                      <Button 
                        onClick={onClose} 
                        className="bg-gir-dark-blue hover:bg-black text-white px-10 font-black uppercase tracking-widest text-xs"
                      >
                        Back to Product
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
