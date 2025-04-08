import React from 'react';
import bgShape  from '../../assets/imgs/bg-shape-7.svg';

const ContactLocationArea = () => {
  return (
    <section className="contact-location-area">
      <img
        className="animation-slide-left bg-shape"
        src={bgShape}   
        alt="Shape"
      />
      <div className="custom-container">
        <div className="custom-row justify-content-between align-items-center">
          {/* Left Content */}
          <div className="contact-location-left-content">
            <div className="contact-location-left-body">
              <h5 className="heading">Locations</h5>
              <h1 className="section-title">
                Visit our Office <br />
                around the <br />
                India
              </h1>
              <p>
                Our location is strategically situated at the heart of City,
                making it an ideal destination for businesses and visitors alike.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="right">
            <div className="contact-locations-list">
              {/* Hardcoded Location Boxes */}
              <div className="contact-location-box">
                <div className="number">#1</div>
                <div className="content">
                  <h3>Gulmohar Park, Hyderabad,</h3>
                  <p>TN, 500019, IN</p>
                </div>
              </div>
              <div className="contact-location-box">
                <div className="number">#2</div>
                <div className="content">
                  <h3>NIGHWAN, KURTHA, ARWAL,</h3>
                  <p> BIHAR 804421, IN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactLocationArea;








// import React from 'react';
// import { Link } from 'react-router-dom';
// import bgShape from '../../assets/imgs/bg-shape-7.svg';

// const ContactLocationArea = () => {
//   return (
//     <section className="contact-location-area">
//       <img className="bg-shape" src={bgShape} alt="Background Shape" />
//       <div className="custom-container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="contact-info">
//               <h2>Get in Touch</h2>
//               <p>
//                 Have questions about our services? Check out our{' '}
//                 <Link to="/faq" className="text-primary">FAQ page</Link> or{' '}
//                 <Link to="/services" className="text-primary">services overview</Link>.
//               </p>
              
//               <div className="contact-methods">
//                 <div className="method-item">
//                   <h3>Support Resources</h3>
//                   <ul>
//                     <li>
//                       <a href="https://support.nighwantech.com" target="_blank" rel="noopener noreferrer">
//                         Knowledge Base
//                       </a>
//                     </li>
//                     <li>
//                       <Link to="/documentation">Technical Documentation</Link>
//                     </li>
//                     <li>
//                       <a href="https://status.nighwantech.com" target="_blank" rel="noopener noreferrer">
//                         System Status
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
                
//                 <div className="method-item">
//                   <h3>Business Hours</h3>
//                   <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
//                   <p>
//                     View our{' '}
//                     <a href="https://www.timeanddate.com/worldclock/india" target="_blank" rel="noopener noreferrer">
//                       timezone
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-lg-6">
//             <div className="location-info">
//               <h2>Our Locations</h2>
//               <div className="office-locations">
//                 <div className="location-card">
//                   <h3>Bangalore Office</h3>
//                   <p>BTM Layout 2nd Stage</p>
//                   <p>Bangalore, Karnataka</p>
//                   <div className="location-links">
//                     <a href="https://goo.gl/maps/xxxxx" target="_blank" rel="noopener noreferrer">
//                       View on Map
//                     </a>
//                     <a href="tel:+918294767697">+91 8294767697</a>
//                   </div>
//                 </div>

//                 <div className="location-card">
//                   <h3>Bihar Office</h3>
//                   <p>NIGHWAN, KURTHA, ARWAL</p>
//                   <p>BIHAR 804421, IN</p>
//                   <div className="location-links">
//                     <a href="https://goo.gl/maps/yyyyy" target="_blank" rel="noopener noreferrer">
//                       View on Map
//                     </a>
//                     <a href="mailto:support@nighwantech.com">support@nighwantech.com</a>
//                   </div>
//                 </div>

//                 <div className="location-card">
//                   <h3>Delhi NCR Office</h3>
//                   <p>Sector 63, Noida</p>
//                   <p>Delhi NCR</p>
//                   <div className="location-links">
//                     <a href="https://goo.gl/maps/zzzzz" target="_blank" rel="noopener noreferrer">
//                       View on Map
//                     </a>
//                     <a href="tel:+918294767697">+91 8294767697</a>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="industry-resources">
//                 <h3>Industry Resources</h3>
//                 <ul>
//                   <li>
//                     <a href="https://www.nasscom.in" target="_blank" rel="noopener noreferrer">
//                       NASSCOM
//                     </a>
//                     {' '}- Indian IT Industry Association
//                   </li>
//                   <li>
//                     <a href="https://www.meity.gov.in" target="_blank" rel="noopener noreferrer">
//                       MeitY
//                     </a>
//                     {' '}- Ministry of Electronics & IT
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactLocationArea;