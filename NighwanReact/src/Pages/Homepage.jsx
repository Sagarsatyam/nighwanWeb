import React from 'react'
import MetaTags from "../components/MetaTags";
import HeroEmpowerment from "../components/Home/HeroEmpowerment";  
import ClientArea from "../components/Home/ClientArea";
import HowWeDo from "../components/Home/HowWeDo";  
import CaseStudioArea from "../components/Home/CaseStudioArea";  
import AboutArea from '../components/Home/AboutArea';
import TestimonialArea from '../components/Home/TestimonialArea';
import ProjectArea from '../components/Home/ProjectArea';
import NewsArea from '../components/Home/NewsArea';
import FeatureArea from '../components/Home/FeatureArea'; 
import ContactArea from '../components/Home/ContactArea';   
import Service4Area from '../components/About/Service4Area';

const Homepage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nighwan Technology",
    "url": "https://nighwantech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nighwantech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Nighwan Technology",
      "url": "https://nighwantech.com",
      "logo": "https://nighwantech.com/logo.png",
      "description": "Leading IT solutions and software development company specializing in digital transformation and innovative technology solutions.",
      "sameAs": [
        "https://www.linkedin.com/company/nighwan-technology",
        "https://twitter.com/nighwantech",
        "https://facebook.com/nighwantech"
      ]
    }
  };

  return (
    <>
      <MetaTags 
        title="Nighwan Technology - Leading IT Solutions & Software Development Company"
        description="Transform your business with Nighwan Technology's expert IT solutions, custom software development, and digital consulting services. Get innovative solutions tailored to your needs."
        keywords="IT solutions, software development, digital transformation, technology consulting, custom applications, enterprise software, Nighwan Technology"
        canonicalUrl="https://nighwantech.com"
        ogImage="https://nighwantech.com/images/homepage-og.jpg"
        type="website"
        schema={schema}
      />
      <main>
        <HeroEmpowerment />
        <ClientArea />
        <Service4Area />
        <HowWeDo />
        <CaseStudioArea />
        <AboutArea />
        <TestimonialArea />
        <ProjectArea />
        <NewsArea />
        {/* <FeatureArea /> */}
        <ContactArea />
      </main>
    </>
  );
};

export default Homepage;