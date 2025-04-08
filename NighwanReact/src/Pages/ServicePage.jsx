import React from 'react'
import { Helmet } from "react-helmet";
import HeroService from '../components/Service/Hero';
import Service4Area from '../components/About/Service4Area';
import CaseStudies from '../components/Home/CaseStudioArea';
import AboutArea from '../components/Service/About';
import AboutServiceArea from "../components/About/AboutServiceArea";
import ContactArea from '../components/Home/ContactArea';

function ServicePage() {
  return (
    <>
      <Helmet>
        <title>IT Services & Solutions | Nighwan Technology</title>
        <meta name="description" content="Transform your business with our comprehensive IT services: ERP development, AI analytics, cloud computing, IT consulting, and lean manufacturing solutions. Get expert solutions tailored to your needs." />
        <meta name="keywords" content="IT services, AI analytics, ERP solutions, software development, cloud computing, digital transformation, enterprise solutions, lean manufacturing, Nighwan Technology" />
        <meta property="og:title" content="IT Services & Solutions | Nighwan Technology" />
        <meta property="og:description" content="Comprehensive IT services including ERP development, AI analytics, cloud computing, and lean manufacturing solutions. Transform your business with Nighwan Technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nighwantech.com/services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nighwantech.com/services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main>
        <HeroService/>
        <Service4Area/>
        <CaseStudies/>
        <AboutArea/>
        <AboutServiceArea/>
        <ContactArea/>
      </main>
    </>
  )
}

export default ServicePage;