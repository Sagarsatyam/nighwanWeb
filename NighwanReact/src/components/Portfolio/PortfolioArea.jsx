import bgShape2 from "../../assets/imgs/bg-shape-2.svg"
import bgShape22 from "../../assets/imgs/bg-shape-2-2.svg"
import "../../assets/css/style.css" // Import your custom CSS
import "../../assets/css/responsive.css" // Import your responsive CSS
import { Link } from "react-router-dom"
import AI from "../../assets/imgs/AI-Powered Sales Forecasting.png"
import ERP from "../../assets/imgs/ERP System.png"
import B2B from "../../assets/imgs/B2B E-Commerce Platform.png"
import IOT from "../../assets/imgs/IoT-Enabled Predictive Maintenance.png"
import HRMS from "../../assets/imgs/HRMS with Job Portal.png"
import TMS from "../../assets/imgs/Transport Management System.png"
import Data from "../../assets/imgs/Data Analytics & Digital Twin Technology.png"
import Devops from "../../assets/imgs/DevOps & Cloud Solutions.png"
// import "./portfolio-area.css" // Import the new CSS file we'll create

const PortfolioArea = () => {
  return (
    <section className="portfolio-area">
      <div className="custom-container">
        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <Link to={"/product-detail/erp"}>
                <div className="project-item-inner">
                  <h2>ERP System</h2>
                  <img src={ERP || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <img src={bgShape2 || "/placeholder.svg"} alt="Shape" className="bg-shape" />
              <h3>
                <Link to={"/product-detail/erp"}>
                  ERP System <i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                A custom-built ERP solution tailored for businesses looking to integrate and automate their operations.
              </p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <Link to={"/product-detail/ai"}>
                <div className="project-item-inner">
                  <h2>
                    AI-Powered <br />
                    Sales <br />
                    Forecasting
                  </h2>
                  <img src={AI || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/ai"}>
                  AI-Powered Sales Forecasting<i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                Advanced AI/ML-driven sales prediction software for demand-driven manufacturing and retail businesses.
              </p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <Link to={"/product-detail/b2b"}>
                <div className="project-item-inner">
                  <h2>
                    B2B
                    <br />
                    E-Commerce
                    <br />
                    Platform
                  </h2>
                  <img src={B2B || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/b2b"}>
                  B2B E-Commerce Platform <i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                A feature-rich online marketplace where multiple vendors can list, sell, and manage their products
                seamlessly.
              </p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <Link to={"/product-detail/iot"}>
                <div className="project-item-inner">
                  <h2>
                    IoT-Enabled
                    <br />
                    Predictive <br />
                    Maintenance
                  </h2>
                  <img src={IOT || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/iot"}>
                  IoT-Enabled Predictive Maintenance<i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                A smart IoT solution that helps industries monitor equipment health and predict failures before they
                occur.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box portfolio-bluebase">
            <div className="project-item">
              <Link to={"/product-detail/hrms"}>
                <div className="project-item-inner">
                  <h2>
                    HRMS with
                    <br />
                    Job Portal
                    <br />
                  </h2>
                  <img src={HRMS || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/hrms"}>
                  HRMS with Job Portal
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                A comprehensive Human Resource Management System integrated with a job portal to streamline HR
                operations and talent acquisition.
              </p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <Link to={"/product-detail/tms"}>
                <div className="project-item-inner">
                  <h2>
                    Transport
                    <br />
                    Management <br />
                    System
                  </h2>
                  <img src={TMS || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/tms"}>
                  Transport Management System <i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>A smart logistics and transportation management solution for fleet tracking and route optimization.</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <Link to={"/product-detail/data"}>
                <div className="project-item-inner">
                  <h2>
                    Data Analytics
                    <br />& Digital Twin
                    <br />
                    Technology
                  </h2>
                  <img src={Data || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <img src={bgShape22 || "/placeholder.svg"} alt="Shape" className="bg-shape" />
              <h3>
                <Link to={"/product-detail/data"}>
                  Data Analytics & Digital Twin Technology<i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>
                A powerful data analytics platform integrated with digital twin technology for real-time business
                insights.
              </p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-yellow-box">
            <div className="project-item">
              <Link to={"/product-detail/devops"}>
                <div className="project-item-inner">
                  <h2>
                    DevOps & Cloud <br />
                    Solutions
                    <br />
                  </h2>
                  <img src={Devops || "/placeholder.svg"} alt="Project" />
                </div>
              </Link>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <Link to={"/product-detail/devops"}>
                  DevOps & Cloud Solutions<i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>A fully automated DevOps platform to streamline software development and deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioArea

