import { useState, useEffect } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, X, Maximize2, Play, LayoutGrid } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";


const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const images = [
    "/images/compound-wall/compound-wall-12.webp",
    "/images/compound-wall/compound-wall-1.webp",
    "/images/compound-wall/compound-wall-2.webp",
    "/images/compound-wall/compound-wall-15.webp",
    "/images/compound-wall/compound-wall-16.webp",
    "/images/compound-wall/compound-wall-17.webp",
    "/images/compound-wall/compound-wall-3.webp",
    "/images/compound-wall/compound-wall-19.webp",
    "/images/compound-wall/compound-wall-20.webp",
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Gallery - Precast Wall Projects & Installations"
        description="Browse our gallery of precast compound wall, boundary wall, and RCC wall installation projects across Haryana, Delhi NCR, Noida and India. Quality precast concrete work by GIR Precast."
        keywords="precast wall gallery, compound wall photos, RCC boundary wall pictures, precast installation Haryana, GIR Precast gallery, concrete wall projects India"
        canonical="https://www.girprecast.com/gallery"
      />
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
        subtitle="A visual showcase of our premium precast wall projects across India"
        bg="white"
      >
        <div className="space-y-16">
          {/* Compound Wall Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 border-l-4 border-gir-orange pl-4">Compound Wall Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(0, 3).map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg"
                  onClick={() => setSelectedIndex(i)}
                >
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
                <div 
                  key={i + 3} 
                  className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg"
                  onClick={() => setSelectedIndex(i + 3)}
                >
                  <img src={img} alt={`Boundary Wall Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2">View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 border-l-4 border-gir-orange pl-4">Industrial & Custom Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(6, 9).map((img, i) => (
                <div 
                  key={i + 6} 
                  className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-lg"
                  onClick={() => setSelectedIndex(i + 6)}
                >
                  <img src={img} alt={`Industrial Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2">View Project</span>
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

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black/95 border-none overflow-hidden flex flex-col items-center justify-center">
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex flex-col">
              {/* Header / Toolbar */}
              <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent text-white">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {selectedIndex + 1} / {images.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setSelectedIndex(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full transition-all border border-white/10"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full transition-all border border-white/10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Container */}
              <div className="flex-1 w-full h-full flex items-center justify-center p-4 md:p-12 select-none" onClick={() => setSelectedIndex(null)}>
                <img 
                  src={images[selectedIndex]} 
                  alt={`Gallery Image ${selectedIndex + 1}`} 
                  className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;



