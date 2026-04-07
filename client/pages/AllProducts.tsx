import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";
import { ChevronRight } from "lucide-react";

const AllProducts = () => {
  // Group products by category
  const categories = [
    { slug: "compound-wall", name: "Compound Wall", description: "Premium compound wall solutions for residential, commercial & industrial projects" },
    { slug: "boundary-wall", name: "Boundary Wall", description: "Durable boundary walls engineered for maximum security and longevity" },
    { slug: "cement-wall", name: "Cement Wall", description: "High-quality cement wall systems for versatile applications" },
    { slug: "other-products", name: "Other Products", description: "Specialized precast wall solutions for unique project requirements" },
  ];

  const getProductsByCategory = (categorySlug: string) => {
    return productsData.filter((p) => p.categorySlug === categorySlug);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue font-medium">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Products</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Our Products"
        subtitle="Explore our complete range of premium precast wall solutions — built for strength, durability, and rapid installation."
        bg="white"
      >
        {categories.map((category) => {
          const products = getProductsByCategory(category.slug);
          if (products.length === 0) return null;

          return (
            <div key={category.slug} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gir-dark-blue">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-xl">{category.description}</p>
                </div>
                <Link
                  to={`/products/${category.slug}`}
                  className="inline-flex items-center gap-2 text-gir-orange font-bold text-sm hover:underline underline-offset-4 whitespace-nowrap group"
                >
                  View All {category.name}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Orange accent line */}
              <div className="w-full h-px bg-gradient-to-r from-gir-orange via-gir-orange/30 to-transparent mb-10" />

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product) => (
                  <ProductCard
                    key={product.slug}
                    name={product.name}
                    image={product.image}
                    description={product.description}
                    href={`/product/${product.slug}`}
                  />
                ))}
              </div>

              {/* Show "View All" if more than 8 products */}
              {products.length > 8 && (
                <div className="text-center mt-8">
                  <Link
                    to={`/products/${category.slug}`}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gir-dark-blue text-white font-bold rounded-lg hover:bg-gir-orange transition-colors"
                  >
                    View All {products.length} Products
                    <ChevronRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </SectionWrapper>
    </div>
  );
};

export default AllProducts;
