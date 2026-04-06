import SectionWrapper from "@/components/SectionWrapper";
import { Calendar, User, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogsData } from "@/data/blogs";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-medium uppercase tracking-wider text-[11px]">Our Blog</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Knowledge Center"
        subtitle="Insights & manufacturing updates from the pioneers of precast technology"
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogsData.map((post, index) => (
            <motion.div 
              key={post.slug} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Link to={`/blog/${post.slug}`} className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    Read Article <ChevronRight size={14} className="text-gir-orange" />
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-gir-orange text-gir-dark-blue text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest shadow-lg">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                    <Calendar size={12} className="text-gir-orange" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                    <Clock size={12} className="text-gir-orange" />
                    5 Min Read
                  </span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-2xl font-black text-gir-dark-blue mb-4 group-hover:text-gir-orange transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gir-dark-gray text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gir-dark-blue flex items-center justify-center text-white text-[10px] font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-bold text-gir-dark-blue uppercase tracking-wider">{post.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-[11px] font-black text-gir-orange uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-gir-orange transition-all pb-1 italic"
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Signup (Professional Polish) */}
        <div className="mt-24 bg-gir-dark-blue rounded-3xl p-10 md:p-16 relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-concrete-texture opacity-5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter italic">Subscribe to Updates</h2>
            <p className="text-white/70 text-sm mb-10 tracking-widest uppercase font-medium">Join 5,000+ industry experts receiving our monthly precast insights</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="PRO-EXPERT@COMPANY.COM" 
                className="flex-[2] bg-white text-gir-dark-blue px-6 py-4 rounded-xl font-bold uppercase text-sm focus:ring-4 focus:ring-gir-orange outline-none transition-all placeholder:text-gray-300"
              />
              <button className="flex-1 bg-gir-orange hover:bg-white hover:text-gir-dark-blue text-white font-black uppercase tracking-widest text-sm py-4 px-8 rounded-xl transition-all shadow-xl active:scale-95 italic">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Blog;


