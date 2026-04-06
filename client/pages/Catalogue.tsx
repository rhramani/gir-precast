import SectionWrapper from "@/components/SectionWrapper";
import { Download } from "lucide-react";

const Catalogue = () => {
  const catalogues = [
    { name: "Precast Compound Wall Catalogue", size: "3.5 MB" },
    { name: "Boundary Wall Product Guide", size: "2.1 MB" },
    { name: "Solar Plant Specialty Walls", size: "1.2 MB" },
    { name: "Ready Made Wall Solutions", size: "2.8 MB" },
    { name: "Unit Manufacturing Standards", size: "1.5 MB" },
  ];

  return (
    <SectionWrapper
      title="Catalogues & Downloads"
      subtitle="Download our comprehensive product catalogues and documentation"
      bg="white"
    >
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-4">
          {catalogues.map((catalogue) => (
            <div
              key={catalogue.name}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-gir-dark-blue">{catalogue.name}</h3>
                <p className="text-sm text-gir-dark-gray">{catalogue.size}</p>
              </div>
              <button className="px-6 py-2 bg-gir-orange text-white rounded-lg font-semibold hover:bg-gir-orange/90 transition-all flex items-center gap-2">
                <Download size={18} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Catalogue;


