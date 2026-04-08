import { useState } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Plus, Minus } from "lucide-react";
import { productsData } from "@/data/products";

const About = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  // Extract categories for sidebar
  const categories = [
    { slug: "compound-wall", name: "Compound Wall" },
    { slug: "boundary-wall", name: "Boundary Wall" },
    { slug: "cement-wall", name: "Cement Wall" },
    { slug: "other-products", name: "Other Products" }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">About Us</span>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-3 pr-0 lg:pr-8">
            <h2 className="text-3xl font-bold text-gir-dark-blue mb-6">About Us</h2>

            <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img src="/images/generated/about-us.webp" alt="GIR Precast Facility" className="w-full h-[400px] object-cover" />
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              Deeply rooted in Palwal Haryana, India, <strong>GIR PRECAST PVT LTD</strong> is one of the well-known manufacturers and supplier of various types of RCC and concrete Compound Walls.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
              Newly established in the year 2020 and working under the hardship of Mr Vivek Koladiya our supervisor is the vivid mind behind the performance of our company. With his advanced approach in this field, we have been able to meet the demands of a big number of wholesale dealer's retailers.
            </p>

            <h3 className="text-xl font-bold text-gir-dark-blue mb-4 border-b pb-2 border-gray-100">Our Product Range</h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
              We manufacture and export a various range of RCC Compound Walls like RCC Readymade Compound Wall, RCC Precast Compound Wall, RCC Panel Build Compound Wall and solar plant boundary wall etc. We obtain the raw material from reliable vendors and process them with our proficient staff by supplying them with tried and tested methods.
            </p>

            <h3 className="text-xl font-bold text-gir-dark-blue mb-4 border-b pb-2 border-gray-100">Our Vision</h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
              Our vision is to be the selected supplier of our dealers and spread across the nation as a prominent manufacturer and exporter.
            </p>

            <h3 className="text-xl font-bold text-gir-dark-blue mb-4 border-b pb-2 border-gray-100">Our Mission</h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
              Supply a reliable and high-quality Product & service to the client best proficiently and cost-effectively.
            </p>

            <h3 className="text-xl font-bold text-gir-dark-blue mb-4 border-b pb-2 border-gray-100">Why Us?</h3>
            <p className="text-gray-600 mb-4 text-[15px]">
              We have a vast list of happy clients who believe our company due to the following factors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] mb-8">
              <li>Massive distribution network across the world</li>
              <li>Large warehouse</li>
              <li>Wide range of quality permitted equipment</li>
              <li>Well-structured infrastructure</li>
              <li>Realistic price range</li>
              <li>Expedient business policy</li>
            </ul>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white bg-gir-dark-blue px-4 py-3 border-l-4 border-gir-orange">
              Explore Our Range
            </h3>
            <div className="border border-gray-200 bg-gray-50/50 p-4">
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <div className="flex items-center justify-between gap-2 text-[15px] mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gir-orange flex-shrink-0"></span>
                        <Link
                          to={`/products/${category.slug}`}
                          className="text-gir-dark-blue font-bold hover:text-gir-orange transition-colors"
                        >
                          {category.name}
                        </Link>
                      </div>
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="text-gray-400 hover:text-gir-orange transition-colors p-1"
                        aria-label="Toggle category"
                      >
                        {openCategories[category.slug] ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                    {openCategories[category.slug] && (
                      <ul className="pl-4 space-y-2 mt-2 border-l border-gray-200 ml-1">
                        {productsData.filter(p => p.categorySlug === category.slug).map(prod => (
                          <li key={prod.slug} className="relative before:content-[''] before:absolute before:w-2 before:h-px before:bg-gray-300 before:left-0 before:top-2.5">
                            <Link
                              to={`/product/${prod.slug}`}
                              className="text-gray-500 hover:text-gir-orange transition-colors text-sm block pl-3"
                            >
                              {prod.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box in Sidebar */}
            <div className="mt-8 border border-gray-200">
              <h3 className="text-lg font-bold text-white bg-gir-dark-blue px-4 py-3 border-l-4 border-gir-orange">
                Contact Us
              </h3>
              <div className="p-5 bg-gray-50/50">
                <p className="text-gir-dark-blue font-bold mb-3 text-lg">GIR PRECAST PVT LTD</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Opp. Adani CNG Pump, Delhi-Mathura Road Near Hanuman Mandir, Palwal, Haryana - 121102, India</p>
                <p className="text-gray-600 text-sm mb-2"><strong>Mobile:</strong><br />+91-9992908099</p>
                <p className="text-gray-600 text-sm break-words"><strong>E-mail:</strong><br />info@girprecast.com</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;


