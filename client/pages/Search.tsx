import { useSearchParams, Link } from "react-router-dom";
import { productsData, ProductDetail } from "@/data/products";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Phone, Mail, MapPin, ChevronDown, ChevronUp, Minus, Plus, MessageSquare } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["compound-wall"]);
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<ProductDetail | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const filteredProducts = useMemo(() =>
    productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ), [query]);

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleEnquiryClick = (product: ProductDetail) => {
    setSelectedInquiryProduct(product);
    setIsInquiryModalOpen(true);
  };

  const categories = useMemo(() => {
    const grouped = productsData.reduce((acc, product) => {
      if (!acc[product.categorySlug]) {
        acc[product.categorySlug] = {
          name: product.category,
          slug: product.categorySlug,
          products: []
        };
      }
      acc[product.categorySlug].products.push({
        name: product.name,
        slug: product.slug
      });
      return acc;
    }, {} as Record<string, { name: string, slug: string, products: { name: string, slug: string }[] }>);

    const order = ["compound-wall", "boundary-wall", "cement-wall", "other-products"];
    return order.map(slug => grouped[slug]).filter(Boolean);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Inquiry Modal */}
      <InquiryModal
        product={selectedInquiryProduct}
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-medium">Search Result</span>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h1 className="text-3xl font-bold text-gir-dark-blue mb-2">Search Result</h1>
              <p className="text-gir-dark-gray text-sm">
                There are {filteredProducts.length} products/articles that match your keyword <span className="font-bold underline">"{query}"</span>
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.slug} className="flex flex-col gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow group bg-white">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-1/3 aspect-[4/3] relative overflow-hidden rounded bg-gray-50 shadow-inner">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="w-full sm:w-2/3">
                        <Link to={`/product/${product.slug}`} className="text-lg font-bold text-gir-orange hover:underline mb-2 block decoration-2 underline-offset-4 leading-tight">
                          {product.name}
                        </Link>
                        <div className="space-y-1.5">
                          {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="flex gap-2 text-[11px] uppercase tracking-wide">
                              <span className="text-gray-400 font-bold min-w-[85px]">{key}:</span>
                              <span className="text-gir-dark-blue font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <Button
                        onClick={() => handleEnquiryClick(product)}
                        className="w-full bg-gir-dark-blue hover:bg-black text-white font-black uppercase tracking-widest text-xs italic py-6 h-auto shadow-md transition-all active:scale-95"
                      >
                        Get Best Price
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-400 mb-2">No results found for "{query}"</h3>
                <p className="text-gray-500">Please try searching with different keywords.</p>
                <Link to="/products/all" className="inline-block mt-4 text-gir-orange font-bold hover:underline">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Products Category Sidebar (Exact Match to Reference Image) */}
            <div className="bg-gir-dark-blue text-white rounded-lg overflow-hidden shadow-2xl border border-white/5">
              <div className="p-5 border-b border-white/10">
                <div className="inline-block relative">
                  <h3 className="text-xl font-black text-gir-orange uppercase tracking-wider mb-2">
                    Products
                  </h3>
                  <div className="w-6 h-[3px] bg-gir-orange" />
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {categories.map((cat) => (
                  <div key={cat.slug} className="group">
                    <button
                      onClick={() => toggleCategory(cat.slug)}
                      className="w-full px-5 py-4 flex justify-between items-center hover:bg-white/[0.05] transition-colors text-left"
                    >
                      <span className="text-[15px] font-bold uppercase tracking-wide text-white">
                        {cat.name}
                      </span>
                      {expandedCategories.includes(cat.slug) ? (
                        <Minus size={16} className="text-white/60" strokeWidth={3} />
                      ) : (
                        <Plus size={16} className="text-white" strokeWidth={3} />
                      )}
                    </button>

                    {expandedCategories.includes(cat.slug) && (
                      <div className="bg-black/40 py-3 border-t border-white/5">
                        {cat.products.map((p) => (
                          <Link
                            key={p.slug}
                            to={`/product/${p.slug}`}
                            className="flex items-start gap-3 px-6 py-2.5 text-[13px] text-gray-300 hover:text-gir-orange hover:bg-white/[0.03] transition-all group/item"
                          >
                            <ChevronRight size={14} className="mt-0.5 flex-shrink-0 opacity-30 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            <span className="leading-relaxed">{p.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us Sidebar */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gir-orange" />
              <h3 className="text-sm font-black text-gir-dark-blue mb-6 border-b border-gray-100 pb-3 uppercase tracking-widest">
                Contact Us
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gir-dark-blue text-xs uppercase mb-3 tracking-wider">GIR PRECAST PVT LTD</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed flex gap-3">
                    <MapPin size={18} className="text-gir-orange flex-shrink-0" />
                    Khasra No. 234, Kila No.12/1. Sec.12, Opp. Piyush City Hathin Road, Palwal-121102 (HR.)
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <a href="tel:+919992908099" className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-gir-orange transition-colors font-medium">
                    <Phone size={18} className="text-gir-orange" />
                    +91-9992908099
                  </a>
                  <a href="mailto:info@girprecast.com" className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-gir-orange transition-colors break-all font-medium">
                    <Mail size={18} className="text-gir-orange" />
                    info@girprecast.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Search;

