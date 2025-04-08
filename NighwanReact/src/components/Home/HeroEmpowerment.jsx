import React from 'react';
import icon1 from '../../assets/imgs/icon1.svg';
import smallImg1 from '../../assets/imgs/small-img-1.png';
import smallImg2 from '../../assets/imgs/small-img-2.png';
import smallImg3 from '../../assets/imgs/small-img-3.png';
import smallImg4 from '../../assets/imgs/small-img-4.png';
import icon2 from '../../assets/imgs/icon2.svg';
import NighwanTechHome from '../../assets/imgs/NighwanTechHome.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import y 
import { Link } from 'react-router-dom';

const HeroEmpowerment = () => {
  return (
    <section className="hero-empowerment-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="hero-empowerment-left-content">
            <h5 className="heading">EMPOWERMENT</h5>

            <h1 className="section-title fade-in">Welcome to Nighwan Technology
            Innovative AI & ML Solutions for a Smarter Tomorrow.</h1>
            <p>We integrate Artificial Intelligence, Machine Learning, and Lean Manufacturing expertise to optimize operations, reduce costs, and drive growth for businesses across industries.</p>
            <div className="btns-group d-flex">
              <Link to="/service" className="theme-btn">Explore More</Link>
              <Link to="/lean" className="theme-btn2">
                Get in Touch <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>

          <div className="hero-empowerment-right-content">
            <div className="top-content">
              <img className="desktop fade-in" src={NighwanTechHome} alt="NighwanTechHome" />
              <img className="mobile" src={NighwanTechHome} alt="Empowerment" />

              <div className="experience-box simple-shadow bounce-in">
                <div className="experience-body d-flex align-items-center">
                  <img src={icon1} alt="Icon" />
                  <div className="experience-content d-flex align-items-center">
                    <h1>+4</h1>
                    <p>
                      Years
                      <span>Experience</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-content d-flex">
              <Link href="#" className="our-expert-team-box simple-shadow bounce-in delay-2">
                <div className="our-expert-team-box-inner d-flex align-items-center">
                  <div className="imgs imgs1 d-flex align-items-center">
                    <img src={smallImg4} alt="team" />
                    <img src={smallImg3} alt="team" />
                    <img src={smallImg2} alt="team" />
                    <img src={smallImg1} alt="team" />
                  </div>
                  <p>
                    Meet
                    <span>Our Experts</span>
                  </p>
                </div>
              </Link>

              <div className="google-reviews-box simple-shadow bounce-in delay-3">
                <div className="left">
                  <span>Verified by</span>
                  <img src={icon2} alt="Google" />
                </div>
                <div className="right">
                  <div className="stars d-flex align-items-center">
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                  </div>
                  <p>
                    250
                    <span> Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpowerment;









// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroEmpowerment = () => {
//   return (
//     <section className="hero-empowerment-area">
//       <div className="custom-container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="hero-empowerment-content">
//               <h1 className="title">Empowering Digital Innovation</h1>
//               <p className="description">
//                 Transform your business with cutting-edge technology solutions. From{' '}
//                 <Link to="/services/web-development" className="text-primary">web development</Link> to{' '}
//                 <Link to="/services/mobile-apps" className="text-primary">mobile applications</Link>, we deliver
//                 excellence in every project.
//               </p>
//               <div className="hero-links">
//                 <h3>Explore Our Solutions:</h3>
//                 <ul>
//                   <li>
//                     <Link to="/services/cloud-solutions">Cloud Solutions</Link>
//                     {' '}- <a href="https://aws.amazon.com/what-is-cloud-computing/" target="_blank" rel="noopener noreferrer">Learn about cloud computing</a>
//                   </li>
//                   <li>
//                     <Link to="/services/ai-ml">AI & Machine Learning</Link>
//                     {' '}- <a href="https://www.ibm.com/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer">Explore AI basics</a>
//                   </li>
//                   <li>
//                     <Link to="/services/digital-transformation">Digital Transformation</Link>
//                     {' '}- <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/digital-transformation" target="_blank" rel="noopener noreferrer">Industry insights</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="hero-cta">
//                 <Link to="/contact" className="primary-btn">Get Started</Link>
//                 <Link to="/portfolio" className="secondary-btn">View Our Work</Link>
//               </div>
//               <div className="trusted-by">
//                 <h4>Trusted By Industry Leaders:</h4>
//                 <div className="partner-logos">
//                   <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" title="Microsoft Partner">
//                     <img src="/assets/imgs/partners/microsoft.svg" alt="Microsoft Logo" />
//                   </a>
//                   <a href="https://www.aws.amazon.com" target="_blank" rel="noopener noreferrer" title="AWS Partner">
//                     <img src="/assets/imgs/partners/aws.svg" alt="AWS Logo" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="hero-empowerment-image">
//               <img src="/assets/imgs/hero-image.svg" alt="Digital Innovation" />
//               <div className="tech-stack">
//                 <h4>Our Technology Stack</h4>
//                 <div className="tech-links">
//                   <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
//                   <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a>
//                   <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroEmpowerment;
