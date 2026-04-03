import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  href: string;
  enquiryHref?: string;
}

const ProductCard = ({ name, image, description, href, enquiryHref }: ProductCardProps) => {
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
        <div className="absolute inset-0 bg-gradient-to-t from-sk-dark-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-sk-dark-blue mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Button Group */}
        <div className="flex gap-3">
          <Link
            to={href}
            className="flex-1 px-4 py-2 bg-sk-gold text-sk-dark-blue rounded-lg font-semibold hover:bg-sk-gold/90 transition-all text-sm inline-flex items-center justify-center gap-2 group/btn"
          >
            View More
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          {enquiryHref && (
            <Link
              to={enquiryHref}
              className="flex-1 px-4 py-2 bg-sk-dark-blue text-white rounded-lg font-semibold hover:bg-sk-dark-blue/90 transition-all text-sm inline-flex items-center justify-center"
            >
              Enquiry
            </Link>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-sk-gold/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ProductCard;
