import React from 'react';
import { Helmet } from "react-helmet";
import CompanyServiceArea from '../components/Career/CompanyServiceArea';
import CareerArea from '../components/Career/CareerArea';
import AboutServiceArea from "../components/About/AboutServiceArea";
import ContactArea from '../components/Home/ContactArea';

const CareerPage = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Team | Careers at Nighwan Technology</title>
        <meta name="description" content="Build your career at Nighwan Technology. Explore exciting opportunities in software development, AI, cloud computing, and digital transformation. Join a team of innovators shaping the future of technology." />
        <meta name="keywords" content="tech careers, software jobs, IT careers, AI jobs, cloud computing jobs, digital transformation careers, technology company jobs, Nighwan Technology careers" />
        <meta property="og:title" content="Join Our Team | Careers at Nighwan Technology" />
        <meta property="og:description" content="Join a team of innovators at Nighwan Technology. Explore exciting career opportunities in software development, AI, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nighwantech.com/careers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nighwantech.com/careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://nighwantech.com/images/career-banner.jpg" />
        <meta name="application-name" content="Nighwan Careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Team | Careers at Nighwan Technology" />
        <meta name="twitter:description" content="Build your career at Nighwan Technology. Join a team of innovators shaping the future of technology." />
      </Helmet>

      <main className="career-page">
        <section className="company-culture">
          <CompanyServiceArea />
        </section>
        
        <section className="job-openings">
          <CareerArea />
        </section>

        <section className="why-join-us">
          <AboutServiceArea />
        </section>

        <section className="get-in-touch">
          <ContactArea />
        </section>
      </main>
    </>
  )
}

export default CareerPage