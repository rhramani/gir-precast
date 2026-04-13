import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.girprecast.com';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  keywords?: string;
  author?: string;
  noIndex?: boolean;
  publishedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "GIR Precast Industries - Leading manufacturer of high-quality precast RCC compound walls, boundary walls, and precast concrete solutions in Palwal, Haryana, India.",
  canonical,
  ogType = "website",
  ogImage = `${BASE_URL}/images/og-image.webp`,
  twitterHandle = "@girprecast",
  keywords = "precast compound wall, RCC compound wall, readymade compound wall, boundary wall manufacturer, precast wall Palwal, GIR Precast, Haryana precast manufacturer, RCC boundary wall, cement compound wall",
  author = "GIR PRECAST PVT LTD",
  noIndex = false,
  publishedTime,
}) => {
  const siteName = "GIR Precast Industries";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Precast Compound Wall Manufacturer Palwal`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${BASE_URL}${window.location.pathname}` : BASE_URL);
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
    </Helmet>
  );
};

export default SEO;
