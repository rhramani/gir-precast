export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  price?: string;
  moq?: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

const defaultSpecs = {
  "Business Type": "Manufacturer, Supplier, Service Provider",
  "Country of Origin": "India",
  "Material": "Reinforced Concrete / RCC",
  "Feature": "High Strength, Durable, Quality Tested",
  "Installation": "Quick On-site Installation"
};

const defaultFeatures = [
  "Weather resistant and termite-proof",
  "Advanced precast technology",
  "Minimal onsite labor required",
  "Eco-friendly and sustainable construction",
  "Superior surface finish"
];

export const productsData: ProductDetail[] = [
  // --- COMPOUND WALLS ---
  {
    slug: "concrete-folding-compound-wall",
    name: "Concrete Folding Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    price: "₹ 60.00 - 120.00 / Square Feet",
    description: "Expertly designed for easy handling and modular assembly, our Concrete Folding Compound Walls are perfect for diverse terrain. These walls offer a secure, robust solution for both residential and industrial perimeters.",
    features: ["Modular folding design", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Wall Height": "6ft - 10ft" }
  },
  {
    slug: "concrete-precast-single-panel-wall",
    name: "Concrete Precast Single Panel Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-precast-wall.webp",
    description: "Our single-panel precast walls provide a seamless and modern boundary aesthetic. Manufactured in a controlled facility, each panel ensures maximum structural integrity and a smooth professional finish.",
    features: ["Single panel continuity", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Type": "Precast Single Panel" }
  },
  {
    slug: "factory-boundary-wall",
    name: "Factory Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-boundary-wall.webp",
    description: "Heavy-duty compound walls engineered for industrial security. These walls are built to withstand high-impact environments and provide substantial privacy and noise reduction for factory settings.",
    features: ["Industrial grade security", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Application": "Factory/Industry" }
  },
  {
    slug: "heavy-readymade-boundary-wall",
    name: "Heavy Readymade Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    description: "The gold standard for high-security enclosures. Our heavy readymade boundary walls feature dense reinforcement and thick concrete panels, providing an impenetrable boundary for your assets.",
    features: ["Heavy TMT reinforcement", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Strength": "High-Grade RCC" }
  },
  {
    slug: "industrial-compound-wall",
    name: "Industrial Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-precast-wall.webp",
    description: "Professional boundary solutions for corporate and industrial hubs. These walls combine aesthetic appeal with the rugged strength needed for long-term perimeter management.",
    features: ["Corporate finish", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Usage": "Commercial/Industrial" }
  },

  // --- BOUNDARY WALLS ---
  {
    slug: "cement-boundary-wall",
    name: "Cement Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/cat-cement.webp",
    price: "₹ 55.00 - 110.00 / Square Feet",
    description: "Durable and budget-friendly cement boundary walls. These are ideal for agricultural land, garden plots, and residential projects where reliable marking and security are required.",
    features: ["Affordable and strong", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Primary Material": "High-Grade Cement" }
  },
  {
    slug: "concrete-boundary-wall",
    name: "Concrete Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/cat-boundary.webp",
    description: "Our core concrete boundary wall solution, optimized for weather resilience and structural longevity. A trusted choice for thousands of properties across Palwal and beyond.",
    features: ["Proven durability", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Mix Design": "M20/M25" }
  },
  {
    slug: "concrete-prestressed-boundary-walls",
    name: "Concrete Prestressed Boundary Walls",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/manufacturing-unit.webp",
    description: "Engineered using advanced prestressing techniques, these walls offer superior stability and resistance to external pressure compared to conventional walls. Ideal for high-pressure environments.",
    features: ["Prestressed technology", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Feature": "Accurate Dimension, High Stability" }
  },
  {
    slug: "precast-boundary-wall",
    name: "Precast Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    description: "Modern precast boundary solutions that minimize construction time. These walls are manufactured under strict supervision, resulting in a finish and quality that onsite masonry cannot match.",
    features: ["Zero on-site waste", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Type": "Prefabricated" }
  },
  {
    slug: "rcc-boundary-wall",
    name: "RCC Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-rcc-compound.webp",
    description: "High-strength Reinforced Cement Concrete walls. We utilize vibrational manufacturing techniques to ensure maximum concrete density and elimination of all air pockets for maximum strength.",
    features: ["Reinforced for safety", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Internal Material": "Steel + Concrete" }
  },

  // --- CEMENT WALLS ---
  {
    slug: "pre-fabricated-cement-wall",
    name: "Pre Fabricated Cement Wall",
    category: "CEMENT WALL",
    categorySlug: "cement-wall",
    image: "/images/generated/cat-cement.webp",
    description: "A fast alternative to traditional construction. Our prefabricated cement walls are optimized for commercial projects requiring rapid perimeter enclosure without sacrificing structural quality.",
    features: ["Rapid deployment", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Type": "Prefab" }
  },
  {
    slug: "rcc-cement-wall",
    name: "RCC Cement Wall",
    category: "CEMENT WALL",
    categorySlug: "cement-wall",
    image: "/images/generated/product-rcc-compound.webp",
    description: "Combining the rugged strength of RCC with a smooth cement finish, these walls are a practical and professional choice for urban and suburban boundaries.",
    features: ["Smooth surface", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Finish": "Polished Cement" }
  },

  // --- OTHER PRODUCTS ---
  {
    slug: "precast-wall",
    name: "Precast Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-precast-wall.webp",
    description: "Multi-purpose precast wall panels designed for versatility. These can be adapted for a variety of boundary and partitioning needs in both residential and industrial sectors.",
    features: ["Highly adaptable", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Category": "General Precast" }
  },
  {
    slug: "rcc-folding-wall",
    name: "RCC Folding Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    description: "Innovative folding mechanism combined with RCC strength. This allow for modular boundary management, making it an excellent choice for expandable project perimeters.",
    features: ["Modular scalability", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Mechanism": "Folding" }
  },
  {
    slug: "rcc-wall",
    name: "RCC Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    description: "Standard high-performance RCC walls. Our manufacturing process ensures that every panel meeting strict IS standards for load-bearing and weather resistance.",
    features: ["IS Grade Quality", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Standards": "IS Compliant" }
  },
  {
    slug: "readymade-walls",
    name: "Readymade Walls",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-precast-wall.webp",
    description: "Stop waiting for bricklayers. Our readymade walls provide an instant boundary solution that is stronger, faster, and more professional than any traditional method.",
    features: ["Instant installation", ...defaultFeatures],
    specifications: { ...defaultSpecs, "Availability": "Ready for Shipping" }
  }
];
