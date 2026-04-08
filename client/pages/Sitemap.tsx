import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
        { name: "Wall Manufacturing Unit", href: "/wall-manufacturing-unit" },
        { name: "Catalogue", href: "/catalogue" },
        // { name: "Current Jobs", href: "/current-jobs" },
        { name: "Site Map", href: "/sitemap" },
      ],
    },
    {
      title: "Product Categories",
      links: [
        { name: "Compound Wall", href: "/products/compound-wall" },
        { name: "Boundary Wall", href: "/products/boundary-wall" },
        { name: "Cement Wall", href: "/products/cement-wall" },
        { name: "Other Products", href: "/products/other-products" },
      ],
    },
  ];

  return (
    <SectionWrapper
      title="Site Map"
      subtitle="Navigate all pages and sections of our website"
      bg="white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-bold text-gir-dark-blue mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gir-dark-gray hover:text-gir-orange transition-colors font-medium"
                    >
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Sitemap;


