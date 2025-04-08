"use client"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Desktop Version */}
        <div className="footer-desktop">
          <div className="footer-container">
            <div className="footer-main-section">
              <div className="footer-links-section">
                <div className="footer-links-column">
                  <h3 className="footer-heading">Services</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/lean" className="footer-link">
                        Lean Consultancy
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details/ERP" className="footer-link">
                        ERP Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details/AI" className="footer-link">
                        AI/ML Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details/Data" className="footer-link">
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details/Web" className="footer-link">
                        Web / Mobile
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details/Branding" className="footer-link">
                        Branding
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-column">
                  <h3 className="footer-heading">Company</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/lean" className="footer-link">
                        Lean Consultancy
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-roots" className="footer-link">
                        Our Roots
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="footer-link">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" className="footer-link">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="footer-link">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-column">
                  <h3 className="footer-heading">Product</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/product-detail/iot" className="footer-link">
                        IoT - Enabled Predictive Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-detail/ai" className="footer-link">
                        AI-Powered Sales Forecasting
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-detail/tms" className="footer-link">
                        Transport Management System
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-detail/b2b" className="footer-link">
                        B2B E-Commerce Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-detail/erp" className="footer-link">
                        ERP System
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-detail/hrms" className="footer-link">
                        HRMS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <h4 className="contact-heading">Phone</h4>
                  <p className="contact-text">
                    <Link to="tel:+918985025794" className="contact-link" target="_blank" rel="noopener noreferrer">
                      +91 8985025794
                    </Link>{" "}
                    <br />
                    <Link to="tel:+918092225777" className="contact-link" target="_blank" rel="noopener noreferrer">
                      +91 8092225777
                    </Link>
                  </p>
                </div>
                <div className="footer-contact-item">
                  <h4 className="contact-heading">Mail</h4>
                  <p className="contact-text">
                    <Link
                      to="mailto:hr@nighwantech.com"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hr@nighwantech.com
                    </Link>{" "}

                    <Link
                      to="mailto:info@nighwantech.com"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@nighwantech.com
                    </Link>{" "}
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="footer-mobile">
          <div className="footer-container">
            <div className="footer-mobile-group">
              <div className="footer-links-column">
                <h3 className="footer-heading">Services</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/lean" className="footer-link">
                      Lean Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details/ERP" className="footer-link">
                      ERP Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details/AI" className="footer-link">
                      AI/ML Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details/Data" className="footer-link">
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details/Web" className="footer-link">
                      Web / Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details/Branding" className="footer-link">
                      Branding
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/lean" className="footer-link">
                      Lean Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-roots" className="footer-link">
                      Our Roots
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" className="footer-link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="footer-link">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" className="footer-link">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="footer-link">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-mobile-group">
              <div className="footer-links-column full-width">
                <h3 className="footer-heading">Product</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/product-detail/iot" className="footer-link">
                      IoT - Enabled Predictive Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-detail/ai" className="footer-link">
                      AI-Powered Sales Forecasting
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-detail/tms" className="footer-link">
                      Transport Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-detail/b2b" className="footer-link">
                      B2B E-Commerce Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-detail/erp" className="footer-link">
                      ERP System
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-detail/hrms" className="footer-link">
                      HRMS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-mobile-divider"></div>
              <div className="footer-contact-mobile">
                <div className="footer-contact-item">
                  <h4 className="contact-heading">Phone</h4>
                  <p className="contact-text">
                    <Link to="tel:+918985025794" className="contact-link" target="_blank" rel="noopener noreferrer">
                      +91 8985025794
                    </Link>{" "}
                    <br />
                    <Link to="tel:+918092225777" className="contact-link" target="_blank" rel="noopener noreferrer">
                      +91 8092225777
                    </Link>
                  </p>
                </div>
                <div className="footer-contact-item">
                  <h4 className="contact-heading">Mail</h4>
                  <p className="contact-text">
                    <Link
                      to="mailto:hr@nighwantech.com"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hr@nighwantech.com
                    </Link>{" "}
                    <br />
                    <Link
                      to="mailto:info@nighwantech.com"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@nighwantech.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="copyright-section">
          <div className="footer-container">
            <div className="copyright-content">
              <ul className="social-links">
                <li className="social-item">
                  <a 
                    className="social-link"
                    href="https://www.facebook.com/Nighwantech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={18} aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a 
                    className="social-link"
                    href="https://x.com/nighwantech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X (formerly Twitter)"
                  >
                    <Twitter size={18} aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a 
                    className="social-link"
                    href="https://www.instagram.com/nighwantech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={18} aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a 
                    className="social-link"
                    href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a 
                    className="social-link"
                    href="https://www.youtube.com/@Nighwantech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube size={18} aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <p className="copyright-text">
                &copy; {new Date().getFullYear()} All rights reserved by{" "}
                <Link
                  to="https://nighwantech.com/"
                  className="copyright-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nighwan Technology
                </Link>
              </p>
              <p className="legal-links">
                <Link to="/terms-and-conditions" className="legal-link" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </Link>{" "}
                | {" "}
                <Link to="/privacy-policy" className="legal-link" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All CSS in one place */}
      <style jsx>{`
        /* Base Styles */
        .footer {
          width: 100%;
          background-color: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        .footer-content {
          padding-top: 20px;
        }

        .footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Headings */
        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: orange;
        }

        .contact-heading {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          color: orange;
        }

        /* Links */
        .footer-link, .contact-link, .copyright-link, .legal-link {
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover, .contact-link:hover, .copyright-link:hover, .legal-link:hover {
          color: orange;
          transform: translateX(3px);
        }

        .social-link {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        /* Lists */
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 8px;
        }

        /* Desktop Layout */
        .footer-desktop {
          display: block;
        }

        .footer-main-section {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 20px;
        }

        .footer-links-section {
          display: flex;
          gap: 30px;
          flex: 3;
        }

        .footer-links-column {
          flex: 1;
          min-width: 140px;
        }

        .footer-divider {
          width: 1px;
          background-color: #333;
          margin: 0 15px;
        }

        .footer-contact {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-contact-item {
          margin-bottom: 10px;
        }

        .contact-text {
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile Layout */
        .footer-mobile {
          display: none;
        }

        .footer-mobile-divider {
          height: 1px;
          background-color: #333;
          width: 100%;
          margin: 15px 0;
        }

        /* Copyright Section */
        .copyright-section {
          padding: 15px 0;
          border-top: 1px solid #333;
          margin-top: 10px;
        }

        .copyright-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .social-links {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 10px;
        }

        .social-item {
          display: flex;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #222;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: orange;
          transform: translateY(-3px);
        }

        .copyright-text, .legal-links {
          margin: 0;
          font-size: 14px;
          color: #aaa;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .footer-main-section {
            flex-direction: column;
            gap: 20px;
          }
          
          .footer-links-section {
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .footer-divider {
            width: 100%;
            height: 1px;
            margin: 10px 0;
          }
          
          .footer-contact {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .footer-contact-item {
            flex: 1;
            min-width: 200px;
          }
          
          .copyright-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .footer-desktop {
            display: none;
          }
          
          .footer-mobile {
            display: block;
          }
          
          .footer-mobile-group {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
          }
          
          .footer-links-column {
            flex: 0 0 calc(50% - 10px);
          }
          
          .full-width {
            flex: 0 0 100%;
          }
          
          .footer-contact-mobile {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
          }
          
          .footer-contact-mobile .footer-contact-item {
            flex: 0 0 calc(50% - 10px);
          }
          
          .copyright-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
          }
        }

        @media (max-width: 576px) {
          .footer-mobile-group {
            flex-direction: column;
          }
          
          .footer-links-column {
            flex: 0 0 100%;
          }
          
          .footer-contact-mobile {
            flex-direction: column;
          }
          
          .footer-contact-mobile .footer-contact-item {
            flex: 0 0 100%;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
