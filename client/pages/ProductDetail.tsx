import { useParams, Link } from "react-router-dom";
import { productsData } from "@/data/products";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Phone, Mail, Share2, Edit, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import CustomPhoneInput from "@/components/ui/phone-input";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);

  // Extract default quantity from MOQ (e.g., "500 Feet" → "500", "1000 Square Feet" → "1000")
  const defaultQuantity = product?.moq?.match(/\d+/)?.[0] || "1000";
  // Extract default unit from MOQ or priceRange (e.g., "500 Feet" → "Feet", priceRange.unit → "Square Feet")
  const defaultUnit = product?.priceRange?.unit || product?.moq?.replace(/\d+\s*/, "") || "Square Feet";

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [unit, setUnit] = useState(defaultUnit);
  const [isEditing, setIsEditing] = useState(false);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  // Reset state when product changes (navigating between products)
  useEffect(() => {
    if (product) {
      const newQty = product.moq?.match(/\d+/)?.[0] || "1000";
      const newUnit = product.priceRange?.unit || product.moq?.replace(/\d+\s*/, "") || "Square Feet";
      setQuantity(newQty);
      setUnit(newUnit);
      setIsEditing(false);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gir-dark-blue mb-4">Product Not Found</h2>
          <Link to="/" className="text-gir-orange hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const handleEnquiryClick = () => {
    setIsInquiryModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    // Focus the quantity input after enabling editing
    setTimeout(() => quantityInputRef.current?.focus(), 50);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20">
      {/* Inquiry Modal */}
      <InquiryModal 
        product={product} 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)} 
        initialQuantity={quantity}
        initialUnit={unit}
      />

      {/* Main Content Area */}
      <SectionWrapper bg="transparent">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gir-dark-blue transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">{product.name}</span>
          </div>

          {/* Product Header Section: Image & Info Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            {/* Left: Image Section */}
            <div className="lg:col-span-5 bg-white p-8 flex flex-col items-center justify-between min-h-[450px] border-r border-gray-50">
              <div className="w-full h-full flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[350px] object-contain"
                />
              </div>
              <button 
                className="mt-6 text-gir-orange text-sm font-bold hover:underline underline-offset-4 decoration-2"
                onClick={handleEnquiryClick}
              >
                Click to view more
              </button>
            </div>

            {/* Right: Info Panel (Light Theme) */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col bg-white">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gir-dark-blue leading-tight">
                  {product.name}
                </h1>
                <button className="text-gray-400 hover:text-gir-orange transition-colors">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Price & MOQ */}
              <div className="flex flex-col gap-1 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-gir-orange">
                    ₹ {product.priceRange?.min || "60"}.00 - {product.priceRange?.max || "120"}.00
                  </span>
                  <span className="text-gray-500 text-sm font-medium italic">/ {product.priceRange?.unit || "Square Feet"}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {product.moq || ""} {product?.moq ? "MOQ" : ""}
                </p>
              </div>

              {/* Quantity / Unit / Edit Row — Interactive like reference site */}
              <div className="flex flex-wrap items-end gap-4 mb-8">
                {/* Quantity Field */}
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5">Quantity</div>
                  {isEditing ? (
                    <input
                      ref={quantityInputRef}
                      type="text"
                      value={quantity}
                      onChange={(e) => {
                        // Only allow numbers
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setQuantity(val);
                      }}
                      className="h-11 w-28 border border-gray-300 rounded-md text-center font-bold text-gir-dark-blue bg-white outline-none focus:border-gir-orange focus:ring-2 focus:ring-gir-orange/20 transition-all"
                    />
                  ) : (
                    <div className="h-11 w-28 border border-gray-200 rounded-md flex items-center justify-center font-bold text-gir-dark-blue bg-gray-50/50">
                      {quantity}
                    </div>
                  )}
                </div>

                {/* Unit Field */}
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5">Unit</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="h-11 w-32 border border-gray-300 rounded-md text-center font-bold text-gir-dark-blue bg-white outline-none focus:border-gir-orange focus:ring-2 focus:ring-gir-orange/20 transition-all"
                    />
                  ) : (
                    <div className="h-11 border border-gray-200 rounded-md flex items-center justify-center text-gir-dark-blue bg-gray-50/50 px-4 font-bold text-sm min-w-[120px]">
                      {unit}
                    </div>
                  )}
                </div>

                {/* Edit Button — disappears once editing */}
                {!isEditing && (
                  <button 
                    onClick={handleEditClick}
                    className="flex items-center gap-1.5 text-gir-orange text-xs font-bold hover:underline underline-offset-4 ml-1 transition-all active:scale-95 mb-2"
                  >
                    <Edit size={14} />
                    Edit
                  </button>
                )}

                {/* Get Best Price Button */}
                <Button 
                  className="ml-auto bg-gir-orange hover:bg-gir-dark-blue text-white font-bold px-8 h-11 rounded-lg transition-all shadow-md active:scale-95"
                  onClick={handleEnquiryClick}
                >
                  Get Best Price
                </Button>
              </div>

              {/* Attributes Table — dynamically show all product specs */}
              <div className="flex flex-col mb-10 border-t border-gray-50">
                {/* Always show Business Type first */}
                <div className="grid grid-cols-5 py-4 border-b border-gray-50 items-center">
                  <span className="col-span-2 text-gray-400 text-sm font-medium">Business Type</span>
                  <span className="col-span-3 text-gir-dark-blue text-sm font-bold">{product.specifications["Business Type"] || "Manufacturer, Supplier"}</span>
                </div>
                {/* Render all product specifications */}
                {Object.entries(product.specifications)
                  .filter(([key]) => key !== "Business Type")
                  .map(([label, value], idx) => (
                  <div key={idx} className="grid grid-cols-5 py-4 border-b border-gray-50 items-center">
                    <span className="col-span-2 text-gray-400 text-sm font-medium">{label}</span>
                    <span className="col-span-3 text-gir-dark-blue text-sm font-bold">{value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href="tel:+918238902687"
                  className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-gir-dark-blue text-gir-dark-blue hover:bg-gir-dark-blue hover:text-white font-bold py-4 rounded-xl transition-all active:scale-95"
                >
                  <Phone size={20} />
                  Request to Call
                </a>
                <Button 
                  onClick={handleEnquiryClick}
                  className="flex-[1.5] flex items-center justify-center gap-2 bg-gir-dark-blue hover:bg-gir-orange text-white font-bold py-4 h-auto rounded-xl transition-all active:scale-95 shadow-lg"
                >
                  <Mail size={20} />
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-10 bg-white rounded-xl p-10 border border-gray-100 shadow-xl">
            <h2 className="text-xl font-bold text-gir-dark-blue mb-8 flex items-center gap-2 group">
              <span className="h-5 w-1 bg-gir-orange rounded-full transition-all group-hover:h-8"></span>
              Product Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 pb-10 border-b border-gray-50">
              {Object.entries(product.productDetails || { "Country of Origin": "India", ...Object.fromEntries(Object.entries(product.specifications).slice(0, 3)) }).map(([label, value], idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 md:border-none">
                  <p className="text-gray-400 text-sm font-medium">{label}</p>
                  <p className="text-gir-dark-blue font-bold text-sm text-right">{value}</p>
                </div>
              ))}
              <div className="md:col-span-2 mt-4 flex justify-start">
                <Button 
                  className="bg-gir-orange hover:bg-gir-dark-blue text-white font-bold h-12 px-10 rounded-xl shadow-lg transition-all"
                  onClick={handleEnquiryClick}
                >
                  Yes! I am interested
                </Button>
              </div>
            </div>
            
            {/* Description Integration */}
            <div className="mt-10 max-w-4xl">
              {/* <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                {product.description}
              </p> */}
              {product.longDescription && (
                <p className="text-gray-600 mt-6 leading-relaxed text-[15px] whitespace-pre-line">
                   {product.longDescription}
                </p>
              )}
            </div>
          </div>

          {/* Large Enquiry Form (Bottom) */}
          <div id="enquiry-section" className="mt-10 bg-white rounded-2xl p-10 md:p-14 border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gir-orange" />
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gir-dark-blue text-center mb-12">
                Looking for "<span className="text-gir-orange">{product.name}</span>" ?
              </h2>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Left Side: Basic Info */}
                <div className="space-y-8">
                  <div className="relative">
                    <Input 
                      placeholder="Name" 
                      className="h-12 border-gray-200 text-gir-dark-blue focus:border-gir-orange focus:ring-1 focus:ring-gir-orange/20" 
                    />
                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-gray-400 text-[10px] uppercase font-bold w-16 text-right hidden lg:block tracking-widest">Name</div>
                  </div>
                  <div className="relative">
                    <Input 
                      placeholder="Email" 
                      className="h-12 border-gray-200 text-gir-dark-blue focus:border-gir-orange focus:ring-1 focus:ring-gir-orange/20" 
                    />
                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-gray-400 text-[10px] uppercase font-bold w-16 text-right hidden lg:block tracking-widest">Email</div>
                  </div>
                  <div className="relative">
                    <CustomPhoneInput
                      value={""} 
                      onChange={() => {}} 
                      className="w-full"
                    />
                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-gray-400 text-[10px] uppercase font-bold w-16 text-right hidden lg:block tracking-widest">Mobile</div>
                  </div>
                </div>

                {/* Right Side: Quantity & Details */}
                <div className="space-y-8">
                  <div className="flex gap-2 relative">
                    <Input 
                      placeholder="Estimated Quantity"
                      defaultValue={quantity}
                      className="h-12 border-gray-200 text-gir-dark-blue focus:border-gir-orange focus:ring-1 focus:ring-gir-orange/20 flex-1" 
                    />
                    <div className="flex h-12 px-4 items-center justify-center bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium rounded-lg">
                      {unit}
                    </div>
                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-gray-400 text-[10px] uppercase font-bold w-16 text-right hidden lg:block tracking-widest">Quantity</div>
                  </div>

                  <div className="relative">
                    <div className="flex gap-8 items-center h-12 ml-2">
                      <label className="flex items-center gap-2 text-gir-dark-blue text-sm cursor-pointer font-medium group">
                        <input type="radio" name="purpose" className="w-4 h-4 accent-gir-orange" />
                        Reselling
                      </label>
                      <label className="flex items-center gap-2 text-gir-dark-blue text-sm cursor-pointer font-medium group">
                        <input type="radio" name="purpose" className="w-4 h-4 accent-gir-orange" />
                        End Use
                      </label>
                    </div>
                    <div className="absolute left-[-110px] top-1/2 -translate-y-1/2 text-gray-400 text-[10px] uppercase font-bold w-24 text-right hidden lg:block tracking-widest leading-tight">Purpose of Requirement</div>
                  </div>

                  <div className="relative">
                    <textarea 
                      placeholder="I am interested. Kindly send the quotation for the same." 
                      rows={3} 
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gir-dark-blue focus:border-gir-orange focus:ring-1 focus:ring-gir-orange/20 outline-none text-sm placeholder:text-gray-400 resize-none"
                    ></textarea>
                     <div className="absolute left-[-110px] top-4 text-gray-400 text-[10px] uppercase font-bold w-24 text-right hidden lg:block tracking-widest leading-tight">Requirement Details</div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center mt-6">
                  <Button 
                    className="bg-gir-dark-blue hover:bg-gir-orange text-white px-16 h-14 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-xl"
                  >
                    Send Enquiry Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProductDetail;




