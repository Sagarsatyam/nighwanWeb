import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/About/HeroSection";
import CompanyServiceArea from "../components/About/CompanyServiceArea";
import AboutServiceArea from "../components/About/AboutServiceArea";
import TestimonialArea from "../components/Home/TestimonialArea";
import ContactArea from "../components/Home/ContactArea";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Nighwan Technology | Leading Software & IT Solutions Provider</title>
                <meta name="description" content="Learn about Nighwan Technology's journey in revolutionizing industries through AI, lean manufacturing, and digital transformation solutions. Discover our mission, values, and expert team." />
                <meta name="keywords" content="Nighwan Technology, IT solutions provider, software development company, digital transformation, AI solutions, enterprise technology, tech consulting" />
                <meta property="og:title" content="About Nighwan Technology | Leading Software & IT Solutions Provider" />
                <meta property="og:description" content="Discover how Nighwan Technology is revolutionizing industries through innovative IT solutions and digital transformation." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nighwantech.com/our-roots" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://nighwantech.com/our-roots" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <main>
                <HeroSection />
                <CompanyServiceArea />
                <AboutServiceArea/>
                <TestimonialArea/>
                <ContactArea/>
            </main>
        </>
    );
};

export default AboutPage;