export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  gallery?: string[];
  price?: string;
  priceRange?: {
    min: number;
    max: number;
    unit: string;
  };
  moq?: string;
  description: string;
  longDescription?: string;
  features: string[];
  benefits?: string[];
  specifications: Record<string, string>;
  technicalSpecs?: Record<string, string>;
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
    slug: "readymade-compound-wall",
    name: "Readymade Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-readymade-compound-v2.webp",
    gallery: [
      "/images/generated/product-readymade-compound-v2.webp",
      "/images/generated/product-single-mould-rcc.webp",
      "/images/generated/product-panel-build-rcc.webp"
    ],
    priceRange: { min: 80, max: 150, unit: "Square Feet" },
    moq: "500 Feet",
    description: "Our Readymade Compound Walls are the ideal solution for quick and durable security. Manufactured in controlled conditions, they offer consistent quality and superior structural integrity for residential and commercial use.",
    longDescription: "We are a leading Readymade Compound Wall Manufacturer, providing durable, high-quality, and visually appealing compound wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed for quick and easy installation, saving time and reducing labor costs without compromising on strength or durability. Manufactured using premium materials and modern techniques, our walls offer excellent structural integrity, security, and minimal maintenance.\n\nAs a trusted Readymade Compound Wall Manufacturer, we prioritize precision, timely delivery, and customer satisfaction, making our solutions the perfect choice for clients seeking cost-effective, robust, and attractive compound walls for any construction or boundary requirement.",
    features: ["Durable", "Quality Tested", "Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    benefits: ["Quality tested structure", "Weather resistant", "Reusable components"],
    specifications: {
      "Packaging Type": "Multicolor",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Material": "Cement, Concrete"
    },
    technicalSpecs: {
      "Material Grade": "M25/M30",
      "Column Support": "150x150mm",
      "Finish": "Natural Grey / Colored",
      "Warranty": "10 Years Structural"
    }
  },
  {
    slug: "precast-heavy-duty-compound-wall",
    name: "Precast Heavy Duty Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-heavy-duty-compound.webp",
    gallery: [
      "/images/generated/product-heavy-duty-compound.webp",
      "/images/generated/product-factory-boundary.webp"
    ],
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "500 Sq Ft",
    description: "Designed for industrial perimeters, these heavy-duty walls feature reinforced steel and high-grade concrete (M30). They provide maximum security and withstand high impact and weather extremes.",
    longDescription: "We offer high-quality precast compound walls designed for heavy-duty applications. Our walls are available in heights ranging from 2700mm to 4500mm and a thickness of 227mm x 227mm, made from durable high carbon steel (4mm). The grey cement color adds a sleek look to the structure, with a weight of 100 Kg/meter. These M30 grade compound walls are ideal for various industrial and commercial settings.",
    features: ["Durable", "High Carbon Steel", "Heavy Duty", "Reliability"],
    specifications: {
      "Height": "2700 Mm - 4500 Mm",
      "Weight": "100 Kg/meter",
      "Thickness": "227 Mm X 227 Mm",
      "Material": "High Carbon Steel (4 Mm)",
      "Grade": "M30",
      "Color": "Grey (Cement Colour)"
    }
  },
  {
    slug: "rcc-industrial-one-piece-compound-wall",
    name: "RCC Industrial One Piece Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-factory-boundary.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "500 Sq Ft",
    description: "Our RCC Industrial One Piece Compound Wall is a premium, durable solution for large-scale industrial boundaries. Made from high-quality Reinforced Cement Concrete, these walls are designed in a single-piece mold to provide maximum structural integrity.",
    longDescription: "Our RCC Industrial One Piece Compound Wall is a premium, durable solution for large-scale industrial boundaries. Made from high-quality Reinforced Cement Concrete, these walls are designed in a single-piece mold to provide maximum structural integrity and a seamless, smooth finish. The grey cement color and professional design make them suitable for a variety of industrial and commercial applications where security and longevity are paramount.",
    features: ["Durable", "One Piece Design", "Smooth Finish", "High Structural Integrity"],
    specifications: {
      "Type": "Compound Wall",
      "Material": "Reinforced Cement Concrete",
      "Color": "Grey",
      "Application": "Industrial",
      "Size": "Standard",
      "Design": "One Piece",
      "Finishing": "Smooth"
    }
  },
  {
    slug: "panel-build-rcc-precast-compound-wall",
    name: "Panel Build RCC Precast Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-panel-build-rcc.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "We offer high-quality RCC precast compound walls with a smooth finish, available in standard sizes and various colors. Ideal for boundary wall applications.",
    longDescription: "We offer high-quality RCC precast compound walls with a smooth finish, available in standard sizes and various colors. Ideal for boundary wall applications, our reinforced cement concrete walls are durable, sturdy, and require low maintenance. Our panel-build system allows for efficient installation and superior structural integrity, making it an excellent choice for both residential and commercial projects.",
    features: ["Long-lasting", "Sturdy", "Smooth Finish", "Customizable Colors", "Low Maintenance"],
    specifications: {
      "Finishing": "Smooth Finish",
      "Size": "Standard Sizes Available",
      "Application": "Boundary Wall, Security Wall",
      "Material": "Reinforced Cement Concrete (RCC)",
      "Type": "RCC Precast Compound Wall"
    }
  },
  {
    slug: "single-mould-rcc-precast-compound-wall",
    name: "Single Mould RCC Precast Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-single-mould-rcc.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Manufactured using high-precision single moulds, these walls ensure uniform measurements and a seamless, high-quality surface finish across all panels.",
    longDescription: "We are a leading Manufacturer and Supplier of high-quality Single Mould RCC Precast Compound Walls, proudly made in India. Our precast compound walls are crafted from durable Reinforced Cement Concrete (RCC) and are available in a variety of colors to suit your preferences. Our single-mould technology ensures uniform strength and a flawless surface, making these walls a superior choice.",
    features: ["Reliable", "Stylish", "Built to Last", "Durable", "Single Mould Technology"],
    specifications: {
      "Country of Origin": "India",
      "Type": "RCC Precast Compound Wall",
      "Material": "Reinforced Cement Concrete (RCC)",
      "Finishing": "Smooth Finish"
    }
  },
  {
    slug: "concrete-precast-single-panel-wall",
    name: "Concrete Precast Single Panel Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-single-panel-wall.webp",
    gallery: [
      "/images/generated/product-single-panel-wall.webp",
      "/images/generated/product-readymade-compound-v2.webp"
    ],
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Sleek and modular single-panel walls that combine aesthetic appeal with the rugged strength of precast concrete.",
    longDescription: "We offer high-quality Concrete Precast Single Panel Walls in standard sizes for wall construction. Our precast concrete panels come in various colors, providing a smooth finish and high durability. Made from concrete, these panels require low maintenance, making them ideal for long-lasting wall solutions.",
    features: ["High Durability", "Low Maintenance", "Smooth Finish", "Quick Installation"],
    specifications: {
      "Size": "Standard Size For Wall Panels",
      "Type": "Precast Concrete Panel",
      "Material": "Concrete",
      "Finish": "Smooth",
      "Durability": "High Durability"
    }
  },
  {
    slug: "heavy-readymade-boundary-wall",
    name: "Heavy Readymade Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Engineered for maximum stability, these heavy readymade boundary walls provide a cost-effective alternative to traditional brickwork.",
    longDescription: "We are a trusted Readymade Boundary Wall Manufacturer, offering high-quality, durable, and aesthetically appealing boundary wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed for quick installation, reducing construction time and labor costs while ensuring long-lasting strength and stability.",
    features: ["High-strength RCC", "Anti-climb Design", "Barbed Wire Support", "Fire-resistant", "Smooth Finish"],
    specifications: {
      "Material": "High-strength RCC",
      "Surface Finish": "Smooth",
      "Wall Thickness": "200-300 Mm",
      "Wall Height": "2.5-4.0 Meters"
    }
  },
  {
    slug: "factory-boundary-wall",
    name: "Factory Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-factory-boundary.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "High-height boundary walls designed specifically for factory environments. Focus on security, privacy, and noise reduction.",
    longDescription: "We offer high-strength concrete factory boundary walls ranging from 6 to 12 feet in height, designed for durability and weather-resistance. With a wall thickness of 200-400 mm and anti-climb features, our walls provide enhanced security for factories. Low-maintenance and suitable for various applications.",
    features: ["Weather-resistant", "Corrosion-resistant", "Long-lasting", "Anti-climb Design"],
    specifications: {
      "Wall Height": "6-12 Feet",
      "Material": "High-strength Concrete",
      "Wall Thickness": "200-400 mm",
      "Safety Features": "Anti-climb Design, Barbed Wire"
    }
  },
  {
    slug: "precast-heavy-duty-boundary-wall",
    name: "Precast Heavy Duty Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-heavy-duty-compound.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Industrial strength boundary walls that use heavily reinforced precast panels. Maximum strength and stability.",
    longDescription: "We are a trusted Precast Heavy Duty Wall Manufacturer, offering durable and high-quality wall solutions for industrial, commercial, and residential projects. Our heavy-duty precast walls are engineered to withstand extreme loads, harsh weather conditions, and long-term wear, ensuring maximum strength and stability.",
    features: ["High-strength RCC", "Anti-climb", "Barbed Wire Support", "Soundproofing", "Fire-resistant"],
    specifications: {
      "Wall Type": "Precast Reinforced Concrete",
      "Material": "High-strength RCC",
      "Wall Thickness": "150-300 mm",
      "Origin of Country": "India"
    }
  },
  {
    slug: "panel-build-rcc-compound-wall",
    name: "Panel Build RCC Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-panel-build-rcc.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    description: "A professional compound wall system utilizing the 'panel-build' method for rapid onsite installation and high structural integrity.",
    longDescription: "We offer high-quality Panel Build RCC Compound Walls with a contemporary appearance and a non-polished finish. Made in India, our RCC panels are designed for both construction and boundary applications, providing a robust and aesthetic solution for property fencing.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Contemporary Appearance", "Durable"],
    specifications: {
      "Material": "RCC",
      "Finishing": "Non Polished",
      "Appearance": "Contemporary",
      "Country of Origin": "India"
    }
  },
  {
    slug: "concrete-folding-compound-wall",
    name: "Concrete Folding Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "We are a leading Concrete Folding Compound Wall Manufacturer, offering durable, high-quality, and robust boundary solutions for residential and commercial construction projects.",
    longDescription: "Our folding compound walls are designed for efficient installation and long-lasting performance, providing a sturdy and secure perimeter for your property. Manufactured with high-grade concrete, these walls offer excellent resistance to environmental factors and require minimal maintenance. Our solutions are cost-effective, saving time and labor on-site, while enhancing the overall security and aesthetic of your property boundaries.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Durable", "Cost Effective"],
    specifications: {
      "Material": "Concrete",
      "Application": "Boundaries, Construction",
      "Country of Origin": "India"
    }
  },
  {
    slug: "industrial-compound-wall",
    name: "Industrial Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-factory-boundary.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "We are a leading Industrial Compound Wall Manufacturer, providing high-quality, durable, and robust boundary wall solutions for industrial facilities.",
    longDescription: "Manufactured using premium-grade materials and advanced precast techniques, our industrial compound walls are quick to install, low-maintenance, and built to withstand harsh environmental conditions. They provide an efficient and cost-effective alternative to traditional boundary walls, making them ideal for large-scale industrial projects.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Contemporary Appearance", "Durable"],
    specifications: {
      "Material": "Cement",
      "Application": "Boundaries, Industrial",
      "Type": "Compound Wall",
      "Country of Origin": "India"
    }
  },
  {
    slug: "prefab-rcc-readymade-precast-compound-wall",
    name: "Prefab RCC Readymade Precast Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-precast-wall.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "We specialize in providing high-quality Prefab RCC Readymade Precast Compound Walls that are engineered for durability and ease of installation.",
    longDescription: "Our prefab compound walls are designed to be easily assembled on-site, significantly reducing construction time and labor costs. With a focus on structural integrity and aesthetic appeal, these walls provide a reliable and attractive fencing option for various applications, including house boundaries and industrial sites.",
    features: ["Easily Assembled", "High Strength", "Durable", "Quick Installation", "Cost Effective"],
    specifications: {
      "Application": "House and External Boundary",
      "Material": "RCC",
      "Built Type": "Prefab",
      "Width": "7 Feet"
    }
  },
  {
    slug: "rcc-readymade-compound-wall",
    name: "RCC Readymade Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "Our RCC Readymade Compound Wall is a premium boundary solution designed for a variety of construction and residential needs.",
    longDescription: "Crafted from high-quality Reinforced Cement Concrete, these walls offer superior strength and longevity. The readymade design allows for rapid installation, making it an ideal choice for projects with tight timelines. Featuring a beautiful and professional design, these walls not only provide security but also enhance the visual appeal of any property.",
    features: ["Beautiful Design", "High Strength", "Durable", "Weather Resistant", "Low Maintenance"],
    specifications: {
      "Material": "RCC",
      "Country of Origin": "India",
      "Application": "Residential and Industrial boundaries"
    }
  },
  {
    slug: "rcc-compound-wall",
    name: "RCC Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    description: "We offer top-of-the-line RCC Compound Walls that combine high structural integrity with a contemporary aesthetic.",
    longDescription: "These walls are manufactured using high-grade Reinforced Cement Concrete and are available in multiple colors to match your design preferences. The polished finish and plain pattern provide a sleek, professional look suitable for any modern property. Quality-tested to ensure they meet the highest standards of durability and strength.",
    features: ["Polished Finishing", "High Strength", "Durable", "Multiple Color Options", "Contemporary Appearance"],
    specifications: {
      "Material": "RCC",
      "Finishing": "Polished",
      "Size": "Standard",
      "Pattern": "Plain",
      "Appearance": "Contemporary"
    }
  },
  {
    slug: "rcc-folding-compound-wall",
    name: "RCC Folding Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 125, unit: "Square Feet" },
    description: "We are a premier RCC Folding Compound Wall Manufacturer, offering high-strength and versatile boundary solutions.",
    longDescription: "Our RCC folding walls are designed for quick and easy installation, which help in significantly reducing labor costs and construction time. They are reusable and provide supreme structural integrity, making them an excellent investment for property boundaries. As a trusted manufacturer, we prioritize quality and precision in every component we deliver.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Durable", "Easy Installation"],
    specifications: {
      "Material": "RCC",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm"
    }
  },
  {
    slug: "precast-compound-walls",
    name: "Precast Compound Walls",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-readymade-compound-v2.webp",
    priceRange: { min: 80, max: 300, unit: "Square Feet" },
    description: "We provide high-quality Precast Compound Walls that offer a durable and professional boundary solution for residential and industrial sites.",
    longDescription: "Our walls are available in various heights and thicknesses to meet specific project requirements, ensuring a secure and long-lasting perimeter. Made with grey cement finish, these walls provide a clean and modern appearance while maintaining maximum structural strength. The precast planks and beams are engineered for quick assembly.",
    features: ["Durable", "High Strength", "Weather Resistant", "Grey Cement Finish", "Customizable Heights"],
    specifications: {
      "Color": "Grey, Cement",
      "Thickness": "38mm - 75 Mm",
      "Height": "6feet To 10feet",
      "Beam Size": "6x6 Inch",
      "Plank Length": "7.1 Feet"
    }
  },
  {
    slug: "concrete-boundary-wall",
    name: "Concrete Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 80, max: 150, unit: "Square Feet" },
    description: "We are a reliable Concrete Boundary Wall Supplier, offering high-quality, durable, and cost-effective boundary wall solutions.",
    longDescription: "Our concrete walls are designed to provide superior strength, stability, and long-lasting performance while requiring minimal maintenance. Manufactured using premium-grade materials, our walls ensure a secure and attractive perimeter for any property. They are resistant to weathering and provide an excellent barrier for property protection.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Durable", "Weather Resistant"],
    specifications: {
      "Material": "Concrete",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm"
    }
  },
  {
    slug: "precast-boundary-wall",
    name: "Precast Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "We offer high-quality Precast Boundary Walls that provide a sturdy and reliable fencing solution for various property boundaries.",
    longDescription: "Our precast walls are manufactured with high-strength cement and concrete, ensuring maximum durability and structural integrity. They are designed for quick and easy installation, making them a preferred choice for both small and large-scale projects. They offer a clean, professional finish that enhances the overall aesthetic.",
    features: ["Durable", "High Strength", "Quality Tested", "Easy Installation", "Low Maintenance", "Weather Resistant"],
    specifications: {
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm"
    }
  },
  {
    slug: "rcc-boundary-wall",
    name: "RCC Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    gallery: [
      "/images/generated/product-boundary-wall.webp",
      "/images/generated/gallery-1.webp",
      "/images/generated/gallery-2.webp"
    ],
    priceRange: { min: 80, max: 150, unit: "Feet" },
    description: "Our RCC Boundary Wall is a high-strength, premium fencing solution designed to provide lasting security.",
    longDescription: "Manufactured using high-quality Reinforced Cement Concrete, these walls offer exceptional durability and resistance to wear and tear over time. They are suitable for various applications, including delimiting homes, buildings, and industrial plots. They are engineered for efficient on-site installation, providing a cost-effective alternative to traditional brick walls.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "High Durability", "Low Maintenance"],
    specifications: {
      "Material": "Rcc",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm"
    }
  },
  {
    slug: "readymade-boundary-wall",
    name: "Readymade Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Instant boundary solutions for those who value time and quality. Our readymade walls are delivered ready for quick pillar-and-panel assembly.",
    longDescription: "We offer high-quality Precast Readymade Boundary Walls that provide a sturdy and reliable fencing solution for various property boundaries. Our precast walls are manufactured with high-strength cement and concrete, ensuring maximum durability and structural integrity.",
    features: ["Instant setup", "High Strength", "Quality Tested", "Easy Installation"],
    specifications: {
      "Material": "Concrete, Cement",
      "Application": "Boundaries",
      "Installation": "Fast assembly"
    }
  },
  {
    slug: "solar-plant-boundary-wall",
    name: "Solar Plant Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-solar-plant-boundary.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "Specialized wall systems for solar parks and energy plants. Designed to be cost-effective for large perimeters while providing high-level security.",
    longDescription: "Our solar plant boundary walls are specifically engineered for large-scale energy projects. They offer a balance of security, cost-efficiency, and rapid deployment. The modular nature of these precast walls allows for easy expansion or relocation as the plant grows.",
    features: ["Cost-effective for large scale", "Modular & Reusable", "Save Time", "Supreme Strength"],
    specifications: {
      "Application": "Solar Plants",
      "Material": "RCC",
      "Feature": "Time saving"
    }
  },
  {
    slug: "cement-boundary-wall",
    name: "Cement Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-cement-wall-prefab.webp",
    priceRange: { min: 55, max: 110, unit: "Square Feet" },
    description: "Traditional strength with modern finishing. Our cement boundary walls are the reliable choice for thousands of customers.",
    longDescription: "Manufactured using high-grade cement, these boundary walls offer a classic look with modern durability. They are built to withstand environmental stress and provide a clean, professional finish for any property boundary.",
    features: ["Reliable strength", "Durable", "Quality Tested", "Cost Effective"],
    specifications: {
      "Primary Material": "Cement",
      "Application": "Boundaries",
      "Country of Origin": "India"
    }
  },
  {
    slug: "concrete-prestressed-boundary-walls",
    name: "Concrete Prestressed Boundary Walls",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "https://2.wlimg.com/product_images/bc-full/2021/10/9434574/rcc-boundary-wall-1635245755-6053778.jpeg",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    description: "Using pre-stressing technology, these walls are thinner yet stronger than conventional precast walls.",
    longDescription: "Our prestressed boundary walls utilize advanced tensioning techniques to achieve superior strength-to-weight ratios. This results in walls that are easier to handle and install while being exceptionally resistant to external pressures and environmental factors.",
    features: ["Pre-stressed cables", "Higher strength-to-weight ratio", "Accurate Dimension", "Durable"],
    specifications: {
      "Material": "Concrete",
      "Feature": "Accurate Dimension",
      "Application": "Boundaries"
    }
  },

  // --- CEMENT WALLS ---
  {
    slug: "rcc-cement-wall",
    name: "RCC Cement Wall",
    category: "CEMENT WALL",
    categorySlug: "cement-wall",
    image: "/images/generated/product-cement-wall-prefab.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    description: "High-grade RCC cement walls that provide a clean and professional look for commercial and residential boundaries.",
    longDescription: "Our RCC cement walls are manufactured under strict quality controls to ensure consistent strength and surface finish. They are a versatile choice for a wide range of boundary and partition applications, offering long-term durability and low maintenance.",
    features: ["Consistent quality", "High Strength", "Durable", "Smooth Finish"],
    specifications: {
      "Material": "RCC",
      "Finish": "Natural Cement",
      "Country of Origin": "India"
    }
  },
  {
    slug: "pre-fabricated-cement-wall",
    name: "Pre Fabricated Cement Wall",
    category: "CEMENT WALL",
    categorySlug: "cement-wall",
    image: "/images/generated/product-panel-build-rcc.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "Our prefabricated walls are cast in-factory and delivered to your site, ensuring a zero-waste and rapid installation process.",
    longDescription: "Designed for speed and efficiency, our prefabricated cement walls eliminate the mess and delays of onsite casting. Each panel is factory-built to precise specifications, allowing for a seamless fit and immediate assembly upon delivery.",
    features: ["Quick installation", "Zero waste onsite", "High Strength", "Durable"],
    specifications: {
      "Type": "Prefab",
      "Material": "Cement",
      "Application": "Construction"
    }
  },

  // --- OTHER PRODUCTS ---
  {
    slug: "rcc-wall",
    name: "RCC Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    description: "Reinforced cement concrete walls built to IS standards. These provide a robust, long-term solution for all boundary needs.",
    longDescription: "Our standard RCC walls are the foundation of our product line, offering reliable performance for various land management and security needs. They are reinforced with high-grade steel to ensure maximum resistance against impact and environmental forces.",
    features: ["IS Grade Quality", "High Strength", "Durable", "Reliable"],
    specifications: {
      "Material": "RCC",
      "Application": "Boundaries, Construction",
      "Country of Origin": "India"
    }
  },
  {
    slug: "precast-wall",
    name: "Precast Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-readymade-compound-v2.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "Versatile precast concrete wall panels for various construction needs. Durable, accurate in size, and quick to set up.",
    longDescription: "Our precast wall panels are suitable for a wide variety of industrial and residential applications. They offer high dimensional accuracy and are produced in a controlled environment to ensure the highest quality and strength.",
    features: ["Versatile use", "High Strength", "Accurate Dimension", "Durable"],
    specifications: {
      "Material": "Concrete",
      "Category": "General Precast",
      "Country of Origin": "India"
    }
  },
  {
    slug: "rcc-folding-wall",
    name: "RCC Folding Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    description: "Heavy-duty RCC walls with a modular folding design. Easy to relocate and reconfigure for evolving land management needs.",
    longDescription: "Our RCC folding walls provide the flexibility of a modular system without compromising on the strength of reinforced concrete. They are ideal for temporary perimeters or situations where the boundary might need to be adjusted in the future.",
    features: ["Foldable design", "Modular", "High Strength", "Relocatable"],
    specifications: {
      "Material": "RCC",
      "Mechanism": "Folding",
      "Application": "Boundaries"
    }
  },
  {
    slug: "readymade-walls",
    name: "Readymade Walls",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-readymade-walls.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    description: "High-quality readymade walls that arrive ready for assembly. Eliminate common construction delays and labor issues.",
    longDescription: "Our readymade walls are the perfect solution for fast-paced construction schedules. They arrive at your site ready for immediate installation, significantly reducing total project time and onsite labor requirements.",
    features: ["Zero onsite casting", "Quick Installation", "High Strength", "Durable"],
    specifications: {
      "Design": "Contemporary/Compound",
      "Material": "RCC",
      "Country of Origin": "India"
    }
  }
];
