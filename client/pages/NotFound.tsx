import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-gir-dark-blue/5 to-gir-orange/5">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-8xl font-bold text-gir-dark-blue mb-4">404</h1>
        <p className="text-3xl font-bold text-gir-dark-blue mb-2">Page Not Found</p>
        <p className="text-lg text-gir-dark-gray mb-8">
          The page you're looking for doesn't exist or has been moved. Let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gir-orange text-white rounded-lg font-bold hover:bg-gir-orange/90 transition-all btn-premium"
          >
            Return to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gir-dark-blue text-white rounded-lg font-bold hover:bg-gir-dark-blue/90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


