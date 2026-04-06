import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gir-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src="/header_logo.webp" alt="GIR Precast Industries" className="h-24 w-auto" />
            </Link>
            <p className="text-gray-300 mb-4">
              Premium precast wall solutions for modern construction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gir-gold" />
                <span className="text-sm">Palwal, Haryana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gir-gold" />
                <span className="text-sm">+91-8238902687</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gir-gold" />
                <span className="text-sm">info@girprecast-industries.com</span>
              </div>
            </div>
          </div>

          {/* General Links */}
          <div>
            <h4 className="text-lg font-bold text-gir-gold mb-4">General Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gir-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-gir-gold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/compound-wall" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Compound Wall
                </Link>
              </li>
              <li>
                <Link to="/products/boundary-wall" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Boundary Wall
                </Link>
              </li>
              <li>
                <Link to="/products/cement-wall" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Cement Wall
                </Link>
              </li>
              <li>
                <Link to="/products/precast-wall" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Precast Wall
                </Link>
              </li>
              <li>
                <Link to="/products/rcc-wall" className="text-gray-300 hover:text-gir-gold transition-colors">
                  RCC Wall
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gir-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gir-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gir-gold transition-colors">
                  Request Callback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p>&copy; 2024 GIR Precast Industries. All Rights Reserved.</p>
            </div>
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>Developed & Managed by <span className="text-gir-gold">Weblink.In Pvt. Ltd.</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
