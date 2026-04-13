import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-D1C82E3Z9X"; // Your GA4 Measurement ID

const GoogleAnalytics = () => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Initialize GA4 only once
      ReactGA.initialize(GA_MEASUREMENT_ID);
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (!initialized.current) return;
    // Track page views on every route change
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
