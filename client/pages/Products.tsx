import { useParams } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const { category } = useParams();

  const allProducts: Record<string, any[]> = {
    "compound-wall": [
      { name: "Concrete Folding Compound Wall", image: "/images/generated/cat-compound.webp", description: "Premium concrete folding walls designed for quick installation and high durability.", href: "/product/concrete-folding-compound-wall" },
      { name: "Concrete Precast Single Panel Wall", image: "/images/generated/product-precast-wall.webp", description: "High-quality single panel precast solutions for modern boundary requirements.", href: "/product/concrete-precast-single-panel-wall" },
      { name: "Factory Boundary Wall", image: "/images/generated/manufacturing-unit.webp", description: "Industrial-grade boundary walls specifically engineered for large factory perimeters.", href: "/product/factory-boundary-wall" },
      { name: "Heavy Readymade Boundary Wall", image: "/images/generated/product-boundary-wall.webp", description: "Robust readymade solutions offering maximum security and structural integrity.", href: "/product/heavy-readymade-boundary-wall" },
      { name: "Industrial Compound Wall", image: "/images/generated/cat-compound.webp", description: "Heavy-duty compound walls built to withstand harsh industrial environments.", href: "/product/industrial-compound-wall" },
      { name: "Panel Build RCC Compound Wall", image: "/images/generated/product-rcc-compound.webp", description: "Advanced RCC panel construction for long-lasting performance.", href: "/product/rcc-compound-wall" },
    ],
    "boundary-wall": [
      { name: "Cement Boundary Wall", image: "/images/generated/cat-cement.webp", description: "Durable cement-based boundary solutions for various property types.", href: "/product/cement-boundary-wall" },
      { name: "Concrete Boundary Wall", image: "/images/generated/cat-boundary.webp", description: "Strong concrete construction ensuring long-term stability and protection.", href: "/product/concrete-boundary-wall" },
      { name: "Concrete Prestressed Boundary Walls", image: "/images/generated/product-boundary-wall.webp", description: "Prestressed technology for enhanced strength and crack resistance.", href: "/product/concrete-prestressed-boundary-walls" },
      { name: "Precast Boundary Wall", image: "/images/generated/product-precast-wall.webp", description: "Modern precast solutions offering aesthetic appeal and functionality.", href: "/product/precast-boundary-wall" },
      { name: "RCC Boundary Wall", image: "/images/generated/product-rcc-compound.webp", description: "Reinforced cement concrete walls for ultimate security.", href: "/product/rcc-boundary-wall" },
      { name: "Readymade Boundary Wall", image: "/images/generated/cat-boundary.webp", description: "Instant boundary solutions with easy on-site installation.", href: "/product/readymade-boundary-wall" },
      { name: "Solar Plant Boundary Wall", image: "/images/generated/manufacturing-unit.webp", description: "Specialized boundary solutions for solar power plants.", href: "/product/solar-plant-boundary-wall" },
    ],
    "cement-wall": [
      { name: "Pre Fabricated Cement Wall", image: "/images/generated/cat-cement.webp", description: "Quick installation pre-fabricated cement walls for multiple uses.", href: "/product/pre-fabricated-cement-wall" },
      { name: "RCC Cement Wall", image: "/images/generated/product-rcc-compound.webp", description: "High-strength RCC cement walls for commercial applications.", href: "/product/rcc-cement-wall" },
    ],
    "other-products": [
      { name: "Precast Wall", image: "/images/generated/product-precast-wall.webp", description: "Versatile precast wall solutions for diverse construction needs.", href: "/product/precast-wall" },
      { name: "RCC Folding Wall", image: "/images/generated/product-rcc-compound.webp", description: "Innovative folding design for flexible and portable walling.", href: "/product/rcc-folding-wall" },
      { name: "RCC Wall", image: "/images/generated/product-rcc-compound.webp", description: "Standard high-quality RCC walls for generic boundary needs.", href: "/product/rcc-wall" },
      { name: "Readymade Walls", image: "/images/generated/product-precast-wall.webp", description: "Complete ready-to-install wall systems for rapid project completion.", href: "/product/readymade-walls" },
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
          <p className="text-gir-dark-gray text-lg">Product details coming soon. Please visit our <a href="/" className="text-gir-orange font-bold">homepage</a> for more information.</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Products;


