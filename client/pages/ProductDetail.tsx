import { useParams, Link } from "react-router-dom";
import { productsData } from "@/data/products";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Phone, Mail, ShoppingCart, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  const [inquiryType, setInquiryType] = useState("Get Best Price");

  if (!product) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gir-dark-blue mb-4">Product Not Found</h2>
          <Link to="/" className="text-gir-gold hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue">Home</Link>
            <ChevronRight size={14} />
            <Link to={`/products/${product.categorySlug}`} className="hover:text-gir-dark-blue">
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-lg border border-gray-100 shadow-lg bg-white p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover rounded shadow transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-gir-gold text-gir-dark-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Authorized Manufacturer
              </div>
            </div>
            
            {/* Gallery Mini-thumb placeholder or more images could go here */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded border border-gray-100 overflow-hidden cursor-pointer hover:border-gir-gold transition-colors">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Content Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gir-dark-blue mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="h-1 w-20 bg-gir-gold mb-6" />
              
              {product.price && (
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-gir-gold">{product.price}</span>
                  <span className="text-gray-500 text-sm italic">Excluding GST</span>
                </div>
              )}
              {product.moq && (
                <p className="text-gray-600 font-medium mb-6">
                  <span className="text-gir-dark-blue">MOQ:</span> {product.moq}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => window.location.href = '#enquiry-section'}
                  className="flex-1 px-8 py-4 bg-gir-gold text-gir-dark-blue font-bold rounded-lg hover:bg-gir-gold/90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart size={20} />
                  Get Best Price
                </button>
                <button 
                  className="flex-1 px-8 py-4 border-2 border-gir-dark-blue text-gir-dark-blue font-bold rounded-lg hover:bg-gir-dark-blue hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Send Enquiry
                </button>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gir-dark-blue mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-gir-gold" size={20} />
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
                  <div key={feature} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gir-gold rounded-full" />
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
          <div className="bg-gray-50 p-8 rounded-b-xl border-x border-b border-gray-100 prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed mb-6">
              {product.description}
            </p>
            <p>
              At **GIR Precast Industries**, we focus on providing high-strength, durable, and cost-effective boundary solutions. Our precast technology ensures that every panel and pillar is manufactured under strict quality control, offering you a product that is far superior to traditional brick-and-mortar walls.
            </p>
          </div>
        </div>

        {/* Large Inquiry Form (As requested for Dynamic Page Behavior) */}
        <div id="enquiry-section" className="mt-20 bg-concrete-texture rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gir-gold" />
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 italic">Yes! I am interested</h2>
            <p className="text-gray-600">Submit your requirement and our experts will get back to you with the best quote.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-gold outline-none" required />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-gold outline-none" required />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-gold outline-none" required />
            </div>
            <div className="space-y-4">
              <textarea placeholder="Tell us about your requirement..." rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gir-gold outline-none resize-none" required />
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
      <div className="bg-gir-gold py-6 sticky bottom-0 z-40 hidden md:block">
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
