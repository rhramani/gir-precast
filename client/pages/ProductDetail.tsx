import { useParams, Link } from "react-router-dom";
import { productsData } from "@/data/products";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Phone, Mail, ShoppingCart, CheckCircle2, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [quantity, setQuantity] = useState<string>(product?.moq?.match(/\d+/)?.[0] || "500");
  const [unit, setUnit] = useState<string>("Square Feet");
  const [activeImage, setActiveImage] = useState<string>(product?.image || "");

  // Update active image if product changes
  useState(() => {
    if (product) setActiveImage(product.image);
  });

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

  return (
    <div className="bg-white">
      {/* Inquiry Modal */}
      <InquiryModal 
        product={product} 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)} 
        initialQuantity={quantity}
        initialUnit={unit}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue font-medium">Home</Link>
            <ChevronRight size={14} />
            <Link to={`/products/${product.categorySlug}`} className="hover:text-gir-dark-blue font-medium">
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-black truncate uppercase tracking-tight">{product.name}</span>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-lg border border-gray-100 shadow-xl bg-white p-4">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={activeImage}
                alt={product.name}
                className="w-full aspect-[4/3] object-contain rounded shadow-inner"
              />
              <div className="absolute top-6 right-6 bg-gir-orange text-gir-dark-blue text-[10px] font-black px-4 py-1.5 rounded uppercase tracking-[0.2em] shadow-lg border border-white/20">
                Authorized Supplier
              </div>
            </div>
            
            {/* Gallery Mini-thumbs */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-5 gap-3">
                {product.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "aspect-square rounded border-2 overflow-hidden cursor-pointer transition-all p-1 bg-white shadow-sm",
                      activeImage === img ? "border-gir-orange scale-105" : "border-transparent opacity-60 hover:opacity-100 hover:border-gray-200"
                    )}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-sm" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Content Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-gir-dark-blue mb-4 leading-[1.1] uppercase tracking-tighter">
                {product.name}
              </h1>
              <div className="h-1.5 w-24 bg-gir-orange mb-8 rounded-full" />
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8 shadow-inner">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Price</p>
                    <p className="text-3xl font-black text-gir-orange">{product.price || "Contact for Quote"}</p>
                  </div>
                  {product.moq && (
                    <div className="pl-6 border-l border-gray-200">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Minimum Order</p>
                      <p className="text-lg font-bold text-gir-dark-blue">{product.moq}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity & Unit Selection (Calculation Area) */}
              <div className="space-y-4 mb-10">
                <p className="text-sm font-black text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                   <ShoppingCart size={18} className="text-gir-orange" />
                   Get Best Price for Your Requirement
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[150px]">
                    <Input 
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Enter Quantity"
                      className="h-14 border-2 border-gray-200 focus:border-gir-orange font-black text-lg text-gir-dark-blue"
                    />
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <Select value={unit} onValueChange={setUnit}>
                      <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-gir-orange font-black text-gir-dark-blue">
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
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleEnquiryClick}
                  className="flex-[2] h-auto py-5 bg-gir-orange hover:bg-black text-white font-black uppercase tracking-widest italic shadow-xl transition-all active:scale-95 text-base"
                >
                  Get Best Price
                </Button>
                <Button 
                  onClick={() => {
                    const el = document.getElementById('enquiry-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="flex-1 h-auto py-5 border-2 border-gir-dark-blue text-gir-dark-blue hover:bg-gir-dark-blue hover:text-white font-black uppercase tracking-widest italic transition-all active:scale-95 text-sm"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gir-dark-blue mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-gir-orange" size={20} />
                Product Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 text-sm font-medium">{key}</span>
                    <span className="text-gir-dark-blue text-sm font-bold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-lg font-bold text-gir-dark-blue mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gir-dark-gray">
                    <div className="w-1.5 h-1.5 bg-gir-orange rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-20 border-t border-gray-100 pt-12">
          <div className="bg-gir-dark-blue text-white p-8 rounded-t-xl">
            <h2 className="text-2xl font-bold">Product Description</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-b-xl border-x border-b border-gray-100 prose prose-lg max-w-none text-gir-dark-gray">
            <p className="leading-relaxed mb-6">
              {product.description}
            </p>
            <p>
              At **GIR PRECAST PVT LTD**, we focus on providing high-strength, durable, and cost-effective boundary solutions. Our precast technology ensures that every panel and pillar is manufactured under strict quality control, offering you a product that is far superior to traditional brick-and-mortar walls.
            </p>
          </div>
        </div>

        {/* Large Inquiry Form (As requested for Dynamic Page Behavior) */}
        <div id="enquiry-section" className="mt-20 bg-concrete-texture rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gir-orange" />
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 italic">Yes! I am interested</h2>
            <p className="text-gir-dark-gray">Submit your requirement and our experts will get back to you with the best quote.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-orange outline-none" required />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-orange outline-none" required />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-orange outline-none" required />
            </div>
            <div className="space-y-4">
              <textarea placeholder="Tell us about your requirement..." rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-orange outline-none resize-none" required />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full py-4 bg-gir-dark-blue text-white font-bold rounded hover:bg-gir-dark-blue/90 transition-all shadow-lg text-lg uppercase tracking-wider"
              >
                Submit Inquiry Now
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
      
      {/* Contact floating bar (Similar to SK Precast requirement) */}
      <div className="bg-gir-orange py-6 sticky bottom-0 z-40 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-gir-dark-blue font-bold">
          <p>Looking for a custom quote? Call us now!</p>
          <div className="flex gap-8">
            <a href="tel:+918238902687" className="flex items-center gap-2 hover:underline">
              <Phone size={20} />
              +91-8238902687
            </a>
            <a href="mailto:info@girprecast-industries.com" className="flex items-center gap-2 hover:underline">
              <Mail size={20} />
              info@girprecast-industries.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


