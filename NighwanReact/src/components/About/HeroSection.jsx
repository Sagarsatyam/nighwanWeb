import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const HeroSection = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
      <div style={{ paddingTop: '10px', paddingBottom: '100px' }} className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">NIGHWAN TECHNOLOGY</h5>
              <h1 className="section-title fade-in">
                Revolutionizing the Future with Nighwan Technology
              </h1>
              <p>
                Experience the transformative power of innovation with our seamless and dynamic technology solutions designed to revolutionize the way businesses operate. We integrate AI/ML, Lean Technology, and IT innovation to create intelligent, efficient, and future-ready systems that drive growth and efficiency.
              </p>
            </div>

            <div className="stats-cards-container">
              <div className="stats-card">
                <h2 className="stats-number">150+</h2>
                <h3 className="stats-label">Projects</h3>
              </div>
              <div className="stats-card">
                <h2 className="stats-number">99%</h2>
                <h3 className="stats-label">Client Satisfaction</h3>
              </div>
              <div className="stats-card">
                <h2 className="stats-number">200+</h2>
                <h3 className="stats-label">Our Customers</h3>
              </div>
              <div className="stats-card">
                <h2 className="stats-number">2020</h2>
                <h3 className="stats-label">Since</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;