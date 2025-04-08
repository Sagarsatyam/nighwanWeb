import React from 'react'
import HeroSection from '../components/BusinessConsulting/HeroSection'
import ServiceArea from '../components/BusinessConsulting/ServiceArea'
import AboutArea from '../components/BusinessConsulting/AboutArea'
import FeatureArea from '../components/BusinessConsulting/FeatureArea'
import TestimonialArea from '../components/Home/TestimonialArea'
import ContactArea from '../components/Home/ContactArea'
import { Helmet } from "react-helmet";

const BusinessConsulting = () => {
  return (
    <>
    <Helmet>
          <title>Lean Consultancy Services | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Optimize your business efficiency with Nighwan Technology's Lean Consultancy services, helping organizations implement lean manufacturing and reduce waste." />  <meta name="keywords" content="lean manufacturing, business process optimization, lean consultancy, process improvement, waste reduction, manufacturing efficiency, lean technology" />
       
       
                <meta property="og:title" content="Lean Consultancy Services | Nighwan Technology Pvt. Ltd." />
                <meta property="og:description" content="Optimize your business efficiency with Nighwan Technology's Lean Consultancy services, helping organizations implement lean manufacturing and reduce waste." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nighwantech.com/lean" />
                <link rel="canonical" href="https://nighwantech.com/lean" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
    <HeroSection/>
    {/* <ClientArea/> */}
    <ServiceArea/>
    <AboutArea/>
    <FeatureArea/>

    <TestimonialArea/>
    <ContactArea/>
    </>
  )
}

export default BusinessConsulting