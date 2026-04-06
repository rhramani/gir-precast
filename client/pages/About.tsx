import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="relative h-[300px] bg-gir-dark-blue flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/generated/hero-banner.webp')" }}
        />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
          About <span className="text-gir-orange">GIR PRECAST PVT LTD</span>
        </h1>
      </div>

      <SectionWrapper bg="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in-left">
              <h2 className="text-3xl font-bold text-gir-dark-blue mb-6">
                Leading Manufacturer of <span className="text-gir-orange">RCC Compound Walls</span>
              </h2>
              <p className="text-gir-dark-gray text-lg mb-6 leading-relaxed">
                Deeply rooted in Palwal, Haryana, India, **GIR PRECAST PVT LTD** is a well-known manufacturer and supplier of various types of RCC and concrete Compound Walls. 
              </p>
              <p className="text-gir-dark-gray text-lg mb-6 leading-relaxed">
                Newly established in the year 2020, our company has grown under the expert guidance and hardship of **Mr. Vivek Koladiya**, our supervisor and the vivid mind behind our success. With his advanced approach in this field, we have been able to meet the demands of a high number of wholesale dealers and retailers across the nation.
              </p>
              <div className="bg-gir-orange/5 border-l-4 border-gir-orange p-6 italic text-gir-dark-blue font-medium">
                "Our advanced approach and commitment to quality allow us to deliver superior precast solutions that stand the test of time."
              </div>
            </div>
            <div className="fade-in-right">
              <img
                src="/images/generated/about-us.webp"
                alt="About GIR PRECAST PVT LTD"
                className="rounded-lg shadow-2xl w-full object-cover h-[450px]"
              />
            </div>
          </div>

          {/* Product Range Sub-section */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gir-dark-blue mb-6 text-center">Our <span className="text-gir-orange">Product Range</span></h3>
            <p className="text-gir-dark-gray mb-8 text-center max-w-3xl mx-auto">
              We manufacture and export a wide range of RCC Compound Walls including RCC Readymade Compound Wall, RCC Precast Compound Wall, RCC Panel Build Compound Wall, and Solar Plant Boundary Wall.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gir-orange">
                <p className="text-gir-dark-blue font-semibold">Reliable Raw Materials</p>
                <p className="text-sm text-gir-dark-gray mt-2">We obtain high-grade raw materials from reliable vendors to ensure the structural integrity of every panel.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gir-dark-blue">
                <p className="text-gir-dark-blue font-semibold">Tested Methods</p>
                <p className="text-sm text-gir-dark-gray mt-2">Our proficient staff processes every product using tried and tested methods for maximum durability.</p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-concrete-texture rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gir-orange/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-gir-orange" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gir-dark-blue mb-4">Our Vision</h3>
              <p className="text-gir-dark-gray leading-relaxed">
                Our vision is to be the selected supplier of our dealers and spread across the nation as a prominent manufacturer and exporter.
              </p>
            </div>
            <div className="p-8 bg-concrete-texture rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gir-orange/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-gir-orange" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gir-dark-blue mb-4">Our Mission</h3>
              <p className="text-gir-dark-gray leading-relaxed">
                Supply a reliable and high-quality Product & service to the client best proficiently and cost-effectively.
              </p>
            </div>
          </div>

          {/* Why Us */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gir-dark-blue mb-4">Why <span className="text-gir-orange">Choose Us?</span></h2>
            <p className="text-gir-dark-gray max-w-2xl mx-auto">We have a vast list of happy clients who trust our company due to the following core factors:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Massive distribution network across the country",
              "Large-scale high-tech warehouse facilities",
              "Wide range of quality-certified equipment",
              "Well-structured modern infrastructure",
              "Realistic and competitive price range",
              "Expedient and transparent business policies"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 border border-gray-50 rounded-lg bg-white shadow-sm">
                <CheckCircle2 className="text-gir-orange mt-1 flex-shrink-0" size={20} />
                <span className="text-gir-dark-blue font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Overlay Section */}
      <section className="py-20 bg-gir-dark-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-gir-orange mb-2">5+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gir-orange mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gir-orange mb-2">100%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Separator Case */}
      <section className="py-16 bg-[#f8f8f8] concrete-texture border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gir-dark-blue mb-6">
            Looking for <span className="text-gir-orange">Premium Precast Solutions?</span>
          </h3>
          <p className="text-gir-dark-gray mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your precast compound wall requirements.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-gir-orange text-white rounded-lg font-bold text-lg hover:bg-gir-orange/90 transition-all btn-premium shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;


