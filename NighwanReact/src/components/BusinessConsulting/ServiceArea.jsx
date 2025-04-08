import React from 'react';
import { Link } from 'react-router-dom';
import bgShape7 from '../../assets/imgs/bg-shape-7.svg'; // Adjust the path to your assets
import service1 from '../../assets/imgs/⁠Process Optimization.png';  
import service2 from '../../assets/imgs/Waste Reduction.png';
import service3 from '../../assets/imgs/Value Streamlining.png';
import service4 from '../../assets/imgs/Kaizen Implementation.png';
import service5 from '../../assets/imgs/Lean Automation.png';
import service6 from '../../assets/imgs/Performance Analytics.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ServiceArea = () => {
  return (
    <section className="service2-area">
      <img className="bg-shape" src={bgShape7} alt="Shape" />
      <div className="custom-container">
        <div className="custom-row">
          <div className="service2-header d-flex align-items-center justify-content-between w-full">
            <div className="left">
              <h5 className="heading">Our Lean Consultancy Services</h5>
              <h1 className="section-title">Our professional experts</h1>
              <p>
              We deliver best-in-class lean solutions to optimize efficiency. Our consulting process starts with a comprehensive assessment of your existing operations, workflows, and inefficiencies, identifying key areas for improvement and waste reduction to drive sustainable growth.
              </p>
            </div>

            <Link to="/service" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </Link>
          </div>
        </div>

        <div className="custom-service-container">
    <div className="custom-service-row">
        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service1 || "/placeholder.svg"} alt="Process Optimization" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Process Optimization</h3>
                <p className="custom-service-description">Streamlining workflows for maximum efficiency and productivity.</p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Customized Growth
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Market Penetration
                    </li>
                </ul>
            </div>
        </div>

        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service2 || "/placeholder.svg"} alt="Waste Reduction" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Waste Reduction</h3>
                <p className="custom-service-description">
                    Eliminating unnecessary processes to enhance resource utilization. Data-driven insights to boost
                    operational decision-making.
                </p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Industry Insights
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Optimize Resources
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="custom-service-row">
        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service3 || "/placeholder.svg"} alt="Value Streamlining" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Value Streamlining</h3>
                <p className="custom-service-description">Enhancing value delivery with minimal operational bottlenecks.</p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Customized Growth
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Market Penetration
                    </li>
                </ul>
            </div>
        </div>

        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service4 || "/placeholder.svg"} alt="Kaizen Implementation" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Kaizen Implementation</h3>
                <p className="custom-service-description">Driving continuous improvement through small, impactful changes.</p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Industry Insights
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Optimize Resources
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="custom-service-row">
        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service5 || "/placeholder.svg"} alt="Lean Automation" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Lean Automation</h3>
                <p className="custom-service-description">Integrating smart systems for optimized process efficiency.</p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Customized Growth
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Market Penetration
                    </li>
                </ul>
            </div>
        </div>

        <div className="custom-service-card">
            <div className="custom-service-image-wrapper">
                <img src={service6 || "/placeholder.svg"} alt="Performance Analytics" className="custom-service-image" />
            </div>
            <div className="custom-service-details">
                <h3 className="custom-service-title">Performance Analytics</h3>
                <p className="custom-service-description">Data-driven insights to boost operational decision-making.</p>
                <ul className="custom-service-feature-list">
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Industry Insights
                    </li>
                    <li className="custom-service-feature-item">
                        <i className="custom-service-icon">✓</i> Optimize Resources
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
      </div>
    </section>
  );
};

export default ServiceArea;