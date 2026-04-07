import { useParams, Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { ChevronRight, Phone } from "lucide-react";
import InquiryModal from "@/components/InquiryModal";
import { useState } from "react";
import { ProductDetail } from "@/data/products";

const categoryMeta: Record<string, { title: string; intro: string }> = {
  "compound-wall": {
    title: "Compound Wall",
    intro: "Leading Manufacturers, Wholesaler and Retailer of Concrete Folding Compound Wall, Concrete Precast Single Panel Wall, Factory Boundary Wall, Heavy Readymade Boundary Wall, Industrial Compound Wall, Panel Build RCC Compound Wall, Panel Build RCC Precast Compound Wall, Precast Compound Walls, Precast Heavy Duty Boundary Wall, Precast Heavy Duty Compound Wall, Prefab RCC Readymade Precast Compound Wall, RCC Compound Wall, RCC Folding Compound Wall, RCC Industrial One Piece Compound Wall, RCC Readymade Compound Wall, Readymade Compound Wall and Single Mould RCC Precast Compound Wall from Palwal.",
  },
  "boundary-wall": {
    title: "Boundary Wall",
    intro: "Leading Manufacturers, Wholesaler and Retailer of Cement Boundary Wall, Concrete Boundary Wall, Concrete Prestressed Boundary Walls, Precast Boundary Wall, RCC Boundary Wall, Readymade Boundary Wall and Solar Plant Boundary Wall from Palwal.",
  },
  "cement-wall": {
    title: "Cement Wall",
    intro: "Leading Manufacturers, Wholesaler and Retailer of Pre Fabricated Cement Wall and RCC Cement Wall from Palwal.",
  },
  "other-products": {
    title: "Other Products",
    intro: "Leading Manufacturers, Wholesaler and Retailer of Precast Wall, RCC Folding Wall, RCC Wall and Readymade Walls from Palwal.",
  },
};

const Products = () => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  const products = productsData.filter((p) => p.categorySlug === category);
  const meta = categoryMeta[category || ""] || { title: "Products", intro: "" };

  const handleEnquiryClick = (product: ProductDetail) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleDescription = (slug: string) => {
    setExpandedDescriptions(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Inquiry Modal */}
      <InquiryModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-orange transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gir-orange transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">{meta.title}</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <p className={`text-gray-600 text-sm leading-relaxed ${!isIntroExpanded ? 'line-clamp-2' : ''}`}>
            {meta.intro}
          </p>
          {!isIntroExpanded && (
            <div className="absolute bottom-0 right-0 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent pl-12">
              <button 
                onClick={() => setIsIntroExpanded(true)}
                className="text-gir-orange text-sm font-bold hover:underline focus:outline-none"
              >
                ...View More
              </button>
            </div>
          )}
          {isIntroExpanded && (
            <button 
              onClick={() => setIsIntroExpanded(false)}
              className="text-gir-orange text-sm font-bold mt-2 hover:underline focus:outline-none block"
            >
              View Less
            </button>
          )}
        </div>
      </div>

      {/* Product Listings — Horizontal Cards like Reference Site */}
      <div className="container mx-auto px-4 pb-16 space-y-6">
        {products.map((product) => {
          const isExpanded = expandedDescriptions[product.slug] || false;
          const specs = Object.entries(product.specifications).filter(([key]) => key !== "Business Type");
          
          return (
            <div
              key={product.slug}
              className="bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Product Image */}
                <div className="w-full md:w-[40%] lg:w-[35%] relative group">
                  <Link to={`/product/${product.slug}`} className="block">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-gir-dark-blue text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                      <span className="text-gir-orange">⊕</span> Click to view more
                    </div>
                  </Link>
                  {/* Thumbnail gallery */}
                  {product.gallery && product.gallery.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      {product.gallery.slice(0, 3).map((img, i) => (
                        <div key={i} className="w-10 h-10 border-2 border-white rounded overflow-hidden shadow-sm">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Product Details */}
                <div className="w-full md:w-[60%] lg:w-[65%] p-6 md:p-8 flex flex-col">
                  {/* Product Name */}
                  <Link to={`/product/${product.slug}`}>
                    <h2 className="text-xl md:text-2xl font-bold text-gir-dark-blue hover:text-gir-orange transition-colors mb-3">
                      {product.name}
                    </h2>
                  </Link>

                  {/* Price */}
                  {product.priceRange && (
                    <p className="text-lg mb-1">
                      <span className="text-gir-orange font-bold">
                        ₹ {product.priceRange.min}.00 - {product.priceRange.max}.00
                      </span>
                      <span className="text-gray-500 text-sm font-normal"> / {product.priceRange.unit}</span>
                    </p>
                  )}

                  {/* MOQ */}
                  {product.moq && (
                    <p className="text-gray-600 text-sm font-semibold mb-4">
                      {product.moq} <span className="font-normal text-gray-400">(MOQ)</span>
                    </p>
                  )}

                  {/* Get Best Price Button */}
                  <button
                    onClick={() => handleEnquiryClick(product)}
                    className="bg-gir-orange hover:bg-gir-dark-blue text-white font-bold py-2.5 px-8 rounded text-sm transition-all w-fit mb-5 shadow-md active:scale-95"
                  >
                    Get Best Price
                  </button>

                  {/* Key Specifications Table */}
                  <div className="border-t border-gray-100 mb-4">
                    {product.tableSpecifications ? (
                      Object.entries(product.tableSpecifications).map(([label, value], idx) => (
                        <div key={idx} className="grid grid-cols-5 py-3 border-b border-gray-50">
                          <span className="col-span-2 text-gray-400 text-sm">{label}</span>
                          <span className="col-span-3 text-gir-dark-blue text-sm font-semibold">{value}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        {/* Always show Business Type first */}
                        <div className="grid grid-cols-5 py-3 border-b border-gray-50">
                          <span className="col-span-2 text-gray-400 text-sm">Business Type</span>
                          <span className="col-span-3 text-gir-dark-blue text-sm font-semibold">
                            {product.specifications["Business Type"] || "Manufacturer, Supplier"}
                          </span>
                        </div>
                        {/* Show up to 4 more specs */}
                        {specs.slice(0, 4).map(([label, value], idx) => (
                          <div key={idx} className="grid grid-cols-5 py-3 border-b border-gray-50">
                            <span className="col-span-2 text-gray-400 text-sm">{label}</span>
                            <span className="col-span-3 text-gir-dark-blue text-sm font-semibold">{value}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Description */}
                  {product.longDescription && (
                    <div className="mb-4">
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {isExpanded 
                          ? product.longDescription 
                          : product.longDescription.substring(0, 200) + "..."
                        }
                      </p>
                      <button
                        onClick={() => toggleDescription(product.slug)}
                        className="text-gir-orange text-sm font-semibold hover:underline mt-1"
                      >
                        {isExpanded ? "Show Less" : "Read More..."}
                      </button>
                    </div>
                  )}

                  {/* Request to Call Button */}
                  <button
                    onClick={() => handleEnquiryClick(product)}
                    className="flex items-center gap-2 border-2 border-gir-dark-blue text-gir-dark-blue font-bold py-2.5 px-6 rounded text-sm hover:bg-gir-dark-blue hover:text-white transition-all w-fit mt-auto active:scale-95"
                  >
                    <Phone size={16} />
                    Request to Call
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <p className="text-gray-400 text-lg mb-4">No products found in this category.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gir-orange font-bold hover:underline"
            >
              Browse Homepage <ChevronRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
