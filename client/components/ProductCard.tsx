import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  href: string;
  onEnquiryClick?: () => void;
}

const ProductCard = ({ name, image, description, href, onEnquiryClick }: ProductCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gir-dark-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gir-dark-blue mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gir-dark-gray text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={href}
            className="flex-1 px-4 py-3 border-2 border-gir-dark-blue text-gir-dark-blue rounded hover:bg-gir-dark-blue hover:text-white font-black uppercase tracking-widest text-[10px] italic inline-flex items-center justify-center gap-2 group/btn transition-all active:scale-95"
          >
            View More
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={onEnquiryClick}
            className="flex-1 px-4 py-3 bg-gir-orange text-white rounded font-black uppercase tracking-widest text-[10px] italic inline-flex items-center justify-center transition-all hover:bg-gir-orange/90 active:scale-95 shadow-lg"
          >
            Get Best Price
          </button>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gir-orange/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ProductCard;

