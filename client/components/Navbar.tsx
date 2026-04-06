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
      category: "COMPOUND WALL",
      items: [
        { name: "Concrete Folding Compound Wall", href: "/product/concrete-folding-compound-wall" },
        { name: "Concrete Precast Single Panel Wall", href: "/product/concrete-precast-single-panel-wall" },
        { name: "Factory Boundary Wall", href: "/product/factory-boundary-wall" },
        { name: "Heavy Readymade Boundary Wall", href: "/product/heavy-readymade-boundary-wall" },
        { name: "Industrial Compound Wall", href: "/product/industrial-compound-wall" },
      ],
    },
    {
      category: "BOUNDARY WALL",
      items: [
        { name: "Cement Boundary Wall", href: "/product/cement-boundary-wall" },
        { name: "Concrete Boundary Wall", href: "/product/concrete-boundary-wall" },
        { name: "Concrete Prestressed Boundary Walls", href: "/product/concrete-prestressed-boundary-walls" },
        { name: "Precast Boundary Wall", href: "/product/precast-boundary-wall" },
        { name: "RCC Boundary Wall", href: "/product/rcc-boundary-wall" },
      ],
    },
    {
      category: "CEMENT WALL",
      items: [
        { name: "Pre Fabricated Cement Wall", href: "/product/pre-fabricated-cement-wall" },
        { name: "RCC Cement Wall", href: "/product/rcc-cement-wall" },
      ],
    },
    {
      category: "OTHER PRODUCTS",
      items: [
        { name: "Precast Wall", href: "/product/precast-wall" },
        { name: "RCC Folding Wall", href: "/product/rcc-folding-wall" },
        { name: "RCC Wall", href: "/product/rcc-wall" },
        { name: "Readymade Walls", href: "/product/readymade-walls" },
      ],
    },
  ];

  return (
    <>
      {/* Top bar with contact info */}
      <div className={`hidden md:block w-full border-b border-gir-cement transition-colors duration-300 ${isScrolled ? "bg-white" : "bg-white"}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@girprecast-industries.com" className="text-gir-dark-blue hover:text-gir-gold transition-colors">
              ✉️ info@girprecast-industries.com
            </a>
            <span className="text-gray-600">GST: 06AEGFS8126M1ZK</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Follow Us:</span>
            <a href="#" className="text-gir-dark-blue hover:text-gir-gold transition-colors">
              f
            </a>
            <a href="#" className="text-gir-dark-blue hover:text-gir-gold transition-colors">
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
          <Link to="/" className="flex items-center">
            <img src="/header_logo.webp" alt="GIR Precast Industries" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              Home
            </Link>
            <Link to="/about" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              About Us
            </Link>

            {/* Products Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gir-dark-blue hover:text-gir-gold transition-colors font-medium">
                Products
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Menu */}
              <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-4 gap-0 w-[800px] bg-white shadow-2xl rounded-lg p-6 mt-2">
                {products.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-bold text-gir-dark-blue mb-3 text-sm uppercase">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-gray-600 hover:text-gir-gold text-sm transition-colors"
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

            <Link to="/gallery" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              Gallery
            </Link>
            <Link to="/blog" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              Blog
            </Link>
            <Link to="/testimonials" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              Testimonials
            </Link>
            <Link to="/catalogue" className="text-gir-dark-blue hover:text-gir-gold transition-colors font-medium gold-underline">
              Catalogue
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-gir-gold text-gir-dark-blue rounded-lg hover:bg-gir-gold/90 transition-all btn-premium font-semibold">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gir-dark-blue"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gir-cement">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                About Us
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                  className="flex items-center gap-2 text-gir-dark-blue hover:text-gir-gold font-medium py-2 w-full"
                >
                  Products
                  <ChevronDown size={18} className={openDropdown === "products" ? "rotate-180" : ""} />
                </button>
                {openDropdown === "products" && (
                  <div className="pl-4 space-y-2 bg-gray-50 py-2 rounded">
                    {products.map((group) => (
                      <div key={group.category}>
                        <p className="font-semibold text-gir-dark-blue text-sm mt-2">{group.category}</p>
                        <ul className="space-y-1 text-sm">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="text-gray-600 hover:text-gir-gold"
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

              <Link to="/gallery" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link to="/blog" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/testimonials" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link to="/catalogue" className="text-gir-dark-blue hover:text-gir-gold font-medium py-2" onClick={() => setIsOpen(false)}>
                Catalogue
              </Link>
              <Link to="/contact" className="px-6 py-2 bg-gir-gold text-gir-dark-blue rounded-lg font-semibold text-center" onClick={() => setIsOpen(false)}>
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
