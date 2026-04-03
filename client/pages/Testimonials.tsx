import SectionWrapper from "@/components/SectionWrapper";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "Arjun Kharol", text: "The owner of SK Precast, Vivek Patel, is exceptional in his dealings—polite, professional, and trustworthy. Highly recommended!", rating: 5 },
    { name: "Dishant", text: "I ordered a precast wall in Palwal. The RCC panels are solid and well-constructed. Delivery was prompt.", rating: 5 },
    { name: "R Patel", text: "We ordered a Precast Readymade Boundary Wall. Same day shipping and their installation team was professional.", rating: 5 },
    { name: "Mr. Bhupendra", text: "Good quality and good service and team work", rating: 5 },
    { name: "NASIT PARTH", text: "Vivek Patel recommends high quality walls with ability to enhance property value.", rating: 5 },
    { name: "Chandubhai Makwana", text: "Excellent service and product quality. Would definitely recommend.", rating: 5 },
  ];

  return (
    <SectionWrapper
      title="Customer Testimonials"
      subtitle="Real feedback from our satisfied clients"
      bg="concrete"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-sk-gold fill-sk-gold" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            <p className="font-bold text-sk-dark-blue">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
