import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Instagram, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    {
      category: "COMPOUND WALL",
      href: "/products/compound-wall",
      items: [
        { name: "Concrete Folding Compound Wall", href: "/product/concrete-folding-compound-wall" },
        { name: "Concrete Precast Single Panel Wall", href: "/product/concrete-precast-single-panel-wall" },
        { name: "Factory Boundary Wall", href: "/product/factory-boundary-wall" },
        { name: "Heavy Readymade Boundary Wall", href: "/product/heavy-readymade-boundary-wall" },
        { name: "Industrial Compound Wall", href: "/product/industrial-compound-wall" },
        // { name: "Panel Build RCC Compound Wall", href: "/product/panel-build-rcc-compound-wall" },
      ],
    },
    {
      category: "BOUNDARY WALL",
      href: "/products/boundary-wall",
      items: [
        { name: "Cement Boundary Wall", href: "/product/cement-boundary-wall" },
        { name: "Concrete Boundary Wall", href: "/product/concrete-boundary-wall" },
        { name: "Concrete Prestressed Boundary Walls", href: "/product/concrete-prestressed-boundary-walls" },
        { name: "Precast Boundary Wall", href: "/product/precast-boundary-wall" },
        { name: "RCC Boundary Wall", href: "/product/rcc-boundary-wall" },
        // { name: "Readymade Boundary Wall", href: "/product/readymade-boundary-wall" },
        // { name: "Solar Plant Boundary Wall", href: "/product/solar-plant-boundary-wall" },
      ],
    },
    {
      category: "CEMENT WALL",
      href: "/products/cement-wall",
      items: [
        { name: "Pre Fabricated Cement Wall", href: "/product/pre-fabricated-cement-wall" },
        { name: "RCC Cement Wall", href: "/product/rcc-cement-wall" },
      ],
    },
    {
      category: "OTHER PRODUCTS",
      href: "/products/other-products",
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
            <a href="mailto:info@girprecast.com" className="text-gir-dark-blue hover:text-gir-orange transition-colors">
              ✉️ info@girprecast.com
            </a>
            {/* <span className="text-gray-600">GST: 06AEGFS8126M1ZK</span> */}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center bg-[#1877F2] rounded-md hover:opacity-90 transition-all shadow-sm group"
              >
                <Facebook size={16} className="text-white fill-white transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/gir.precastpvtltd?igsh=MWswaTk4cDhoZDY3dg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center bg-gradient-to-tr from-[#FFB700] via-[#FF0000] to-[#800080] rounded-md hover:opacity-90 transition-all shadow-sm group"
              >
                <Instagram size={16} className="text-white transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur"
          }`}
      >
        <div className="container mx-auto px-4 py-2 md:py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="GIR PRECAST PVT LTD" className="h-14 md:h-[4.5rem] lg:h-24 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gir-dark-blue hover:text-gir-orange transition-colors font-medium orange-underline">
              Home
            </Link>
            <Link to="/about" className="text-gir-dark-blue hover:text-gir-orange transition-colors font-medium orange-underline">
              About Us
            </Link>

            {/* Products Mega Menu */}
            <div
              className="relative flex items-center h-full"
              ref={dropdownRef}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                className="flex items-center gap-1 text-gir-dark-blue hover:text-gir-orange transition-colors font-medium orange-underline focus:outline-none"
              >
                Products
                <ChevronDown size={18} className={`transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-[95vw] lg:max-w-6xl mt-2 pt-4 cursor-default ${openDropdown === "products" ? "block" : "hidden"}`}>
                <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl p-8 lg:p-12 border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 animate-in fade-in slide-in-from-top-4 duration-300">
                  {products.map((group) => (
                    <div key={group.category} className="space-y-6">
                      <Link
                        to={group.href}
                        className="block font-extrabold text-gir-dark-blue text-xs uppercase tracking-[0.2em] border-b border-gray-100 pb-3 hover:text-gir-orange transition-colors"
                      >
                        {group.category}
                      </Link>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group/item flex items-center gap-0 hover:gap-2 text-gray-500 hover:text-gir-orange text-sm font-medium transition-all duration-300"
                            >
                              <span className="w-0 overflow-hidden group-hover/item:w-3 text-gir-orange transition-all duration-300 font-bold opacity-0 group-hover/item:opacity-100">
                                ›
                              </span>
                              <span className="transform transition-transform duration-300 group-hover/item:translate-x-1">
                                {item.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/catalogue" className="text-gir-dark-blue hover:text-gir-orange transition-colors font-medium orange-underline">
              Catalogue
            </Link>

            <Link to="/blog" className="text-gir-dark-blue hover:text-gir-orange transition-colors font-medium orange-underline">
              Blog
            </Link>

            {/* Search Feature - Dropdown Style */}
            <div className="relative group flex items-center">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-all p-2 rounded-full hover:bg-gray-100 ${isSearchOpen ? "text-gir-orange" : "text-gir-dark-blue hover:text-gir-orange"}`}
                aria-label="Toggle search"
              >
                <Search size={22} strokeWidth={2.5} />
              </button>

              {isSearchOpen && (
                <div className="absolute top-[120%] right-0 z-50 flex items-center bg-[#1a1a1a] rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-top-4 duration-300 border border-gray-800">
                  <div className="flex items-center min-w-[280px]">
                    <input
                      type="text"
                      placeholder="Search text here..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && searchQuery.trim()) {
                          navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                          setIsSearchOpen(false);
                        }
                      }}
                      className="bg-transparent text-white px-4 py-2.5 text-sm outline-none w-full italic font-sans"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        if (searchQuery.trim()) {
                          navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                          setIsSearchOpen(false);
                        }
                      }}
                      className="bg-gir-orange hover:bg-gir-orange/90 text-white px-4 py-2.5 text-xs font-bold uppercase transition-colors whitespace-nowrap"
                    >
                      GO
                    </button>
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="text-gray-500 hover:text-white px-3 transition-colors border-l border-gray-800"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="px-6 py-2 bg-gir-orange text-white rounded-lg hover:bg-gir-orange/90 transition-all btn-premium font-semibold">
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gir-cement overflow-hidden shadow-2xl"
            >
              <div className="container mx-auto px-4 py-8 flex flex-col gap-1">
                <Link to="/" className="text-gir-dark-blue hover:text-gir-orange font-bold py-4 border-b border-gray-50 flex items-center justify-between group">
                  Home
                  <span className="text-gray-300 group-hover:text-gir-orange transition-colors font-bold tracking-widest">›</span>
                </Link>
                <Link to="/about" className="text-gir-dark-blue hover:text-gir-orange font-bold py-4 border-b border-gray-50 flex items-center justify-between group">
                  About Us
                  <span className="text-gray-300 group-hover:text-gir-orange transition-colors font-bold tracking-widest">›</span>
                </Link>

                {/* Mobile Products Dropdown */}
                <div className="py-2 border-b border-gray-50">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                    className="flex items-center justify-between text-gir-dark-blue hover:text-gir-orange font-bold py-4 w-full focus:outline-none"
                  >
                    <span>Products</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === "products" ? "rotate-180 text-gir-orange" : "text-gray-400"}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "products" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-2 space-y-8 bg-gray-50/50 py-8 rounded-2xl mt-2 border border-blue-50/50"
                      >
                        {products.map((group) => (
                          <div key={group.category} className="px-5">
                            <Link
                              to={group.href}
                              className="font-extrabold text-gir-orange text-[11px] uppercase tracking-[0.2em] block mb-5"
                            >
                              {group.category}
                            </Link>
                            <ul className="space-y-4">
                              {group.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="text-gir-dark-blue/80 hover:text-gir-orange block text-sm font-semibold border-l-2 border-transparent hover:border-gir-orange pl-4 transition-all"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/catalogue" className="text-gir-dark-blue hover:text-gir-orange font-bold py-4 border-b border-gray-50 flex items-center justify-between group">
                  Catalogue
                  <span className="text-gray-300 group-hover:text-gir-orange transition-colors font-bold tracking-widest">›</span>
                </Link>
                <Link to="/blog" className="text-gir-dark-blue hover:text-gir-orange font-bold py-4 border-b border-gray-50 flex items-center justify-between group">
                  Blog
                  <span className="text-gray-300 group-hover:text-gir-orange transition-colors font-bold tracking-widest">›</span>
                </Link>

                {/* Mobile Search Input */}
                <div className="mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Find precast products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && searchQuery.trim()) {
                          navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        }
                      }}
                      className="w-full bg-gray-100 border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-gir-orange/10 transition-all font-medium pr-16 shadow-inner"
                    />
                    <button
                      onClick={() => {
                        if (searchQuery.trim()) {
                          navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        }
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-gir-orange text-white p-3 rounded-xl shadow-lg shadow-gir-orange/30 active:scale-95 transition-all"
                    >
                      <Search size={22} />
                    </button>
                  </div>
                </div>

                <Link to="/contact" className="mt-10 px-8 py-5 bg-gir-dark-blue text-white rounded-2xl font-bold text-center shadow-xl shadow-gir-dark-blue/20 active:scale-[0.98] transition-all text-lg tracking-wide uppercase">
                  Contact Us
                </Link>

                <div className="flex items-center justify-center gap-10 mt-10 pt-10 border-t border-gray-100">
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"><Facebook size={22} /></a>
                  <a href="https://www.instagram.com/gir.precastpvtltd?igsh=MWswaTk4cDhoZDY3dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all shadow-sm"><Instagram size={22} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

