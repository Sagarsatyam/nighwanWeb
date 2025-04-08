import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaTags = ({ 
  title = "Digital Transformation & Software Development | Nighwan Technology",
  description = "Transform your business with AI-driven digital solutions, custom software development, and expert IT consulting.",
  keywords = "digital transformation, software development, IT consulting, AI solutions, web development, enterprise software, custom applications, technology consulting, digital innovation",
  canonicalUrl = "https://nighwantech.com",
  ogImage = "https://nighwantech.com/og-image.jpg",
  ogType = "website",
  articlePublishTime,
  articleModifiedTime,
  articleSection,
  articleTags,
  pageType = "website"
}) => {
  // Generate Schema.org data based on page type
  const getSchemaData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nighwan Technology",
      "url": canonicalUrl,
      "logo": `${canonicalUrl}/nighlogo.svg`,
      "description": description,
      "sameAs": [
        "https://www.linkedin.com/company/nighwan-technology",
        "https://twitter.com/nighwantech",
        "https://www.facebook.com/nighwantech"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "areaServed": ["US", "IN", "GB"],
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your Postal Code",
        "addressCountry": "Your Country"
      }
    };

    if (pageType === "article" && articlePublishTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": ogImage,
        "author": {
          "@type": "Organization",
          "name": "Nighwan Technology"
        },
        "publisher": baseSchema,
        "datePublished": articlePublishTime,
        "dateModified": articleModifiedTime || articlePublishTime,
        "articleSection": articleSection,
        "keywords": articleTags || keywords,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      };
    }

    return baseSchema;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType === "article" ? "article" : ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Nighwan Technology" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific Open Graph tags */}
      {pageType === "article" && articlePublishTime && (
        <>
          <meta property="article:published_time" content={articlePublishTime} />
          {articleModifiedTime && (
            <meta property="article:modified_time" content={articleModifiedTime} />
          )}
          <meta property="article:section" content={articleSection} />
          {articleTags?.split(',').map(tag => (
            <meta key={tag} property="article:tag" content={tag.trim()} />
          ))}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nighwantech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* External Resource Links */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(getSchemaData())}
      </script>
    </Helmet>
  );
};

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  pageType: PropTypes.oneOf(['website', 'article']),
  articlePublishTime: PropTypes.string,
  articleModifiedTime: PropTypes.string,
  articleSection: PropTypes.string,
  articleTags: PropTypes.string
};

export default MetaTags;