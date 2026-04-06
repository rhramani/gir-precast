import SectionWrapper from "@/components/SectionWrapper";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    { title: "Benefits of Precast Walls", author: "Admin", date: "2024-01-15", excerpt: "Discover why precast walls are becoming the preferred choice for modern developers and homeowners.", image: "/images/generated/product-rcc-compound.webp" },
    { title: "Manufacturing Process", author: "Admin", date: "2024-01-10", excerpt: "Learn about our state-of-the-art manufacturing process that ensures consistent quality and durability.", image: "/images/generated/manufacturing-unit.webp" },
    { title: "Industry Trends 2024", author: "Admin", date: "2024-01-05", excerpt: "Stay updated with the latest trends in construction and the rise of modular precast solutions.", image: "/images/generated/carousel-2.webp" },
  ];

  return (
    <SectionWrapper
      title="Blog"
      subtitle="Latest updates and insights from GIR Precast Industries"
      bg="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gir-dark-blue mb-3">{post.title}</h3>
              <div className="flex gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-gir-gold font-semibold hover:text-gir-gold/80">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Blog;
