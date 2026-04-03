import SectionWrapper from "@/components/SectionWrapper";

const Gallery = () => {
  return (
    <SectionWrapper
      title="Our Gallery"
      subtitle="Showcase of our manufacturing and installation projects"
      bg="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <img
              src={`https://images.unsplash.com/photo-158157873${5000 + i}?w=400&h=400&fit=crop`}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
