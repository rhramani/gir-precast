import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  bg?: "white" | "concrete" | "dark-blue" | "transparent";
  title?: string;
  subtitle?: string;
  id?: string;
}

const SectionWrapper = ({
  children,
  className = "",
  bg = "white",
  title,
  subtitle,
  id,
}: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const bgClass = {
    white: "bg-white",
    concrete: "concrete-texture bg-gray-50",
    "dark-blue": "bg-gir-dark-blue",
    transparent: "bg-transparent",
  }[bg];

  const textColor = (bg === "dark-blue" || bg === "transparent") ? "text-white" : "text-gir-dark-blue";

  return (
    <section
      ref={ref}
      id={id}
      className={`py-16 md:py-24 ${bgClass} ${className} transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl ${(bg === "dark-blue" || bg === "transparent") ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
                {subtitle}
              </p>
            )}
            {title && (
              <div className={`w-16 h-1 bg-gir-gold mx-auto mt-6 rounded-full transition-all duration-700 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`} />
            )}
          </div>
        )}

        {/* Section Content */}
        <div className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
