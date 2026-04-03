import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { Star, Users, Briefcase, TrendingUp } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1565182000575-3dee3f0211f0?w=500&h=300&fit=crop",
      description: "Premium RCC readymade compound walls for residential and industrial properties",
      href: "/products/compound-wall",
    },
    {
      name: "Boundary Wall",
      image: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=300&fit=crop",
      description: "Durable concrete boundary walls engineered for maximum strength",
      href: "/products/boundary-wall",
    },
    {
      name: "Precast Wall",
      image: "https://images.unsplash.com/photo-1518568947-460ec7e7dd6b?w=500&h=300&fit=crop",
      description: "Modern precast wall panels with quick installation",
      href: "/products/precast-wall",
    },
    {
      name: "RCC Wall",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop",
      description: "High-strength RCC walls for commercial and industrial applications",
      href: "/products/rcc-wall",
    },
    {
      name: "Cement Wall",
      image: "https://images.unsplash.com/photo-1617638924702-92d37921f66e?w=500&h=300&fit=crop",
      description: "Prefabricated cement walls offering excellent durability",
      href: "/products/cement-wall",
    },
    {
      name: "Readymade Walls",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      description: "Complete ready-to-install wall solutions for faster projects",
      href: "/products/other-products",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Kharol",
      text: "The owner of SK Precast, Vivek Patel, is exceptional in his dealings—polite, professional, and trustworthy.",
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
      <SectionWrapper
        title="Our Product Range"
        subtitle="Comprehensive solutions for all your wall construction needs"
        bg="concrete"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Compound Wall", href: "/products/compound-wall" },
            { name: "Boundary Wall", href: "/products/boundary-wall" },
            { name: "Cement Wall", href: "/products/cement-wall" },
            { name: "Other Products", href: "/products/other-products" },
          ].map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-bold text-sk-dark-blue mb-2 group-hover:text-sk-gold transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">Premium quality walls</p>
              <span className="text-sk-gold font-semibold text-sm">View All →</span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Welcome Section */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695c952950?w=600&h=400&fit=crop"
              alt="SK Precast Industries"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="fade-in-right">
            <h2 className="text-4xl font-bold text-sk-dark-blue mb-6">
              Welcome to SK Precast Industries
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Based in Palwal, Haryana, India, we are a leading manufacturer and supplier of premium RCC and concrete compound walls. Newly established in 2020, we've quickly become a trusted name in the construction industry.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for builders, contractors, and developers across India.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-sk-gold text-sk-dark-blue rounded-lg font-bold hover:bg-sk-gold/90 transition-all"
            >
              Learn More About Us
            </Link>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-sk-gold mb-2">₹1 Cr+</p>
                <p className="text-gray-600 font-semibold">Annual Turnover</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-xl font-bold text-sk-dark-blue mb-2">GST</p>
                <p className="text-gray-600 font-semibold">06AEGFS8126M1ZK</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper
        title="Why Choose SK Precast?"
        subtitle="Industry-leading quality and service standards"
        bg="concrete"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all scale-in"
            >
              <stat.icon size={48} className="text-sk-gold mx-auto mb-4" />
              <p className="text-3xl font-bold text-sk-dark-blue mb-2">
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

      {/* Gallery Preview */}
      <SectionWrapper
        title="Wall Manufacturing Unit"
        subtitle="State-of-the-art facilities showcasing our production capabilities"
        bg="concrete"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <img
                src={`https://images.unsplash.com/photo-158157873${5000 + i}?w=400&h=300&fit=crop`}
                alt={`Manufacturing Unit ${i}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

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
                  <Star key={i} size={20} className="text-sk-gold fill-sk-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-sk-dark-blue">— {testimonial.name}</p>
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
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Product/Service
              </label>
              <input
                type="text"
                placeholder="Enter product looking for"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Phone/Mobile
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Message
              </label>
              <textarea
                placeholder="Leave a message for us"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-sk-gold text-sk-dark-blue rounded-lg font-bold hover:bg-sk-gold/90 transition-all btn-premium"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
              alt="Contact Us"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-sk-dark-blue mb-2">Location</h3>
                <p className="text-gray-600">Palwal, Haryana, India</p>
              </div>
              <div>
                <h3 className="font-bold text-sk-dark-blue mb-2">Contact</h3>
                <p className="text-gray-600">
                  <a href="tel:+918238902687" className="hover:text-sk-gold">
                    +91-8238902687
                  </a>
                  <br />
                  <a
                    href="mailto:info@skprecast-industries.com"
                    className="hover:text-sk-gold"
                  >
                    info@skprecast-industries.com
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
