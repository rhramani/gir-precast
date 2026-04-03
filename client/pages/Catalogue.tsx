import SectionWrapper from "@/components/SectionWrapper";
import { Download } from "lucide-react";

const Catalogue = () => {
  const catalogues = [
    { name: "General Catalogue", size: "2.4 MB" },
    { name: "Product Specifications", size: "1.8 MB" },
    { name: "Installation Guide", size: "3.2 MB" },
    { name: "Pricing & Terms", size: "0.9 MB" },
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
                <h3 className="text-lg font-bold text-sk-dark-blue">{catalogue.name}</h3>
                <p className="text-sm text-gray-600">{catalogue.size}</p>
              </div>
              <button className="px-6 py-2 bg-sk-gold text-sk-dark-blue rounded-lg font-semibold hover:bg-sk-gold/90 transition-all flex items-center gap-2">
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
