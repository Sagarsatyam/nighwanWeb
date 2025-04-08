import React from 'react'
import { Helmet } from "react-helmet";
import HeroPortfolio from '../components/Portfolio/HeroPortfolio'
import PortfolioArea from '../components/Portfolio/PortfolioArea'
import ContactArea from '../components/Home/ContactArea'

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Nighwan Technology Solutions</title>
        <meta name="description" content="Explore Nighwan Technology's successful projects and innovative solutions. From AI-driven ERP systems to custom software development, discover how we transform businesses." />
        <meta name="keywords" content="IT portfolio, case studies, software projects, digital transformation, ERP implementations, AI solutions, enterprise software, Nighwan Technology" />
        <meta property="og:title" content="Portfolio & Case Studies | Nighwan Technology Solutions" />
        <meta property="og:description" content="Discover our innovative IT solutions and successful project implementations. See how we help businesses transform with technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nighwantech.com/portfolio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nighwantech.com/portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main>
        <HeroPortfolio />
        <PortfolioArea />
        <ContactArea />
      </main>
    </>
  )
}

export default PortfolioPage