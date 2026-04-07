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
  productDetails?: Record<string, string>;
  tableSpecifications?: Record<string, string>;
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
    description: "We are a leading Readymade Compound Wall Manufacturer, providing durable, high-quality, and visually appealing compound wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed for quick and easy installation, saving time and reducing labor costs without compromising on strength or durability.",
    longDescription: "We are a leading Readymade Compound Wall Manufacturer, providing durable, high-quality, and visually appealing compound wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed for quick and easy installation, saving time and reducing labor costs without compromising on strength or durability. Manufactured using premium materials and modern techniques, our walls offer excellent structural integrity, security, and minimal maintenance. As a trusted Readymade Compound Wall Manufacturer, we prioritize precision, timely delivery, and customer satisfaction, making our solutions the perfect choice for clients seeking cost-effective, robust, and attractive compound walls for any construction or boundary requirement.",
    features: ["Durable", "Quality Tested", "Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    benefits: ["Quality tested structure", "Weather resistant", "Reusable components"],
    specifications: {
      "Feature": "Durable, Quality Tested",
      "Application": "Construction",
      "Material": "Cement, Concrete"
    },
    technicalSpecs: {
      "Material Grade": "M25/M30",
      "Column Support": "150x150mm",
      "Finish": "Natural Grey / Colored",
      "Warranty": "10 Years Structural",
    },
    productDetails: {
      "Packaging Type": "Multicolor",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {

      "Business Type": "Manufacturer, Supplier",
      "Feature": "Durable, Quality Tested",
      "Application": "Construction",
      "Material": "Cement, Concrete",
      "Packaging Type": "Multicolor",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
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
    moq: "500 Square Feet",
    description: "We are a premier Precast Heavy Duty Compound Wall Manufacturer, specializing in high-strength, durable, and reliable boundary wall solutions for large-scale industrial, commercial, and infra projects. Our heavy-duty precast walls are engineered to withstand extreme environmental conditions and provide superior security and structural stability.",
    longDescription: "We offer high-quality precast compound walls designed for heavy-duty applications. Our walls are available in heights ranging from 2700mm to 4500mm and a thickness of 227mm x 227mm, made from durable high carbon steel (4mm). The grey cement color adds a sleek look to the structure, with a weight of 100 Kg/meter. These M30 grade compound walls are ideal for various industrial and commercial settings. As a leading manufacturer and supplier, we ensure top-notch quality and reliability in every product we deliver.",
    features: ["High Strength", "Fast Installation", "Durable", "Low Maintenance", "Reinforced with High Carbon Steel", "M30 Grade Concrete"],
    specifications: {
      "Type": "Precast Compound Wall",
      "Height": "2700 Mm - 4500 Mm",
      "Weight": "100 Kg/meter",
    },
    productDetails: {
      "Thickness": "227 Mm X 227 Mm",
      "Material": "High Carbon Steel (4 Mm)",
      "Grade": "M30",
      "Color": "Grey (Cement Colour)"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Type": "Precast Compound Wall",
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
    moq: "500 Square Feet",
    description: "We are an eminent RCC Industrial One Piece Compound Wall Manufacturer, offering robust, high-durability, and seamless boundary solutions for industrial facilities, warehouses, and factories. Our one-piece RCC compound walls are engineered for maximum strength, providing a solid, impenetrable barrier.",
    longDescription: "We are an eminent RCC Industrial One Piece Compound Wall Manufacturer, offering robust, high-durability, and seamless boundary solutions for industrial facilities, warehouses, and factories. Our one-piece RCC compound walls are engineered for maximum strength, providing a solid, impenetrable barrier. The grey cement color and professional design make them suitable for a variety of industrial and commercial applications where security and longevity are paramount.",
    features: ["High Durability", "Seamless Boundary", "Maximum Strength", "Impenetrable Barrier", "Minimal Maintenance", "Heavy Impact Resistant"],
    specifications: {
      "Type": "Compound Wall",
      "Material": "Reinforced Cement Concrete",
      "Color": "Grey"
    },
    productDetails: {
      "Application": "Industrial",
      "Size": "Standard",
      "Design": "One Piece",
      "Finishing": "Smooth"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
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
    moq: "100 Square Feet",
    description: "We offer high-quality RCC precast compound walls with a smooth finish, available in standard sizes and various colors. Ideal for boundary wall applications, our reinforced cement concrete walls are durable, sturdy, and require low maintenance.",
    longDescription: "We offer high-quality RCC precast compound walls with a smooth finish, available in standard sizes and various colors. Ideal for boundary wall applications, our reinforced cement concrete walls are durable, sturdy, and require low maintenance. As a manufacturer and supplier, we provide long-lasting solutions for your fencing needs.",
    features: ["Smooth Finish", "Durable", "Sturdy", "Low Maintenance", "Reinforced", "Long-lasting"],
    specifications: {
      "Finishing": "Smooth Finish",
      "Size": "Standard Sizes Available",
      "Application": "Boundary Wall,Security Wall,Compound Wall"
    },
    productDetails: {
      "Color": "Various Colors Available",
      "Material": "Reinforced Cement Concrete (RCC)",
      "Type": "RCC Precast Compound Wall",
      "Durability": "Long-lasting And Sturdy",
      "Maintenance": "Low Maintenance Required"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Finishing": "Smooth Finish",
      "Size": "Standard Sizes Available",
      "Application": "Boundary Wall,Security Wall,Compound Wall",
      "Color": "Various Colors Available",
      "Material": "Reinforced Cement Concrete (RCC)",
      "Type": "RCC Precast Compound Wall",
      "Durability": "Long-lasting And Sturdy",
      "Maintenance": "Low Maintenance Required"
    }
  },
  {
    slug: "single-mould-rcc-precast-compound-wall",
    name: "Single Mould RCC Precast Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-single-mould-rcc.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "100 Square Feet",
    description: "We are a leading Manufacturer and Supplier of high-quality Single Mould RCC Precast Compound Walls, proudly made in India. Crafted from durable RCC and available in a variety of colors with a smooth finish, these boundary walls are perfect for enhancing property security and aesthetics.",
    longDescription: "We are a leading Manufacturer and Supplier of high-quality Single Mould RCC Precast Compound Walls, proudly made in India. Our precast compound walls are crafted from durable Reinforced Cement Concrete (RCC) and are available in a variety of colors to suit your preferences. With a smooth finish, these boundary walls are perfect for enhancing the security and aesthetics of your property. Trust us to provide you with top-notch RCC precast compound walls that are reliable, stylish, and built to last.",
    features: ["Smooth Finish", "Reliable", "Stylish", "Durable", "Quality Tested", "Custom Colors"],
    specifications: {
      "Country of Origin": "India",
      "Type": "RCC Precast Compound Wall",
      "Material": "Reinforced Cement Concrete (RCC)",
    },
    productDetails: {
      "Color": "Various Colors Available",
      "Application": "Boundary Wall, Security Wall",
      "Finishing": "Smooth Finish"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Country of Origin": "India",
      "Type": "RCC Precast Compound Wall",
      "Material": "Reinforced Cement Concrete (RCC)",
      "Color": "Various Colors Available",
      "Application": "Boundary Wall, Security Wall",
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
    moq: "100 Square Feet",
    description: "We offer high-quality Concrete Precast Single Panel Walls in standard sizes for wall construction. Our panels come in various colors, providing a smooth finish and high durability. Made from concrete, these panels require low maintenance, making them ideal for long-lasting wall solutions.",
    longDescription: "We offer high-quality Concrete Precast Single Panel Walls in standard sizes for wall construction. Our precast concrete panels come in various colors, providing a smooth finish and high durability. Made from concrete, these panels require low maintenance, making them ideal for long-lasting wall solutions. As a leading Manufacturer and Supplier, we provide top-notch products for your construction needs.",
    features: ["Smooth Finish", "High Durability", "Low Maintenance", "Standard Sizes", "Various Colors"],
    specifications: {
      "Size": "Standard Sizes Available",
      "Type": "Precast Concrete Panel",
      "Material": "Concrete"
    },
    productDetails: {
      "Color": "Various Colors Available",
      "Usage": "Wall Construction",
      "Finish": "Smooth",
      "Durability": "High Durability",
      "Maintenance": "Low Maintenance Required"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Size": "Standard Size For Wall Panels",
      "Type": "Precast Concrete Panel",
      "Material": "Concrete",
      "Color": "Various Colors Available",
      "Usage": "Wall Construction",
      "Finish": "Smooth",
      "Durability": "High Durability",
      "Maintenance": "Low Maintenance Required"
    }
  },
  {
    slug: "heavy-readymade-boundary-wall",
    name: "Heavy Readymade Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "100 Square Feet",
    description: "We are a trusted Readymade Boundary Wall Manufacturer, offering high-quality, durable, and aesthetically appealing boundary wall solutions for residential, commercial, and industrial projects.",
    longDescription: "We are a trusted Readymade Boundary Wall Manufacturer, offering high-quality, durable, and aesthetically appealing boundary wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed for quick installation, reducing construction time and labor costs while ensuring long-lasting strength and stability. Manufactured using premium-grade materials and advanced techniques, our walls provide excellent security, structural integrity, and minimal maintenance requirements. As a reliable Readymade Boundary Wall Manufacturer, we focus on precision, timely delivery, and client satisfaction, making our solutions the ideal choice for those seeking cost-effective, robust, and visually appealing boundary walls for any construction project.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Quick Installation", "Low Maintenance"],
    specifications: {
      "Optional Features": "Anti-climb Design, Barbed Wire/razor Wire Support, Fire-resistant Coating",
      "Surface Finish": "Smooth",
      "Wall Thickness": "200-300 Mm"
    },
    productDetails: {
      "Material": "High-strength RCC",
      "Application": "Factories, Industrial Complexes, Warehouses, Commercial Areas, High-security Sites",
      "Durability": "Resistant To Weathering, Corrosion, And Chemical Exposure",
      "wall height": "2.5-4.0 Meters"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Optional Features": "Anti-climb Design, Barbed Wire/razor Wire Support, Fire-resistant Coating",
      "Surface Finish": "Smooth",
      "Wall Thickness": "200-300 Mm",
      "Material": "High-strength RCC",
      "Application": "Factories, Industrial Complexes, Warehouses, Commercial Areas, High-security Sites",
      "Durability": "Resistant To Weathering, Corrosion, And Chemical Exposure",
      "wall height": "2.5-4.0 Meters"
    }
  },
  {
    slug: "factory-boundary-wall",
    name: "Factory Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-factory-boundary.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "100 Square Feet",
    description: "High-height boundary walls designed specifically for factory environments. Focus on security, privacy, and noise reduction.",
    longDescription: "We offer high-strength concrete factory boundary walls ranging from 6 to 12 feet in height, designed for durability and weather-resistance. With a wall thickness of 200-400 mm and anti-climb features, our walls provide enhanced security for factories. Low-maintenance and suitable for various applications, our boundary walls are ideal for manufacturers and suppliers looking for reliable perimeter protection solutions.",
    features: ["Weather-resistant", "Corrosion-resistant", "Long-lasting", "Anti-climb Design"],
    specifications: {
      "Wall Height": "6-12 Feet",
      "Durability": "Weather-resistant, Corrosion-resistant, Long-lasting",
      "Maintenance": "Low-maintenance, Easy To Repair"
    },
    productDetails: {
      "Application": "Factories, Warehouses, Industrial Estates, Commercial Complexes",
      "Material": "High-strength Concrete, Bricks, Or Precast Panels",
      "Wall Thickness": "200-400 mm",
      "Safety Features": "Anti-climb Design, Barbed Wire, Spikes, Or Security Mesh"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "wall height": "6-12 Feet",
      "Durability": "Weather-resistant, Corrosion-resistant, Long-lasting",
      "Maintenance": "Low-maintenance, Easy To Repair",
      "Application": "Factories, Warehouses, Industrial Estates, Commercial Complexes",
      "Material": "High-strength Concrete, Bricks, Or Precast Panels",
      "Wall Thickness": "200-400 mm",
      "Safety Features": "Anti-climb Design, Barbed Wire, Spikes, Or Security Mesh"
    }
  },
  {
    slug: "precast-heavy-duty-boundary-wall",
    name: "Precast Heavy Duty Boundary Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-heavy-duty-compound.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "500 Square Feet",
    description: "We are a trusted Precast Heavy Duty Wall Manufacturer, offering durable and high-quality wall solutions for industrial, commercial, and residential projects. Our heavy-duty precast walls are engineered to withstand extreme loads, harsh weather conditions, and long-term wear.",
    longDescription: "We are a trusted Precast Heavy Duty Wall Manufacturer, offering durable and high-quality wall solutions for industrial, commercial, and residential projects. Our heavy-duty precast walls are engineered to withstand extreme loads, harsh weather conditions, and long-term wear, ensuring maximum strength and stability. Manufactured using premium-grade materials and advanced techniques, these walls provide excellent durability, minimal maintenance, and quick installation, saving time and labor costs. As a reliable Precast Heavy Duty Wall Manufacturer, we focus on precision, timely delivery, and client satisfaction, making our solutions the ideal choice for robust, secure, and long-lasting boundary and partition wall requirements.",
    features: ["High-strength RCC", "Anti-climb", "Barbed Wire Support", "Soundproofing", "Fire-resistant"],
    specifications: {
      "Finish": "Smooth",
      "Wall Thickness": "150-300 mm",
      "Origin Of Country": "India"
    },
    productDetails: {
      "Wall Type": "Precast Reinforced Concrete Boundary Wall",
      "Material": "High-strength RCC (Reinforced Cement Concrete)",
      "Application": "Industrial Complexes, Warehouses, Factories, High-security Areas, Commercial Premises",
      "Optional Features": "Anti-climb, Barbed Wire Support, Soundproofing, Fire-resistant Coating"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Finish": "Smooth",
      "Wall Thickness": "150-300 mm",
      "Origin Of Country": "India",
      "Wall Type": "Precast Reinforced Concrete Boundary Wall",
      "Material": "High-strength RCC (Reinforced Cement Concrete)",
      "Application": "Industrial Complexes, Warehouses, Factories, High-security Areas, Commercial Premises",
      "Optional Features": "Anti-climb, Barbed Wire Support, Soundproofing, Fire-resistant Coating"
    }
  },
  {
    slug: "panel-build-rcc-compound-wall",
    name: "Panel Build RCC Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-panel-build-rcc.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    moq: "1000 Square Feet",
    description: "We offer high-quality Panel Build RCC Compound Walls with a contemporary appearance and a non-polished finish. Made in India, our RCC panels are designed for both construction and boundary applications.",
    longDescription: "We offer high-quality Panel Build RCC Compound Walls with a contemporary appearance and a non-polished finish. Made in India, our RCC panels are designed for both construction and boundary applications, providing a robust and aesthetic solution for property fencing.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Contemporary Appearance", "Durable"],
    specifications: {
      "Material": "Rcc",
      "Finishing": "Non Polished",
      "Packaging Type": "As Per Customer Request"
    },
    productDetails: {
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Number Of Flower": "Rcc Compound Wall",
      "Appearance": "Contemporary",
      "Country of Origin": "India"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Finishing": "Non Polished",
      "Packaging Type": "As Per Customer Request",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Number Of Flower": "Rcc Compound Wall",
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
    moq: "1000 Square Feet",
    description: "We are a leading Concrete Folding Compound Wall Manufacturer, offering durable, high-quality, and robust boundary solutions for residential and commercial construction projects.",
    longDescription: "We are a leading Concrete Folding Compound Wall Manufacturer, offering durable, high-quality, and robust boundary solutions for residential and commercial construction projects. Our folding compound walls are designed for efficient installation and long-lasting performance, providing a sturdy and secure perimeter for your property. Manufactured with high-grade concrete, these walls offer excellent resistance to environmental factors and require minimal maintenance. Our solutions are cost-effective, saving time and labor on-site, while enhancing the overall security and aesthetic of your property boundaries.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Durable", "Cost Effective"],
    specifications: {
      "Material": "Concrete",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested"
    },
    productDetails: {
      "Country of Origin": "India",
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Concrete",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
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
    moq: "1000 Square Feet",
    description: "We are a leading Industrial Compound Wall Exporter, providing high-quality, durable, and robust boundary wall solutions for industrial facilities worldwide.",
    longDescription: "We are a leading Industrial Compound Wall Exporter, providing high-quality, durable, and robust boundary wall solutions for industrial facilities worldwide. Our walls are designed to offer maximum strength, security, and long-lasting performance, ensuring reliable protection for factories, warehouses, and commercial complexes. Manufactured using premium-grade materials and advanced precast techniques, our industrial compound walls are quick to install, low-maintenance, and built to withstand harsh environmental conditions. As a trusted Industrial Compound Wall Exporter, we prioritize quality, precision, and timely delivery, making our solutions the preferred choice for clients seeking strong, cost-effective, and visually appealing compound walls for industrial applications.",
    features: ["Accurate Dimension", "High Strength", "Quality Tested", "Contemporary Appearance", "Durable"],
    specifications: {
      "Material": "Cement",
      "Application": "Boundaries, Industrial",
      "Type": "Compound Wall",
    },
    productDetails: {
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Appearance": "Contemporary",
      "Country of Origin": "India",
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement",
      "Application": "Boundaries, Construction",
      "Type": "Compound Wall",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Appearance": "Contemporary",
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
    moq: "1000 Square Feet",
    description: "High-quality Prefab RCC Readymade Precast Compound Walls that are easily assembled and perfect for house and external boundary applications. Designed for efficient installation, making them a cost-effective choice for builders and homeowners.",
    longDescription: "We specialize in providing high-quality Prefab RCC Readymade Precast Compound Walls that are engineered for durability and ease of installation. Our prefab compound walls are designed to be easily assembled on-site, significantly reducing construction time and labor costs. With a focus on structural integrity and aesthetic appeal, these walls provide a reliable and attractive fencing option for various applications, including house boundaries and industrial sites.",
    features: ["Easily Assembled", "Prefabricated", "High Durability", "Security Focused", "Cost-effective"],
    specifications: {
      "Application": "House and External Boundary,Construction",
      "Feature": "Easily Assembled",
      "Material": "RCC"
    },
    productDetails: {
      "Built Type": "Prefab",
      "Number Of Flower": "Boundary Wall",
      "Width": "7 Feet"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Application": "House and External Boundary,Construction",
      "Feature": "Easily Assembled",
      "Material": "RCC",
      "Built Type": "Prefab",
      "Number Of Flower": "Boundary Wall",
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
    moq: "1000 Square Feet",
    description: "We offer beautiful, high-quality RCC readymade compound walls perfect for delimiting your home, building, or construction site. Made from RCC, these walls provide both security and aesthetic appeal.",
    longDescription: "We offer beautiful, high-quality RCC readymade compound walls perfect for delimiting your home, building, or construction site. Made from RCC, these walls provide both security and aesthetic appeal, are easy to install, and require minimal maintenance. Crafted from high-quality Reinforced Cement Concrete, these walls offer superior strength and longevity.",
    features: ["Beautiful Design", "Easy Installation", "Minimal Maintenance", "High Durability", "India Made"],
    specifications: {
      "Feature": "Beautiful Design",
      "Material": "RCC",
      "Country of Origin": "India"
    },
    productDetails: {
      "Number Of Flower": "Boundary Wall",
      "Application": "Used To Delimit Your Home And building,Construction"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Feature": "Beautiful Design",
      "Material": "RCC",
      "Country of Origin": "India",
      "Number Of Flower": "Boundary Wall",
      "Application": "Used To Delimit Your Home And building,Construction"
    }
  },
  {
    slug: "rcc-compound-wall",
    name: "RCC Compound Wall",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 120, unit: "Square Feet" },
    moq: "1000 Square Feet",
    description: "We offer top-of-the-line RCC Compound Walls that combine high structural integrity with a contemporary aesthetic. Quality-tested to ensure they meet the highest standards of durability and strength.",
    longDescription: "These walls are manufactured using high-grade Reinforced Cement Concrete and are available in multiple colors to match your design preferences. The polished finish and plain pattern provide a sleek, professional look suitable for any modern property. Quality-tested to ensure they meet the highest standards of durability and strength.",
    features: ["Polished Finishing", "High Strength", "Durable", "Multiple Color Options", "Contemporary Appearance"],
    specifications: {
      "Material": "RCC",
      "Finishing": "Polished",
      "Packaging Type": "Available In Many Colors"
    },
    productDetails: {
      "Application": "Construction",
      "Size": "Standard",
      "Pattern": "Plain",
      "Number Of Flower": "Precast",
      "Appearance": "Contemporary"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "RCC",
      "Finishing": "Polished",
      "Packaging Type": "Available In Many Colors",
      "Application": "Construction",
      "Size": "Standard",
      "Pattern": "Plain",
      "Number Of Flower": "Precast",
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
    moq: "250 Feet",
    description: "Prominent RCC Folding Compound Wall Manufacturer, offering durable, high-quality, and easy-to-install boundary wall solutions. Engineered for superior strength and longevity, providing a cost-effective alternative to traditional brick walls.",
    longDescription: "We are a premier RCC Folding Compound Wall Manufacturer, offering high-strength and versatile boundary solutions. Our RCC folding walls are designed for quick and easy installation, which help in significantly reducing labor costs and construction time. They are reusable and provide supreme structural integrity, making them an excellent investment for property boundaries. As a trusted manufacturer, we prioritize quality and precision in every component we deliver.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Weather Resistant", "Precision Panels"],
    specifications: {
      "Material": "RCC",
      "Panel Height": "300mm",
      "Panel Length": "2100mm"
    },
    productDetails: {
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "RCC",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    }
  },
  {
    slug: "precast-compound-walls",
    name: "Precast Compound Walls",
    category: "COMPOUND WALL",
    categorySlug: "compound-wall",
    image: "/images/generated/product-readymade-compound-v2.webp",
    priceRange: { min: 80, max: 300, unit: "Square Feet" },
    moq: "2500 Square Feet",
    description: "One of the leading Precast Compound Wall Manufacturers, offering durable and high-quality precast walls for residential, commercial, and industrial projects. Designed for maximum strength, security, and aesthetic appeal with minimal maintenance.",
    longDescription: "We are one of the leading Precast Compound Wall Manufacturers, offering durable and high-quality precast walls for residential, commercial, and industrial projects. Our walls are designed to provide maximum strength, security, and aesthetic appeal, ensuring long-lasting performance with minimal maintenance. Using advanced manufacturing techniques and premium materials, we deliver precast compound walls that are quick to install, cost-effective, and compliant with international standards. Our team of experts ensures precise design, timely delivery, and superior quality control, making us a trusted choice for clients seeking reliable and robust boundary solutions.",
    features: ["Maximum Strength", "Security", "Aesthetic Appeal", "Long-lasting Performance", "Minimal Maintenance", "Quick Installation", "Cost-effective"],
    specifications: {
      "Business Type": "Manufacturer, Exporter, Supplier, Retailer, Trader, Distributor",
      "Color": "Grey,Cement",
      "Thickness": "38mm - 75 Mm",
      "Height": "6feet To 10feet"
    },
    productDetails: {
      "Beam Size": "6(6) Inch",
      "Plank Length": "7(1) Feet",
      "Brand Name": "Readymade Wall"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Exporter, Supplier, Retailer, Trader, Distributor",
      "Color": "Grey,Cement",
      "Thickness": "38mm - 75 Mm",
      "Height": "6feet To 10feet",
      "Beam Size": "6(6) Inch",
      "Plank Length": "7(1) Feet",
      "Brand Name": "Readymade Wall"
    }
  },
  {
    slug: "concrete-boundary-wall",
    name: "Concrete Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 80, max: 150, unit: "Square Feet" },
    moq: "250 Feet",
    description: "We are a reliable Cement Boundary Wall Supplier, offering high-quality, durable, and cost-effective boundary wall solutions for residential, commercial, and industrial projects. Our cement walls are designed to provide superior strength, stability, and long-lasting performance while requiring minimal maintenance.",
    longDescription: "We are a reliable Cement Boundary Wall Supplier, offering high-quality, durable, and cost-effective boundary wall solutions for residential, commercial, and industrial projects. Our cement walls are designed to provide superior strength, stability, and long-lasting performance while requiring minimal maintenance. Manufactured using premium-grade materials and advanced techniques, our walls ensure quick installation, reducing labor costs and construction time. As a trusted Cement Boundary Wall Supplier, we focus on delivering customized solutions, timely delivery, and exceptional quality, making our cement boundary walls the ideal choice for clients seeking secure, robust, and visually appealing boundary solutions for any project.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Durable", "Weather Resistant"],
    specifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Concrete",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
    },
    productDetails: {
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Concrete",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    }
  },
  {
    slug: "precast-boundary-wall",
    name: "Precast Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 200, max: 300, unit: "Square Feet" },
    moq: "500 Square Feet",
    description: "We are a trusted Precast Boundary Wall Manufacturer specializing in high-quality, durable, and aesthetically appealing boundary wall solutions. Choosing us as your Precast Boundary Wall Supplier means opting for high-strength walls, timely delivery, and unmatched durability.",
    longDescription: `We are a trusted Precast Boundary Wall Manufacturer specializing in high-quality, durable, and aesthetically appealing boundary wall solutions for residential, commercial, and industrial projects. With years of experience in the construction industry, we have established ourselves as a reliable Precast Boundary Wall Supplier, catering to clients who demand strong, long-lasting, and low-maintenance boundary solutions.

Our range includes innovative Single Piece Precast Boundary Walls, designed for easy installation and enhanced structural integrity. These walls are engineered to withstand harsh weather conditions, heavy loads, and external pressures, providing superior security and durability. The single-piece design minimizes on-site assembly time, reduces labor costs, and ensures a seamless, uniform appearance for every project.

In addition, we offer Precast Cemented Boundary Walls, which combine the benefits of precast construction with a cemented finish for added strength and durability. These walls are ideal for projects requiring extra reinforcement, robust protection, and a visually appealing finish. Manufactured using premium-grade cement and raw materials, our precast cemented walls adhere to strict quality standards, guaranteeing reliability, stability, and long-lasting performance.

As a leading Precast Boundary Wall Manufacturer, we prioritize client satisfaction through customized solutions tailored to meet specific project requirements. Our team of skilled engineers and professionals oversees every step of production, from precise design and material selection to quality testing and on-time delivery. This ensures that every wall we supply is strong, durable, and aesthetically superior.

We understand the importance of combining functionality with design, which is why our walls are not only structurally sound but also visually attractive. Whether it’s for a housing project, commercial complex, industrial facility, or any other construction need, our precast boundary walls offer an effective solution that ensures safety, security, and elegance.

Choosing us as your Precast Boundary Wall Supplier means opting for high-strength walls, timely delivery, cost-effective solutions, and unmatched durability. Our commitment to quality, precision, and innovation has made us a preferred choice for clients seeking premium precast boundary wall solutions across various sectors.`,
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Easy Installation", "Weather Resistant"],
    specifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm",
    },
    productDetails: {
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
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
    description: "High-quality RCC boundary walls for various applications. Manufactured using high-quality Reinforced Cement Concrete, these walls offer exceptional durability and resistance to wear and tear over time.",
    longDescription: "Our RCC Boundary Wall is a high-strength, premium fencing solution designed to provide lasting security. Manufactured using high-quality Reinforced Cement Concrete, these walls offer exceptional durability and resistance to wear and tear over time. They are suitable for various applications, including delimiting homes, buildings, and industrial plots. They are engineered for efficient on-site installation, providing a cost-effective alternative to traditional brick walls.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "High Durability", "Low Maintenance"],
    specifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Panel Height": "300mm",
      "Panel Length": "2100mm"
    },
    productDetails: {
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    }
  },
  {
    slug: "readymade-boundary-wall",
    name: "Readymade Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 80, max: 150, unit: "Feet" },
    description: "Durable readymade solutions for perimeter security. Our readymade walls are manufactured with high-strength cement and concrete, ensuring maximum durability and structural integrity.",
    longDescription: "We offer high-quality Precast Readymade Boundary Walls that provide a sturdy and reliable fencing solution for various property boundaries. Our precast walls are manufactured with high-strength cement and concrete, ensuring maximum durability and structural integrity.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Easy Installation"],
    specifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm"
    },
    productDetails: {
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    }
  },
  {
    slug: "solar-plant-boundary-wall",
    name: "Solar Plant Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-solar-plant-boundary.webp",
    priceRange: { min: 100, max: 250, unit: "Feet" },
    description: "Specialized boundary walls designed for solar plant security. Our solar plant boundary walls are specifically engineered for large-scale energy projects.",
    longDescription: "Our solar plant boundary walls are specifically engineered for large-scale energy projects. They offer a balance of security, cost-efficiency, and rapid deployment. The modular nature of these precast walls allows for easy expansion or relocation as the plant grows.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    specifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm"
    },
    productDetails: {
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement, Concrete",
      "Application": "Boundaries",
      "Panel Height": "300mm",
      "Panel Length": "2100mm",
      "Panel Thickness": "50mm",
      "Column Width": "150×150 mm",
      "Length of the Column": "Depends On the Customer’s Requirement",
      "Benefits": "Cost Effective, Save Time, Reusable, Supreme Strength"
    }
  },
  {
    slug: "cement-boundary-wall",
    name: "Cement Boundary Wall",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-cement-wall-prefab.webp",
    priceRange: { min: 80, max: 125, unit: "Sq.ft" },
    moq: "2500 Square Feet",
    description: "Traditional strength with modern finishing. Our cement boundary walls are the reliable choice for thousands of customers.",
    longDescription: "Manufactured using high-grade cement, these boundary walls offer a classic look with modern durability. They are built to withstand environmental stress and provide a clean, professional finish for any property boundary.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    specifications: {
      "Business Type": "Supplier",
      "Size": "Standard",
      "Number Of Flower": "Precast",
      "Material": "Cement",
    },
    productDetails: {
      "Application": "Construction",
      "Pattern": "Plain",
      "Appearance": "Contemporary",
      "Finishing": "Polished"
    },
    tableSpecifications: {
      "Business Type": "Supplier",
      "Size": "Standard",
      "Number Of Flower": "Precast",
      "Material": "Cement",
      "Application": "Construction",
      "Pattern": "Plain",
      "Appearance": "Contemporary",
      "Finishing": "Polished"
    }
  },
  {
    slug: "concrete-prestressed-boundary-walls",
    name: "Concrete Prestressed Boundary Walls",
    category: "BOUNDARY WALL",
    categorySlug: "boundary-wall",
    image: "/images/generated/product-boundary-wall.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    moq: "1000 Square Feet",
    description: "High-quality Concrete Prestressed Boundary Walls combining superior strength and modern aesthetics. Ideal for industrial and infrastructure projects.",
    longDescription: `We are a leading Prestressed Boundary Wall Manufacturer, specializing in the design, production, and supply of high-quality Concrete Prestressed Boundary Walls for residential, commercial, and industrial projects. Our walls are engineered using advanced prestressing techniques, ensuring superior strength, durability, and stability compared to conventional boundary walls. This makes them ideal for projects that require long-lasting, robust, and low-maintenance boundary solutions.

As a trusted Prestressed Boundary Wall Manufacturer, we focus on precision, quality, and timely delivery. Our Concrete Prestressed Boundary Walls are designed to withstand heavy loads, extreme weather conditions, and external pressures, providing excellent security and structural integrity. The precast nature of these walls allows for quick and efficient installation, reducing on-site labor costs and construction time significantly.

We use premium-grade raw materials and adhere to strict quality control measures to ensure that every wall meets international standards for strength and durability. Our team of experienced engineers and professionals works closely with clients to deliver customized solutions that match specific project requirements, whether it’s for boundary demarcation, industrial facilities, or housing projects.

Choosing our Concrete Prestressed Boundary Walls ensures a combination of reliability, aesthetic appeal, and long-term performance. We are committed to providing cost-effective, high-strength boundary solutions that meet the evolving needs of modern construction projects.`,
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Accurate Dimension", "Quality Tested"],
    specifications: {
      "Country of Origin": "India",
      "Appearance": "Contemporary",
      "Feature": "Accurate Dimension, High Strength, Quality Tested"
    },
    productDetails: {
      "Application": "Boundaries, Construction",
      "Material": "Concrete",
      "Number Of Flower": "Concrete Compound Wall",
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Country of Origin": "India",
      "Appearance": "Contemporary",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Application": "Boundaries, Construction",
      "Material": "Concrete",
      "Number Of Flower": "Concrete Compound Wall"
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
    moq: "1000 Square Feet",
    description: "Robust RCC cement walls for construction and boundary needs. Our RCC cement walls are manufactured under strict quality controls to ensure consistent strength and surface finish.",
    longDescription: "Our RCC cement walls are manufactured under strict quality controls to ensure consistent strength and surface finish. They are a versatile choice for a wide range of boundary and partition applications, offering long-term durability and low maintenance.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    specifications: {
      "Material": "Rcc",
      "Color": "As Per Customer Request",
      "Application": "Boundaries, Construction"
    },
    productDetails: {
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Appearance": "Contemporary",
      "Country of Origin": "India",
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Color": "As Per Customer Request",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Appearance": "Contemporary",
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
    moq: "1000 Square Feet",
    description: "Plain pattern pre-fabricated walls for quick installation. Our prefabricated walls are cast in-factory and delivered to your site, ensuring a zero-waste and rapid installation process.",
    longDescription: "Designed for speed and efficiency, our prefabricated cement walls eliminate the mess and delays of onsite casting. Each panel is factory-built to precise specifications, allowing for a seamless fit and immediate assembly upon delivery.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Accurate Dimension", "Quality Tested"],
    specifications: {
      "Country of Origin": "India",
      "Pattern": "Plain",
      "Feature": "Accurate Dimension,High Strength,Quality Tested"
    },
    productDetails: {
      "Application": "Boundaries,Construction",
      "Finishing": "Non Polished",
      "Material": "Cement,Concrete",
      "wall height": "6-8feet"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Country of Origin": "India",
      "Pattern": "Plain",
      "Feature": "Accurate Dimension,High Strength,Quality Tested",
      "Application": "Boundaries,Construction",
      "Finishing": "Non Polished",
      "Material": "Cement,Concrete",
      "wall height": "6-8feet"
    }
  },

  // --- OTHER PRODUCTS ---
  {
    slug: "rcc-wall",
    name: "RCC Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    moq: "1000 Square Feet",
    description: "Customizable RCC walls for various construction requirements. Reinforced cement concrete walls built to IS standards.",
    longDescription: "Our standard RCC walls are the foundation of our product line, offering reliable performance for various land management and security needs. They are reinforced with high-grade steel to ensure maximum resistance against impact and environmental forces.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    specifications: {
      "Material": "Rcc",
      "Application": "Boundaries, Construction",
      "Size": "Customize"
    },
    productDetails: {
      "Feature": "High Strength, Quality Tested",
      "Appearance": "Contemporary",
      "Country of Origin": "India",
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Application": "Boundaries, Construction",
      "Size": "Customize",
      "Feature": "High Strength, Quality Tested",
      "Appearance": "Contemporary",
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
    moq: "1000 Square Feet",
    description: "Superior-quality construction solutions that combine durability, efficiency, and aesthetics. Versatile precast concrete wall panels for various construction needs.",
    longDescription: `We are a leading Precast Wall Manufacturer committed to delivering superior-quality construction solutions that combine durability, efficiency, and aesthetics. Our expertise lies in producing high-strength precast walls that cater to a wide range of industrial, commercial, and residential projects. Using advanced manufacturing techniques and premium raw materials, our precast walls are engineered to withstand heavy loads, harsh weather conditions, and the test of time, ensuring long-lasting performance.

As a trusted High Strength Precast Wall Manufacturer, we focus on precision, reliability, and customization. Our walls are designed for quick installation, reducing on-site labor and construction time, making them an ideal choice for modern infrastructure projects. We offer a variety of precast wall solutions, including boundary walls, compound walls, and partition walls, tailored to meet the specific requirements of our clients.

Quality control is at the core of our operations, with each precast wall undergoing rigorous testing to guarantee strength, stability, and compliance with international standards. Our team of experienced engineers and professionals ensures seamless project execution, from design to delivery, providing clients with cost-effective, durable, and visually appealing precast wall solutions.

Choose us as your preferred Precast Wall Manufacturer and experience innovative, high-strength construction solutions that redefine safety and reliability.

`,
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Accurate Dimension", "Quality Tested"],
    specifications: {
      "Material": "Cement",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested"
    },
    productDetails: {
      "Country of Origin": "India",
      "Packaging Type": "Customize",
      "Number Of Flower": "Precast Compound Wall",
    },
    tableSpecifications: {

      "Business Type": "Manufacturer, Supplier",
      "Material": "Cement",
      "Application": "Boundaries, Construction",
      "Feature": "Accurate Dimension, High Strength, Quality Tested",
      "Country of Origin": "India",
      "Packaging Type": "Customize",
      "Number Of Flower": "Precast Compound Wall"
    }
  },
  {
    slug: "rcc-folding-wall",
    name: "RCC Folding Wall",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-rcc-compound.webp",
    priceRange: { min: 80, max: 150, unit: "Piece" },
    moq: "100 Piece",
    description: "Folding RCC wall solutions for boundaries. Heavy-duty RCC walls with a modular folding design. Easy to relocate and reconfigure for evolving land management needs.",
    longDescription: "Our RCC folding walls provide the flexibility of a modular system without compromising on the strength of reinforced concrete. They are ideal for temporary perimeters or situations where the boundary might need to be adjusted in the future.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength"],
    specifications: {
      "Material": "Rcc",
      "Packaging Type": "Customize",
      "Application": "Boundaries"
    },
    productDetails: {
      "Feature": "Durable, High Strength, Quality Tested",
      "Appearance": "Antique",
      "Country of Origin": "India"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Material": "Rcc",
      "Packaging Type": "Customize",
      "Application": "Boundaries",
      "Feature": "Durable, High Strength, Quality Tested",
      "Appearance": "Antique",
      "Country of Origin": "India"
    }
  },
  {
    slug: "readymade-walls",
    name: "Readymade Walls",
    category: "OTHER PRODUCTS",
    categorySlug: "other-products",
    image: "/images/generated/product-readymade-walls.webp",
    priceRange: { min: 60, max: 120, unit: "Square Feet" },
    moq: "1000 Square Feet",
    description: "We are a reliable Readymade Walls Supplier, offering high-quality, durable, and ready-to-install wall solutions. Our walls ensure quick installation and low maintenance.",
    longDescription: "We are a reliable Readymade Walls Supplier, offering high-quality, durable, and ready-to-install wall solutions for residential, commercial, and industrial projects. Our readymade walls are designed to ensure quick installation, reducing construction time and labor costs while maintaining excellent strength and stability. Made from premium materials and advanced manufacturing techniques, our walls provide superior durability, low maintenance, and long-lasting performance. As a trusted Readymade Walls Supplier, we focus on delivering customized solutions, timely delivery, and unmatched quality, making our walls an ideal choice for clients seeking cost-effective, robust, and aesthetically appealing solutions for any construction or boundary requirement.",
    features: ["Cost Effective", "Save Time", "Reusable", "Supreme Strength", "Accurate Dimension", "Quality Tested"],
    specifications: {
      "Country of Origin": "India",
      "Appearance": "Contemporary",
      "Feature": "Accurate Dimension, High Strength, Quality Tested"
    },
    productDetails: {
      "Application": "Boundaries,Construction",
      "Material": "Cement,Concrete",
      "Number Of Flower": "Compound Wall",
      "Finishing": "Non Polished"
    },
    tableSpecifications: {
      "Business Type": "Manufacturer, Supplier",
      "Country of Origin": "India",
      "Appearance": "Contemporary",
      "Feature": "Accurate Dimension,High Strength,Quality Tested",
      "Application": "Boundaries,Construction",
      "Material": "Cement,Concrete",
      "Number Of Flower": "Compound Wall",
      "Finishing": "Non Polished"
    }
  }
];
