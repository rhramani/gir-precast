import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      category: "Compound Wall",
      items: [
        { name: "Concrete Folding Compound Wall", href: "/products/compound-wall" },
        { name: "Concrete Precast Single Panel Wall", href: "/products/compound-wall" },
        { name: "Factory Boundary Wall", href: "/products/compound-wall" },
        { name: "Heavy Readymade Boundary Wall", href: "/products/compound-wall" },
        { name: "Industrial Compound Wall", href: "/products/compound-wall" },
      ],
    },
    {
      category: "Boundary Wall",
      items: [
        { name: "Cement Boundary Wall", href: "/products/boundary-wall" },
        { name: "Concrete Boundary Wall", href: "/products/boundary-wall" },
        { name: "Concrete Prestressed Boundary Walls", href: "/products/boundary-wall" },
        { name: "Precast Boundary Wall", href: "/products/boundary-wall" },
        { name: "RCC Boundary Wall", href: "/products/boundary-wall" },
      ],
    },
    {
      category: "Cement Wall",
      items: [
        { name: "Pre Fabricated Cement Wall", href: "/products/cement-wall" },
        { name: "RCC Cement Wall", href: "/products/cement-wall" },
      ],
    },
    {
      category: "Other Products",
      items: [
        { name: "Precast Wall", href: "/products/precast-wall" },
        { name: "RCC Folding Wall", href: "/products/other-products" },
        { name: "RCC Wall", href: "/products/rcc-wall" },
        { name: "Readymade Walls", href: "/products/other-products" },
      ],
    },
  ];

  return (
    <>
      {/* Top bar with contact info */}
      <div className={`hidden md:block w-full border-b border-sk-cement transition-colors duration-300 ${isScrolled ? "bg-white" : "bg-white"}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@skprecast-industries.com" className="text-sk-dark-blue hover:text-sk-gold transition-colors">
              ✉️ info@skprecast-industries.com
            </a>
            <span className="text-gray-600">GST: 06AEGFS8126M1ZK</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Follow Us:</span>
            <a href="#" className="text-sk-dark-blue hover:text-sk-gold transition-colors">
              f
            </a>
            <a href="#" className="text-sk-dark-blue hover:text-sk-gold transition-colors">
              🔗
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-sk-dark-blue hover:text-sk-gold transition-colors">
            <span className="text-3xl">🦁</span>
            <span className="hidden sm:inline">SK Precast</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              Home
            </Link>
            <Link to="/about" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              About Us
            </Link>

            {/* Products Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sk-dark-blue hover:text-sk-gold transition-colors font-medium">
                Products
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Menu */}
              <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-4 gap-0 w-[800px] bg-white shadow-2xl rounded-lg p-6 mt-2">
                {products.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-bold text-sk-dark-blue mb-3 text-sm uppercase">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-gray-600 hover:text-sk-gold text-sm transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/gallery" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              Gallery
            </Link>
            <Link to="/blog" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              Blog
            </Link>
            <Link to="/testimonials" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              Testimonials
            </Link>
            <Link to="/catalogue" className="text-sk-dark-blue hover:text-sk-gold transition-colors font-medium gold-underline">
              Catalogue
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-sk-gold text-sk-dark-blue rounded-lg hover:bg-sk-gold/90 transition-all btn-premium font-semibold">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-sk-dark-blue"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-sk-cement">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                About Us
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                  className="flex items-center gap-2 text-sk-dark-blue hover:text-sk-gold font-medium py-2 w-full"
                >
                  Products
                  <ChevronDown size={18} className={openDropdown === "products" ? "rotate-180" : ""} />
                </button>
                {openDropdown === "products" && (
                  <div className="pl-4 space-y-2 bg-gray-50 py-2 rounded">
                    {products.map((group) => (
                      <div key={group.category}>
                        <p className="font-semibold text-sk-dark-blue text-sm mt-2">{group.category}</p>
                        <ul className="space-y-1 text-sm">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="text-gray-600 hover:text-sk-gold"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/gallery" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link to="/blog" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/testimonials" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link to="/catalogue" className="text-sk-dark-blue hover:text-sk-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Catalogue
              </Link>
              <Link to="/contact" className="px-6 py-2 bg-sk-gold text-sk-dark-blue rounded-lg font-semibold text-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
