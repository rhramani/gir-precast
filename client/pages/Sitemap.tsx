import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { productsData } from "@/data/products";
import { ChevronRight, ExternalLink, Package, LayoutGrid } from "lucide-react";

const Sitemap = () => {
  const generalLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Current Jobs", href: "/current-jobs" },
    { name: "Catalogues", href: "/catalogue" },
    { name: "Gallery", href: "/gallery" },
    { name: "Wall Manufacturing Unit", href: "/wall-manufacturing-unit" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
    // { name: "Site Map", href: "/sitemap" },
  ];

  const productCategories = [
    { name: "Compound Wall", slug: "compound-wall" },
    { name: "Boundary Wall", slug: "boundary-wall" },
    { name: "Cement Wall", slug: "cement-wall" },
    { name: "Other Products", slug: "other-products" },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Site Map"
        description="Browse the complete site map of GIR Precast Industries website."
        noIndex={true}
      />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Site Map</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Site Map"
        subtitle="Explore our website structure and product catalog with ease."
        bg="white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-20">
            
            {/* SECTION 1: GENERAL LINKS */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 h-fit">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <ExternalLink className="text-gir-orange" size={20} />
                <h3 className="text-xl font-black text-gir-dark-blue uppercase tracking-tight">General Links</h3>
              </div>
              
              <ul className="space-y-4">
                {generalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gir-dark-gray hover:text-gir-orange transition-all font-bold flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gir-orange/40 group-hover:bg-gir-orange transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 2: PRODUCTS */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b-2 border-gir-orange/20">
                <Package className="text-gir-orange" size={24} />
                <h3 className="text-2xl font-black text-gir-dark-blue uppercase tracking-tight">Products Overview</h3>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-10">
                {productCategories.map((cat) => {
                  const catProducts = productsData.filter(p => p.categorySlug === cat.slug);
                  return (
                    <div key={cat.slug} className="group bg-white p-5 sm:p-8 rounded-3xl border border-gray-50 hover:border-gir-orange/20 hover:shadow-xl hover:shadow-gray-100 transition-all">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-2xl bg-gir-orange/10 flex items-center justify-center shrink-0">
                           <LayoutGrid size={22} className="text-gir-orange" />
                         </div>
                         <Link to={`/products/${cat.slug}`} className="flex-1">
                           <h4 className="text-xl sm:text-2xl font-black text-gir-dark-blue group-hover:text-gir-orange transition-colors">
                             {cat.name}
                           </h4>
                         </Link>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pl-4 border-l-4 border-gray-100 group-hover:border-gir-orange/30 transition-colors">
                        {catProducts.map((product) => (
                          <li key={product.slug}>
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-[15px] font-semibold text-gray-500 hover:text-gir-dark-blue transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-gir-orange"></span>
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pl-4">
                        <Link
                          to={`/products/${cat.slug}`}
                          className="text-[13px] font-black text-gir-orange uppercase tracking-widest hover:text-gir-dark-blue inline-flex items-center gap-2 transition-colors"
                        >
                          View All {cat.name} <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Sitemap;


