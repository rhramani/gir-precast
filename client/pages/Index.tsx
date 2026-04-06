import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { 
  Star, 
  Users, 
  Briefcase, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const products = [
    {
      name: "RCC Compound Wall",
      image: "/images/generated/product-rcc-compound.webp",
      description: "Premium RCC readymade compound walls for residential and industrial properties",
      href: "/products/compound-wall",
    },
    {
      name: "Boundary Wall",
      image: "/images/generated/product-boundary-wall.webp",
      description: "Durable concrete boundary walls engineered for maximum strength",
      href: "/products/boundary-wall",
    },
    {
      name: "Precast Wall",
      image: "/images/generated/product-precast-wall.webp",
      description: "Modern precast wall panels with quick installation",
      href: "/products/precast-wall",
    },
    {
      name: "RCC Wall",
      image: "/images/generated/product-rcc-compound.webp",
      description: "High-strength RCC walls for commercial and industrial applications",
      href: "/products/rcc-wall",
    },
    {
      name: "Cement Wall",
      image: "/images/generated/cat-cement.webp",
      description: "Prefabricated cement walls offering excellent durability",
      href: "/products/cement-wall",
    },
    {
      name: "Readymade Walls",
      image: "/images/generated/product-precast-wall.webp",
      description: "Complete ready-to-install wall solutions for faster projects",
      href: "/products/other-products",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Kharol",
      text: "The owner of GIR Precast, Vivek Patel, is exceptional in his dealings—polite, professional, and trustworthy.",
    },
    {
      name: "Dishant",
      text: "I ordered a precast wall and the quality of RCC panels is solid. Delivery was on time and installation was smooth.",
    },
    {
      name: "R Patel",
      text: "We ordered a Precast Readymade Boundary Wall. Same day shipping and their installation team was professional.",
    },
    {
      name: "Mr. Bhupendra",
      text: "Good quality and good service. The team work was excellent throughout the entire process.",
    },
  ];

  const stats = [
    { icon: Briefcase, label: "Years in Business", value: "4+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Projects Completed", value: "1000+" },
    { icon: Star, label: "Rating", value: "4.9/5" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Thank you for your inquiry! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Product Range Section */}
      <section className="concrete-texture py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gir-dark-blue mb-2">
              Our <span className="text-gir-gold">Product Range</span>
            </h2>
            <div className="w-24 h-1 bg-gir-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              {
                name: "Compound Wall",
                image: "/images/generated/cat-compound.webp",
                href: "/products/compound-wall",
                items: [
                  "Concrete Folding Compound Wall",
                  "Concrete Precast Single Panel Wall",
                  "Factory Boundary Wall",
                  "Heavy Readymade Boundary Wall",
                ],
              },
              {
                name: "Boundary Wall",
                image: "/images/generated/cat-boundary.webp",
                href: "/products/boundary-wall",
                items: [
                  "Cement Boundary Wall",
                  "Concrete Boundary Wall",
                  "Concrete Prestressed Boundary Walls",
                  "Precast Boundary Wall",
                ],
              },
              {
                name: "Cement Wall",
                image: "/images/generated/cat-cement.webp",
                href: "/products/cement-wall",
                items: ["Pre Fabricated Cement Wall", "RCC Cement Wall"],
              },
              {
                name: "Other Products",
                image: "/images/generated/product-precast-wall.webp",
                href: "/products/other-products",
                items: [
                  "Precast Wall",
                  "RCC Folding Wall",
                  "RCC Wall",
                  "Readymade Walls",
                ],
              },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white border border-gray-100 rounded-sm p-4 flex flex-col h-full hover:border-gir-gold/30 transitions-all duration-300 shadow-xl"
              >
                {/* Framed Image */}
                <div className="bg-gray-50 p-2 mb-6 border border-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-gir-dark-blue text-center mb-6">
                  {category.name}
                </h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-600 text-sm leading-snug">
                      <span className="text-gir-gold mt-1 font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={category.href}
                  className="text-gir-gold font-bold text-sm hover:underline mt-auto"
                >
                  + View all
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <img
              src="/images/generated/manufacturing-unit.webp"
              alt="GIR Precast Industries"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="fade-in-right">
            <h2 className="text-4xl font-bold text-gir-dark-blue mb-6">
              Welcome to GIR Precast Industries
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Based in Palwal, Haryana, India, we are a leading manufacturer and supplier of premium RCC and concrete compound walls. Newly established in 2020, we've quickly become a trusted name in the construction industry.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for builders, contractors, and developers across India.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-gir-gold text-gir-dark-blue rounded-lg font-bold hover:bg-gir-gold/90 transition-all"
            >
              Learn More About Us
            </Link>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-gir-gold mb-2">₹1 Cr+</p>
                <p className="text-gray-600 font-semibold">Annual Turnover</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-xl font-bold text-gir-dark-blue mb-2">GST</p>
                <p className="text-gray-600 font-semibold">06AEGFS8126M1ZK</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper
        title="Why Choose GIR Precast?"
        subtitle="Industry-leading quality and service standards"
        bg="concrete"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all scale-in"
            >
              <stat.icon size={48} className="text-gir-gold mx-auto mb-4" />
              <p className="text-3xl font-bold text-gir-dark-blue mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Popular Products */}
      <SectionWrapper
        title="Popular Products"
        subtitle="Our best-selling wall solutions trusted by thousands"
        bg="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              description={product.description}
              href={product.href}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Wall Manufacturing Unit Section */}
      <section className="py-20 bg-concrete-texture overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gir-dark-blue mb-2">
            Wall <span className="text-gir-gold">Manufacturing Unit</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities showcasing our high-precision production capabilities
          </p>
        </div>

        {/* Infinite Scrolling Marquee - Contained Version */}
        <div className="container mx-auto px-4 relative group/marquee">
          <div className="relative flex overflow-hidden rounded-xl border border-gray-100 bg-white shadow-inner p-2">
            
            {/* Navigation Arrows - Match Reference Image */}
            <button className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gir-dark-blue flex items-center justify-center text-white hover:bg-gir-dark-blue/90 transition-all shadow-xl opacity-0 group-hover/marquee:opacity-100">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gir-dark-blue flex items-center justify-center text-white hover:bg-gir-dark-blue/90 transition-all shadow-xl opacity-0 group-hover/marquee:opacity-100">
              <ChevronRight size={24} />
            </button>

            <div className="flex animate-marquee whitespace-nowrap gap-4 py-4">
              {[
                "/images/generated/manufacturing-unit.webp",
                "/images/generated/hero-banner.webp",
                "/images/generated/gallery-1.webp",
                "/images/generated/gallery-2.webp",
                "/images/generated/manufacturing-unit.webp",
                "/images/generated/hero-banner.webp",
                "/images/generated/gallery-1.webp",
                "/images/generated/gallery-2.webp",
              ].map((img, i) => (
                <div
                  key={i}
                  className="w-[300px] md:w-[450px] aspect-video rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all flex-shrink-0 group"
                >
                  <img
                    src={img}
                    alt={`Manufacturing Detail ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Duplicated set for seamless loop */}
            <div className="flex absolute top-2 animate-marquee2 whitespace-nowrap gap-4 py-4 ml-4">
              {[
                "/images/generated/manufacturing-unit.webp",
                "/images/generated/hero-banner.webp",
                "/images/generated/gallery-1.webp",
                "/images/generated/gallery-2.webp",
                "/images/generated/manufacturing-unit.webp",
                "/images/generated/hero-banner.webp",
                "/images/generated/gallery-1.webp",
                "/images/generated/gallery-2.webp",
              ].map((img, i) => (
                <div
                  key={`dup-${i}`}
                  className="w-[300px] md:w-[450px] aspect-video rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all flex-shrink-0 group"
                >
                  <img
                    src={img}
                    alt={`Manufacturing Detail Duplicate ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <SectionWrapper
        title="What Our Clients Say"
        subtitle="Real experiences from satisfied customers"
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all scale-in"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-gir-gold fill-gir-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gir-dark-blue">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Quick Enquiry Form */}
      <SectionWrapper
        title="Quick Enquiry"
        subtitle="Get in touch with us for personalized assistance"
        bg="concrete"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Product/Service
              </label>
              <input
                type="text"
                placeholder="Enter product looking for"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Phone/Mobile
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Message
              </label>
              <textarea
                placeholder="Leave a message for us"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gir-gold text-gir-dark-blue rounded-lg font-bold hover:bg-gir-gold/90 transition-all btn-premium"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <img
              src="/images/generated/contact-us.webp"
              alt="Contact Us"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gir-dark-blue mb-2">Location</h3>
                <p className="text-gray-600">Palwal, Haryana, India</p>
              </div>
              <div>
                <h3 className="font-bold text-gir-dark-blue mb-2">Contact</h3>
                <p className="text-gray-600">
                  <a href="tel:+918238902687" className="hover:text-gir-gold">
                    +91-8238902687
                  </a>
                  <br />
                  <a
                    href="mailto:info@girprecast-industries.com"
                    className="hover:text-gir-gold"
                  >
                    info@girprecast-industries.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;
