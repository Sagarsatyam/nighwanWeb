import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact/ContactArea';
import ContactLocationArea from '../components/Contact/ContactLocationArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";
import '../assets/css/contact.css';

const ContactPage = () => {
  const locations = [
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
  ];

  // Replace with the actual Google Maps URL for your location
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.22610004168!2d84.81747022779172!3d25.078980955003505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d31836dba4fd5%3A0x16e2a561ea982154!2sNighwan%20Technology%20Private%20Limited!5e1!3m2!1sen!2sus!4v1744031837622!5m2!1sen!2sus" ;

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Helmet>
        <title>Contact Nighwan Technology - Get in Touch for Digital Solutions</title>
        <meta name="description" content="Contact Nighwan Technology for innovative AI, ML, and digital transformation solutions. Reach out to our experts for consultation and support." />
        <meta name="keywords" content="contact, AI solutions, ML consulting, digital transformation, technology services" />
        <link rel="canonical" href="https://www.nighwantech.com/contact" />
      </Helmet>
      <section style={{ width: '100%', boxSizing: 'border-box' }}>
        <div className="hero-section-content-wrap" style={{ width: '100%' }}>
          <div className="custom-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="heading">CONTACT US</h5>
                <h2 className="section-title fade-in">We are always open to talk</h2>
                <p>We have offices and teams all around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iframe for the location */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <iframe
          src={googleMapsEmbedUrl}
          width="90%" // Adjust width as needed
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Ensure these components don't overflow */}
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        {/* <div className="contact-info-wrapper"> */}
          {/* <Contact
            locations={locations}
            supportEmail={<a href="mailto:contact@nighwantech.com" className="contact-info-email">contact@nighwantech.com</a>}
            phoneNumber={<a href="tel:+918092225777" className="contact-info-phone">+91 8092225777</a>}
          /> */}
        {/* </div> */}
        {/* <ContactLocationArea /> */}
        <ContactArea />
      </div>
    </div>
  );
}

export default ContactPage;