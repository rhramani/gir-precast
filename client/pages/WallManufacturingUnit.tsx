import SectionWrapper from "@/components/SectionWrapper";
import { Factory, Cpu, ShieldCheck, Zap } from "lucide-react";

const WallManufacturingUnit = () => {
  return (
    <>
      <div className="relative h-[300px] bg-gir-dark-blue flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/generated/manufacturing-unit.webp')" }}
        />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
          Wall <span className="text-gir-orange">Manufacturing Unit</span>
        </h1>
      </div>

      <SectionWrapper bg="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in-left">
              <h2 className="text-3xl font-bold text-gir-dark-blue mb-6">
                State-of-the-Art <span className="text-gir-orange">Production Facility</span>
              </h2>
              <p className="text-gir-dark-gray text-lg mb-6 leading-relaxed">
                Located in Palwal, Haryana, our manufacturing unit is equipped with advanced machinery and technology to produce high-quality precast compound walls. We follow stringent quality control measures at every stage of production.
              </p>
              <p className="text-gir-dark-gray text-lg mb-6 leading-relaxed">
                Our facility is designed for large-scale production to meet the growing demands of wholesale dealers and retailers across India. With a focus on precision and durability, we use premium-grade raw materials sourced from reliable vendors.
              </p>
            </div>
            <div className="fade-in-right">
              <img
                src="/images/generated/manufacturing-unit.webp"
                alt="GIR PRECAST Manufacturing Unit"
                className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { 
                icon: <Factory size={28} />, 
                title: "Advanced Machinery", 
                desc: "High-tech equipment for precise casting and finishing of precast panels." 
              },
              { 
                icon: <Cpu size={28} />, 
                title: "Modern Technology", 
                desc: "Innovative production methods ensuring structural integrity and strength." 
              },
              { 
                icon: <ShieldCheck size={28} />, 
                title: "Quality Control", 
                desc: "Rigorous testing of raw materials and finished products for global standards." 
              },
              { 
                icon: <Zap size={28} />, 
                title: "Efficient Production", 
                desc: "Optimised workflows for rapid production and timely delivery across India." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-concrete-texture rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-gir-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto text-gir-orange">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gir-dark-blue mb-3">{item.title}</h3>
                <p className="text-gir-dark-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gir-dark-blue text-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Unit <span className="text-gir-orange">Specifications</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center border-r border-gray-700 last:border-0">
                <div className="text-4xl font-bold text-gir-orange mb-2">50,000+</div>
                <div className="text-gray-300">Sq. Ft Area</div>
              </div>
              <div className="text-center border-r border-gray-700 last:border-0">
                <div className="text-4xl font-bold text-gir-orange mb-2">500+</div>
                <div className="text-gray-300">Daily Production Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gir-orange mb-2">24/7</div>
                <div className="text-gray-300">Quality Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WallManufacturingUnit;
