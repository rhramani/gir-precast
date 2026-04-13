import { useState } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { 
  ChevronRight, 
  Star, 
  Quote, 
  User, 
  MapPin, 
  Calendar,
  ChevronLeft
} from "lucide-react";

interface Testimonial {
  name: string;
  date: string;
  location: string | null;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Dishant",
    date: "14 Mar 2026",
    location: "Palwal, Haryana",
    rating: 5,
    text: "I ordered a precast wall for my residential plot in Palwal from GIR PRECAST PVT LTD, and I’m very satisfied. The RCC panels are solid, well-finished, and perfectly fitted with the columns. The team maintained cleanliness at the site and finished everything on schedule. Compared to traditional boundary walls, precast is much faster and more economical."
  },
  {
    name: "Geeta Bhaliya",
    date: "29 Mar 2025",
    location: "Kitwadi Chowk, Palwal",
    rating: 5,
    text: "The owner of GIR PRECAST PVT LTD is exceptional in his dealings—polite, professional, and always ready with the right response. We had compound wall work done on 2.5 acres near Kitwadi Chowk in Palwal, and the quality was outstanding with excellent finishing. After observing various precast providers in Palwal, we found that none matched the quality of GIR PRECAST PVT LTD."
  },
  {
    name: "R Patel",
    date: "13 Mar 2026",
    location: "Palwal",
    rating: 5,
    text: "We ordered a Precast Readymade Boundary Wall for our farmhouse near Palwal. The material reached the site the same day, and the installation team finished the work perfectly. The team is very committed and trustworthy service."
  },
  {
    name: "Mr. Bhupendra",
    date: "10 Mar 2026",
    location: null,
    rating: 5,
    text: "I recently had a precast wall installed by GIR PRECAST PVT LTD, and the experience was great. The build quality is strong, and it completely changed the look of my property. Their service is fast and reliable. Highly recommended for anyone looking for reliable precast solutions!"
  },
  {
    name: "Neeraj Satasiya",
    date: "29 Mar 2025",
    location: "Noida",
    rating: 5,
    text: "I call him regarding boundary wall and he visited site. Gave some suggestions and finally completed the wall. Nice service in noida for Precast wall. I wish GIR PRECAST PVT LTD all the best for their future."
  },
  {
    name: "Jaydip Chauhan",
    date: "29 Mar 2025",
    location: "Delhi NCR",
    rating: 5,
    text: "GIR PRECAST PVT LTD delivered goods exactly as per their performa invoice without any discrepancy. Great manufacturer of RCC walls in Delhi NCR!"
  },
  {
    name: "Arjun Kharol",
    date: "29 Mar 2025",
    location: null,
    rating: 5,
    text: "I purchased a wall from GIR PRECAST PVT LTD, and I am very impressed with its quality and strength. This company delivers on time and provides excellent support. If you are also looking for a precast wall, GIR PRECAST PVT LTD is a great choice"
  },
  {
    name: "Chandubhai Makwana",
    date: "29 Mar 2025",
    location: null,
    rating: 5,
    text: "Great job done by the team, they were very professional & soft spoken. Quality of material is best as far as I know GIR PRECAST PVT LTD is best in Compound Wall manufacturing."
  },
  {
    name: "Rakesh Rajput",
    date: "29 Mar 2025",
    location: null,
    rating: 5,
    text: "Good quality and good service and team work"
  },
  {
    name: "NASIT PARTH",
    date: "29 Mar 2025",
    location: null,
    rating: 5,
    text: "Vivek Patel recommends high quality walls for their exceptional craftsmanship and ability to enhance property value."
  },
  {
    name: "Satish Padamshali",
    date: "31 Mar 2023",
    location: null,
    rating: 5,
    text: "The company offer good quality products as compared to others in the market"
  },
  {
    name: "Anshika Yadav",
    date: "07 Apr 2026",
    location: null,
    rating: 5,
    text: "Excellent service and high-quality precast solutions. The team was professional and the finishing of the compound wall was beyond expectations."
  },
  {
    name: "Pawan Kumar Mehta",
    date: "01 Apr 2026",
    location: null,
    rating: 5,
    text: "Very satisfied with the boundary wall installation. Fast, durable, and cost-effective solution for our industrial site."
  },
  {
    name: "Adinath",
    date: "20 Mar 2026",
    location: null,
    rating: 5,
    text: "Professional approach and timely delivery. The material quality is superior to traditional brick walls."
  }
];

const ITEMS_PER_PAGE = 8;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonialsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTestimonials = testimonialsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Client Testimonials - Reviews of GIR Precast"
        description="Read genuine reviews and testimonials from our satisfied clients across Haryana, Delhi NCR, and India. Trusted precast compound wall manufacturer since 2020."
        keywords="GIR Precast reviews, precast wall testimonials, compound wall customer feedback, RCC boundary wall reviews Haryana, precast manufacturer reviews India"
        canonical="https://www.girprecast.com/testimonials"
      />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Client Testimonials</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Client Testimonials"
        subtitle="Hear from our satisfied clients about their experience with GIR Precast products and services."
        bg="white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {currentTestimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gir-orange/5 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Quote size={80} className="text-gir-orange" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gir-orange text-gir-orange" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gir-dark-blue flex items-center justify-center text-white shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gir-dark-blue uppercase tracking-tight">{item.name}</h4>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-1">
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase">
                          <MapPin size={12} className="text-gir-orange" /> {item.location}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase">
                        <Calendar size={12} className="text-gir-orange" /> {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gir-dark-blue hover:bg-gir-dark-blue hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gir-dark-blue"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-xl font-bold transition-all ${
                      currentPage === i + 1 
                        ? "bg-gir-orange text-white shadow-lg" 
                        : "bg-gray-50 text-gir-dark-blue hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gir-dark-blue hover:bg-gir-dark-blue hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gir-dark-blue"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Testimonials;
