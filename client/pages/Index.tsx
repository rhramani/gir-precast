import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import InquiryModal from "@/components/InquiryModal";
import PhoneInput from "@/components/ui/phone-input";
import { productsData, ProductDetail } from "@/data/products";
import { sendInquiry } from "@/lib/inquiry";
import { toast } from "sonner";
import {
  Star,
  Users,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  PiggyBank,
  FileText
} from "lucide-react";

const Index = () => {
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<ProductDetail | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleEnquiryClick = (slug: string) => {
    const product = productsData.find(p => p.slug === slug);
    if (product) {
      setSelectedInquiryProduct(product);
      setIsInquiryModalOpen(true);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const products = [
    {
      slug: "concrete-folding-compound-wall",
      name: "RCC Compound Wall",
      image: "/images/generated/product-rcc-compound.webp",
      description: "Premium RCC readymade compound walls for residential and industrial properties",
      href: "/product/concrete-folding-compound-wall",
    },
    {
      slug: "concrete-boundary-wall",
      name: "Boundary Wall",
      image: "/images/generated/product-boundary-wall.webp",
      description: "Durable concrete boundary walls engineered for maximum strength",
      href: "/product/concrete-boundary-wall",
    },
    {
      slug: "precast-boundary-wall",
      name: "Precast Wall",
      image: "/images/generated/product-precast-wall.webp",
      description: "Modern precast wall panels with quick installation",
      href: "/product/precast-boundary-wall",
    },
    {
      slug: "rcc-industrial-one-piece-compound-wall",
      name: "RCC Wall",
      image: "/images/generated/product-rcc-compound.webp",
      description: "High-strength RCC walls for commercial and industrial applications",
      href: "/product/rcc-industrial-one-piece-compound-wall",
    },
    {
      slug: "pre-fabricated-cement-wall",
      name: "Cement Wall",
      image: "/images/generated/cat-cement.webp",
      description: "Prefabricated cement walls offering excellent durability",
      href: "/product/pre-fabricated-cement-wall",
    },
    {
      slug: "readymade-compound-wall",
      name: "Readymade Walls",
      image: "/images/generated/product-precast-wall.webp",
      description: "Complete ready-to-install wall solutions for faster projects",
      href: "/product/readymade-compound-wall",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Kharol",
      text: "The owner of GIR PRECAST PVT LTD, Vivek Patel, is exceptional in his dealings—polite, professional, and trustworthy.",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'enquiry',
          ...formData
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success("Enquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", product: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send enquiry.");
      }
    } catch (error) {
      toast.error("Network error. Please make sure the backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Leading Precast Concrete Solutions" 
        description="GIR Precast is a leading manufacturer of high-quality precast boundary walls, RCC compound walls, and cement wall solutions in Palwal, Haryana."
      />
      {/* Inquiry Modal */}
      <InquiryModal
        product={selectedInquiryProduct}
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Product Range Section */}
      <section className="concrete-texture py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gir-dark-blue mb-2">
              Our <span className="text-gir-orange">Product Range</span>
            </h2>
            <div className="w-24 h-1 bg-gir-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              {
                name: "Compound Wall",
                image: "/images/generated/cat-compound.webp",
                href: "/products/compound-wall",
                items: [
                  { name: "Concrete Folding Compound Wall", slug: "concrete-folding-compound-wall" },
                  { name: "Concrete Precast Single Panel Wall", slug: "concrete-precast-single-panel-wall" },
                  { name: "Factory Boundary Wall", slug: "factory-boundary-wall" },
                  { name: "Heavy Readymade Boundary Wall", slug: "heavy-readymade-boundary-wall" },
                ],
              },
              {
                name: "Boundary Wall",
                image: "/images/generated/cat-boundary.webp",
                href: "/products/boundary-wall",
                items: [
                  { name: "Cement Boundary Wall", slug: "cement-boundary-wall" },
                  { name: "Concrete Boundary Wall", slug: "concrete-boundary-wall" },
                  { name: "Concrete Prestressed Boundary Walls", slug: "concrete-prestressed-boundary-walls" },
                  { name: "Precast Boundary Wall", slug: "precast-boundary-wall" },
                ],
              },
              {
                name: "Cement Wall",
                image: "/images/generated/cat-cement.webp",
                href: "/products/cement-wall",
                items: [
                  { name: "Pre Fabricated Cement Wall", slug: "pre-fabricated-cement-wall" },
                  { name: "RCC Cement Wall", slug: "rcc-cement-wall" },
                ],
              },
              {
                name: "Other Products",
                image: "/images/generated/product-precast-wall.webp",
                href: "/products/other-products",
                items: [
                  { name: "Precast Wall", slug: "precast-wall" },
                  { name: "RCC Folding Wall", slug: "rcc-folding-wall" },
                  { name: "RCC Wall", slug: "rcc-wall" },
                  { name: "Readymade Walls", slug: "readymade-walls" },
                ],
              },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white border border-gray-100 rounded-sm p-4 flex flex-col h-full hover:border-gir-orange/30 transitions-all duration-300 shadow-xl"
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
                    <li key={item.slug} className="flex gap-2 text-sm leading-snug">
                      <span className="text-gir-orange mt-0.5 font-bold">›</span>
                      <Link
                        to={`/product/${item.slug}`}
                        className="text-gir-dark-gray hover:text-gir-orange transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to={category.href}
                  className="text-gir-orange font-bold text-sm hover:underline mt-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side with offset border */}
          <div className="relative p-4 pl-6 pt-6 fade-in-left">
            <div className="absolute top-0 left-0 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] border-2 border-gir-orange rounded-lg z-0"></div>
            <img
              src="/images/generated/manufacturing-unit.webp"
              alt="GIR PRECAST PVT LTD"
              className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          {/* Text Side */}
          <div className="fade-in-right">
            <h2 className="text-3xl font-bold text-gir-dark-blue mb-6">
              Welcome to our Website
            </h2>
            <p className="text-gray-600 mb-8 leading-loose text-sm font-medium">
              Deeply rooted in Palwal Haryana, India, GIR PRECAST PVT LTD is one of the well-known manufacturers and supplier of various types of RCC and concrete Compound Walls. Newly established in the year 2020 and working under
            </p>

            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-gir-orange text-white font-bold rounded hover:bg-gir-dark-blue transition-colors shadow-lg shadow-gir-orange/20 mb-12 text-sm"
            >
              View more
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* GST Box */}
              {/* <div className="border border-gray-100 p-6 flex flex-col items-start bg-gray-50 transition-colors hover:border-gir-orange/30 rounded-xl">
                <FileText className="text-gray-400 mb-5 stroke-1 group-hover:text-gir-orange transition-colors" size={42} />
                <h4 className="text-gir-dark-blue font-bold text-[15px] mb-2 tracking-wide">GST No</h4>
                <p className="text-gray-500 text-xs font-semibold tracking-wide">06AEGFS8126M1ZK</p>
              </div> */}

              {/* Turnover Box */}
              <div className="border border-gray-100 p-6 flex flex-col items-start bg-gray-50 transition-colors hover:border-gir-orange/30 rounded-xl">
                <PiggyBank className="text-gray-400 mb-5 stroke-1 group-hover:text-gir-orange transition-colors" size={42} />
                <h4 className="text-gir-dark-blue font-bold text-[15px] mb-2 tracking-wide">Annual Turnover</h4>
                <p className="text-gray-500 text-xs font-semibold tracking-wide">More Than Rs. 1 Crore</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper
        title="Why Choose GIR PRECAST PVT LTD?"
        subtitle="Industry-leading quality and service standards"
        bg="concrete"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Massive distribution network across the country", icon: TrendingUp },
            { label: "Large-scale high-tech warehouse facilities", icon: Briefcase },
            { label: "Wide range of quality-certified equipment", icon: Star },
            { label: "Well-structured modern infrastructure", icon: Users },
            { label: "Realistic and competitive price range", icon: TrendingUp },
            { label: "Expedient and transparent business policies", icon: Star },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-b-4 border-gir-dark-blue hover:border-gir-orange h-full group"
            >
              <feature.icon size={48} className="text-gir-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-gir-dark-blue font-bold text-lg leading-relaxed">
                {feature.label}
              </p>
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
              onEnquiryClick={() => handleEnquiryClick(product.slug)}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Wall Manufacturing Unit Section */}
      <section className="py-20 bg-concrete-texture overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gir-dark-blue mb-2">
            Wall <span className="text-gir-orange">Manufacturing Unit</span>
          </h2>
          <p className="text-gir-dark-gray max-w-2xl mx-auto">
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
                  <Star key={i} size={20} className="text-gir-orange fill-gir-orange" />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Phone/Mobile
              </label>
              <PhoneInput
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                className="w-full"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gir-orange text-white rounded-lg font-bold hover:bg-gir-orange/90 transition-all btn-premium font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
                <p className="text-gir-dark-gray">Palwal, Haryana, India</p>
              </div>
              <div>
                <h3 className="font-bold text-gir-dark-blue mb-2">Contact</h3>
                <p className="text-gir-dark-gray">
                  <a href="tel:+919992908099" className="hover:text-gir-orange">
                    +91-9992908099
                  </a>
                  <br />
                  <a
                    href="mailto:info@girprecast.com"
                    className="hover:text-gir-orange"
                  >
                    info@girprecast.com
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


