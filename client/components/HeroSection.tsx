import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-sk-dark-blue">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-sk-dark-blue/90 to-sk-dark-blue/70"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(15, 42, 63, 0.85) 0%, rgba(15, 42, 63, 0.7) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201,161,74,0.05)" stroke-width="0.5"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)"/></svg>')
          `,
          backgroundSize: "auto"
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className={`text-center text-white px-4 max-w-4xl transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium <span className="text-sk-gold">Precast Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Industry-leading RCC and concrete compound walls engineered for strength, durability, and modern design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-sk-gold text-sk-dark-blue rounded-lg font-bold text-lg hover:bg-sk-gold/90 transition-all btn-premium shadow-lg"
            >
              Get Quote Now
            </Link>
            <Link
              to="/products/compound-wall"
              className="px-8 py-4 bg-transparent border-2 border-sk-gold text-sk-gold rounded-lg font-bold text-lg hover:bg-sk-gold/10 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
