import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    "/images/generated/carousel-1.webp",
    "/images/generated/carousel-2.webp",
    "/images/generated/hero-banner.webp",
    "/images/generated/manufacturing-unit.webp",
    "/images/generated/gallery-1.webp",
    "/images/generated/gallery-2.webp",
    "/images/generated/product-rcc-compound.webp",
    "/images/generated/product-boundary-wall.webp",
    "/images/generated/product-precast-wall.webp",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-medium">Gallery</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Our Gallery"
        subtitle="A visual showcase of our state-of-the-art manufacturing and recent projects"
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden group cursor-pointer border-[12px] border-gray-50 bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:z-10 hover:scale-105"
            >
              <img
                src={img}
                alt={i === 8 ? "Precast Compound Wall" : `Gallery Project ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gir-dark-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gir-gold text-gir-dark-blue flex items-center justify-center font-bold shadow-lg">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Sidebar equivalent - Bottom CTA */}
        <div className="mt-20 text-center bg-gray-50 p-12 rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gir-dark-blue mb-4">Quality in Every Detail</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Each project showcased here represents our commitment to durability, precision, and architectural excellence in precast concrete.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gir-gold text-gir-dark-blue rounded-lg font-bold hover:bg-gir-gold/90 transition-all btn-premium shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Gallery;
