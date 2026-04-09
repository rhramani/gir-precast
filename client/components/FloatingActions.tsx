import { useState, useEffect, useRef } from "react";
import { MessageCircle, ChevronUp, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsWidgetOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "919992908099";
    const message = "Hello! I found your website https://girprecast.com/ and am interested in your products.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setIsWidgetOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3 sm:gap-4">
      {/* WhatsApp Chat Widget */}
      <AnimatePresence>
        {isWidgetOpen && (
          <motion.div
            ref={widgetRef}
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 mb-2"
          >
            {/* Widget Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Raise your Query</h3>
                  <p className="text-xs text-white/80">Typically replies in a few hours</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWidgetOpen(false)}
                className="hover:bg-black/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Widget Content */}
            <div className="p-5 bg-[#F0F2F5]">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm mb-4 relative max-w-[90%]">
                <p className="text-sm text-gray-700">
                  Hello! How can we help you today? Please feel free to ask any questions about our precast solutions.
                </p>
                <span className="text-[10px] text-gray-400 block mt-1 text-right">09:30 AM</span>
                {/* Message Tail */}
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all active:scale-95 shadow-md group"
              >
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Click Here to Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2 sm:gap-3">
        {/* WhatsApp Toggle Button */}
        <button
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          className={cn(
            "flex items-center gap-2 bg-[#25D366] text-white p-3 sm:px-6 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-[#128C7E] transition-all active:scale-95 group border-2 border-white/20",
            isWidgetOpen && "bg-[#128C7E]"
          )}
        >
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="font-bold tracking-wide hidden sm:inline">WhatsApp Us</span>
        </button>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-gir-orange text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-gir-orange/90 transition-all active:scale-90 border-2 border-white/20"
              aria-label="Scroll to top"
            >
              <ChevronUp size={28} strokeWidth={3} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingActions;
