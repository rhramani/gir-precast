import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <>
      <SectionWrapper
        title="About SK Precast Industries"
        subtitle="Learn more about our company and mission"
        bg="white"
      >
        <div className="max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
            alt="About SK Precast"
            className="rounded-lg shadow-lg mb-8 w-full"
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              SK Precast Industries is a leading manufacturer of premium RCC and concrete precast walls.
              Based in Palwal, Haryana, we serve builders, contractors, and property owners across India
              with high-quality, durable wall solutions.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Since our establishment in 2020, we've maintained a commitment to excellence, innovation,
              and customer satisfaction. Our state-of-the-art manufacturing facilities ensure consistent
              quality and timely delivery.
            </p>
            <p className="text-gray-600 text-lg">
              Continue exploring our content or <a href="/contact" className="text-sk-gold font-bold">contact us</a> to learn more.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
