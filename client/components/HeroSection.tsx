import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/images/generated/carousel-1.webp",
      title: "Readymade <span className='text-gir-orange'>Compound Wall</span>",
      subtitle: "Leading manufacturer and supplier of high-quality RCC readymade compound walls in Haryana.",
    },
    {
      image: "/images/generated/carousel-2.webp",
      title: "Solar Plant <span className='text-gir-orange'>Boundary Walls</span>",
      subtitle: "Wholesale supplier of specialized solar plant boundary walls and concrete solutions in Palwal.",
    },
    {
      image: "/images/generated/hero-banner.webp",
      title: "Advanced <span className='text-gir-orange'>Precast Facility</span>",
      subtitle: "State-of-the-art manufacturing unit delivering precision-engineered precast panels.",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-gir-dark-blue">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 42, 63, 0.85) 0%, rgba(15, 42, 63, 0.6) 100%), url(${slide.image})`,
            }}
          />
        </div>
      ))}

      {/* Content Layer (Universal content or per-slide content) */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center pb-20 md:pb-0">
        <div className="text-center text-white max-w-4xl animate-in fade-in zoom-in duration-700">
          <div className="overflow-hidden">
            <h1 
              className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-700 drop-shadow-2xl text-white"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />
          </div>
          
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto transition-all duration-700 font-medium drop-shadow-md px-4">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-gir-orange text-white rounded-lg font-bold text-lg hover:bg-gir-orange/90 transition-all btn-premium shadow-xl font-semibold"
            >
              Get Free Quote
            </Link>
            <Link
              to="/products/compound-wall"
              className="px-10 py-4 bg-transparent border-2 border-gir-orange text-gir-orange rounded-lg font-bold text-lg hover:bg-gir-orange/20 transition-all"
            >
              Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gir-orange w-16" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

