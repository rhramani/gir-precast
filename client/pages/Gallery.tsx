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
        <div className="space-y-16">
          {/* Compound Wall Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 border-l-4 border-gir-orange pl-4">Compound Wall Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(0, 3).map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg">
                  <img src={img} alt={`Compound Wall Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2">View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boundary Wall Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 border-l-4 border-gir-orange pl-4">Boundary Wall Installations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(3, 6).map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg">
                  <img src={img} alt={`Boundary Wall Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2">View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturing Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 border-l-4 border-gir-orange pl-4">Our Manufacturing Unit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(6, 9).map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg">
                  <img src={img} alt={`Manufacturing ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2">View Process</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Sidebar equivalent - Bottom CTA */}
        <div className="mt-20 text-center bg-gray-50 p-12 rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gir-dark-blue mb-4">Quality in Every Detail</h2>
          <p className="text-gir-dark-gray max-w-2xl mx-auto mb-8">
            Each project showcased here represents our commitment to durability, precision, and architectural excellence in precast concrete.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gir-orange text-white rounded-lg font-bold hover:bg-gir-orange/90 transition-all btn-premium shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Gallery;


