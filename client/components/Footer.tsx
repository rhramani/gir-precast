import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gir-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-gir-orange mb-6">GIR PRECAST PVT LTD</h4>
            <p className="text-gray-300 mb-4">
              Premium precast wall solutions for modern construction.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-gir-orange mt-1 flex-shrink-0" />
                <span className="text-sm">Khasra No. 234, Kila No.12/1. Sec.12, Opp. Piyush City Hathin Road, Palwal-121102, Haryana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gir-orange" />
                <span className="text-sm">+91-9992908099</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <span className="text-gir-orange font-bold text-xs">GST NO :</span>
                <span className="text-sm">06AEGFS8126M1ZK</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gir-orange" />
                <span className="text-sm">info@girprecast.com</span>
              </div>
            </div>
          </div>

          {/* General Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold text-gir-orange mb-4">General Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/blog" className="text-gray-300 hover:text-gir-orange transition-colors">
                Blog
              </Link>
              <Link to="/" className="text-gray-300 hover:text-gir-orange transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-gir-orange transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-gir-orange transition-colors">
                Products
              </Link>
              <Link to="/gallery" className="text-gray-300 hover:text-gir-orange transition-colors">
                Gallery
              </Link>
              <Link to="/catalogue" className="text-gray-300 hover:text-gir-orange transition-colors">
                Catalogues
              </Link>
              <Link to="/wall-manufacturing-unit" className="text-gray-300 hover:text-gir-orange transition-colors">
                Wall Manufacturing Unit
              </Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-gir-orange transition-colors">
                Testimonials
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-gir-orange transition-colors">
                Site Map
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-gir-orange transition-colors">
                Contact Us
              </Link>
              {/* <Link to="/current-jobs" className="text-gray-300 hover:text-gir-orange transition-colors">
                Current Jobs
              </Link> */}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-gir-orange mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/compound-wall" className="text-gray-300 hover:text-gir-orange transition-colors">
                  Compound Wall
                </Link>
              </li>
              <li>
                <Link to="/products/boundary-wall" className="text-gray-300 hover:text-gir-orange transition-colors">
                  Boundary Wall
                </Link>
              </li>
              <li>
                <Link to="/products/cement-wall" className="text-gray-300 hover:text-gir-orange transition-colors">
                  Cement Wall
                </Link>
              </li>
              <li>
                <Link to="/products/other-products" className="text-gray-300 hover:text-gir-orange transition-colors">
                  Other Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-gir-orange mb-4">Follow Us :</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-md hover:bg-[#1877F2]/90 transition-all shadow-md group"
              >
                <Facebook size={24} className="text-white fill-white transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/gir.precastpvtltd?igsh=MWswaTk4cDhoZDY3dg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-[#FFB700] via-[#FF0000] to-[#800080] rounded-md hover:opacity-90 transition-all shadow-md group"
              >
                <Instagram size={24} className="text-white transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p>&copy; 2026 GIR PRECAST PVT LTD. All Rights Reserved.</p>
            </div>
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>Developed & Managed By <a href="https://kurminfotech.in" target="_blank" rel="noopener noreferrer" className="text-gir-orange font-bold hover:underline">Kurm Infotech</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

