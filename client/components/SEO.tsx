import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  keywords?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "GIR Precast - Leading manufacturer of high-quality precast concrete products including compound walls, benches, and industrial solutions.",
  canonical,
  ogType = "website",
  ogImage = "/images/og-image.webp", // Default OG image path
  twitterHandle = "@girprecast",
  keywords = "precast, RCC, compound wall, concrete, manufacturer, Palwal, Haryana",
  author = "GIR PRECAST PVT LTD",
}) => {
  const siteName = "GIR Precast";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
    </Helmet>
  );
};

export default SEO;
