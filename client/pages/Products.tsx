import { useParams } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const { category } = useParams();

  const allProducts: Record<string, any[]> = {
    "compound-wall": [
      { name: "Concrete Folding Compound Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Premium concrete folding walls", href: "#" },
      { name: "Concrete Precast Single Panel Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "High-quality precast panels", href: "#" },
      { name: "Factory Boundary Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Industrial-grade boundary walls", href: "#" },
    ],
    "boundary-wall": [
      { name: "Cement Boundary Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Durable cement walls", href: "#" },
      { name: "Concrete Boundary Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Strong concrete construction", href: "#" },
    ],
    "cement-wall": [
      { name: "Pre Fabricated Cement Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Quick installation cement walls", href: "#" },
    ],
    "precast-wall": [
      { name: "Precast Wall Panels", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Modern precast solutions", href: "#" },
    ],
    "rcc-wall": [
      { name: "RCC Wall Panels", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "High-strength RCC walls", href: "#" },
    ],
    "other-products": [
      { name: "RCC Folding Wall", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Innovative folding design", href: "#" },
      { name: "Readymade Walls", image: "https://images.unsplash.com/photo-1581578731548-c64695c952950?w=500&h=300&fit=crop", description: "Ready-to-install solutions", href: "#" },
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
          <p className="text-gray-600 text-lg">Product details coming soon. Please visit our <a href="/" className="text-sk-gold font-bold">homepage</a> for more information.</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Products;
