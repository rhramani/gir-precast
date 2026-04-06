import { useParams } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const { category } = useParams();

  const allProducts: Record<string, any[]> = {
    "compound-wall": [
      { name: "Concrete Folding Compound Wall", image: "/images/generated/product-rcc-compound.webp", description: "Premium concrete folding walls", href: "/product/concrete-folding-compound-wall" },
      { name: "Concrete Precast Single Panel Wall", image: "/images/generated/product-precast-wall.webp", description: "High-quality precast panels", href: "/product/concrete-precast-single-panel-wall" },
      { name: "Factory Boundary Wall", image: "/images/generated/product-boundary-wall.webp", description: "Industrial-grade boundary walls", href: "/product/concrete-folding-compound-wall" },
    ],
    "boundary-wall": [
      { name: "Cement Boundary Wall", image: "/images/generated/product-boundary-wall.webp", description: "Durable cement walls", href: "/product/cement-boundary-wall" },
      { name: "Concrete Boundary Wall", image: "/images/generated/product-boundary-wall.webp", description: "Strong concrete construction", href: "/product/cement-boundary-wall" },
    ],
    "cement-wall": [
      { name: "Pre Fabricated Cement Wall", image: "/images/generated/product-rcc-compound.webp", description: "Quick installation cement walls", href: "/product/pre-fabricated-cement-wall" },
    ],
    "precast-wall": [
      { name: "Precast Wall Panels", image: "/images/generated/product-precast-wall.webp", description: "Modern precast solutions", href: "/product/concrete-precast-single-panel-wall" },
    ],
    "rcc-wall": [
      { name: "RCC Wall Panels", image: "/images/generated/product-rcc-compound.webp", description: "High-strength RCC walls", href: "/product/concrete-folding-compound-wall" },
    ],
    "other-products": [
      { name: "RCC Folding Wall", image: "/images/generated/product-boundary-wall.webp", description: "Innovative folding design", href: "/product/concrete-folding-compound-wall" },
      { name: "Readymade Walls", image: "/images/generated/product-precast-wall.webp", description: "Ready-to-install solutions", href: "/product/concrete-folding-compound-wall" },
    ],
  };

  const products = allProducts[category || ""] || [];
  const categoryTitle = category
    ? category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Products";

  return (
    <SectionWrapper
      title={categoryTitle}
      subtitle="Explore our complete range of premium wall solutions"
      bg="white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            image={product.image}
            description={product.description}
            href={product.href}
          />
        ))}
      </div>
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Product details coming soon. Please visit our <a href="/" className="text-gir-gold font-bold">homepage</a> for more information.</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Products;
