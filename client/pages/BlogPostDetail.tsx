import { useParams, Link } from "react-router-dom";
import { blogsData } from "@/data/blogs";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { 
  Calendar, 
  User, 
  ChevronRight, 
  Search, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Clock, 
  Tag,
  ArrowLeft,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BlogPostDetail = () => {
  const { slug } = useParams();
  // Handle both .htm and raw slugs
  const cleanSlug = slug?.replace(".htm", "");
  const post = blogsData.find((b) => b.slug === cleanSlug);

  if (!post) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-black text-gir-dark-blue mb-4 uppercase tracking-tight">Post Not Found</h2>
          <Link to="/blog" className="text-gir-orange font-bold hover:underline uppercase tracking-widest text-xs">Back to Knowledge Center</Link>
        </div>
      </div>
    );
  }

  const recentPosts = blogsData.filter(b => b.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`https://www.girprecast.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image.startsWith('http') ? post.image : `https://www.girprecast.com${post.image}`}
        keywords={`${post.category}, precast wall blog, GIR Precast, compound wall guide, boundary wall article`}
        publishedTime={post.date}
      />
      {/* Article Header (Breadcrumbs & Back) */}
      <div className="bg-gray-50 border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/blog" className="hover:text-gir-dark-blue transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-gir-dark-blue truncate max-w-[200px]">{post.category}</span>
            </div>
            <Link to="/blog" className="flex items-center gap-2 text-gir-dark-blue hover:text-gir-orange transition-colors font-black uppercase tracking-widest text-[10px]">
              <ArrowLeft size={14} />
              Back to Center
            </Link>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Main Article Content */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Post Meta & Title */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-gir-orange italic">
                  <span className="flex items-center gap-1.5 border-b-2 border-gir-orange/20 pb-1">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gir-dark-blue leading-[1.1] uppercase tracking-tighter">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-gir-orange" />
                    <span>BY {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gir-orange" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gir-orange" />
                    <span>5 MIN READ</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[21/9]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Share Bar */}
              <div className="flex items-center gap-6 py-4 bg-gray-50 rounded-xl px-6 border border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-gir-dark-blue italic">Share Article:</span>
                <div className="flex gap-4">
                   <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gir-dark-blue hover:bg-gir-orange hover:text-white transition-all shadow-sm">
                     <Facebook size={14} />
                   </button>
                   <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gir-dark-blue hover:bg-gir-orange hover:text-white transition-all shadow-sm">
                     <Twitter size={14} />
                   </button>
                   <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gir-dark-blue hover:bg-gir-orange hover:text-white transition-all shadow-sm">
                     <Linkedin size={14} />
                   </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gir-dark-gray leading-relaxed space-y-6">
                {post.sections.map((section, index) => {
                  if (section.type === 'h2') {
                    return (
                      <h2 key={index} className="text-2xl font-black text-gir-dark-blue mt-12 mb-6 uppercase tracking-tight">
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === 'li') {
                    return (
                      <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg border-l-4 border-gir-orange">
                        <div className="w-2 h-2 bg-gir-orange rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[15px] font-bold text-gir-dark-blue leading-snug">
                          {section.text}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-[17px] leading-relaxed">
                      {section.text}
                    </p>
                  );
                })}
              </div>

              {/* Tags Section */}
              <div className="pt-10 flex flex-wrap gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mr-2 flex items-center">Tags:</span>
                {["Precast", "Construction", "Security", "Industrial"].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase text-gir-dark-blue hover:bg-gir-orange hover:text-white cursor-pointer transition-all">
                     #{tag}
                   </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            {/* Search Widget */}
            <div className="bg-gir-dark-blue p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-concrete-texture opacity-5 group-hover:opacity-10 transition-opacity" />
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-3 italic">
                Search Articles
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="SEARCH..." 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white font-bold uppercase text-xs focus:ring-2 focus:ring-gir-orange outline-none placeholder:text-white/30"
                />
                <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-gir-orange" />
               <h3 className="text-gir-dark-blue text-xs font-black uppercase tracking-widest mb-6 border-b border-gray-100 pb-3 italic">
                Article Categories
              </h3>
              <ul className="space-y-4">
                {[
                  "Precast Solutions (8)",
                  "Security Walls (5)",
                  "Manufacturing Unit (3)",
                  "Technical Guides (12)"
                ].map(cat => (
                  <li key={cat}>
                    <button className="flex items-center justify-between w-full text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-gir-orange transition-all group">
                      <span>{cat}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="space-y-6">
               <h3 className="text-gir-dark-blue text-xs font-black uppercase tracking-widest border-b border-gray-100 pb-3 italic">
                Recent Knowledge
              </h3>
              <div className="space-y-6">
                {recentPosts.map(rp => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
                      <img src={rp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-2">
                       <span className="text-[9px] font-black text-gir-orange uppercase tracking-widest">{rp.date}</span>
                       <h4 className="text-[11px] font-black text-gir-dark-blue uppercase tracking-tighter line-clamp-2 leading-tight group-hover:underline">
                         {rp.title}
                       </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Need Help Sidebar */}
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-200 text-center">
              <h3 className="text-gir-dark-blue text-xs font-black uppercase tracking-widest mb-4 italic">Need Expert Advice?</h3>
              <p className="text-[11px] font-medium text-gray-500 mb-6 uppercase tracking-wider leading-relaxed">Our engineers are available for technical consultation on your next project.</p>
              <Button asChild className="w-full bg-gir-dark-blue hover:bg-black font-black uppercase tracking-widest text-[10px] h-auto py-4">
                <Link to="/contact">Consult Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogPostDetail;
