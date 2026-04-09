import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import WallManufacturingUnit from "./pages/WallManufacturingUnit";
import Sitemap from "./pages/Sitemap";
import Search from "./pages/Search";
import AllProducts from "./pages/AllProducts";
import CurrentJobs from "./pages/CurrentJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/:slug.htm" element={<ProductDetail />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/blog/:slug.htm" element={<BlogPostDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/wall-manufacturing-unit" element={<WallManufacturingUnit />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/current-jobs" element={<CurrentJobs />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

