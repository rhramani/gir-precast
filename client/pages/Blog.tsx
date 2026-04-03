import SectionWrapper from "@/components/SectionWrapper";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    { title: "Benefits of Precast Walls", author: "Admin", date: "2024-01-15", excerpt: "Discover why precast walls are becoming the preferred choice..." },
    { title: "Manufacturing Process", author: "Admin", date: "2024-01-10", excerpt: "Learn about our state-of-the-art manufacturing process..." },
    { title: "Industry Trends 2024", author: "Admin", date: "2024-01-05", excerpt: "Stay updated with the latest trends in construction..." },
  ];

  return (
    <SectionWrapper
      title="Blog"
      subtitle="Latest updates and insights from SK Precast Industries"
      bg="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-sk-dark-blue mb-3">{post.title}</h3>
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
              <a href="#" className="text-sk-gold font-semibold hover:text-sk-gold/80">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Blog;
