"use client"
import React from "react"
import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import aimlImg from "../assets/imgs/bT/aiml.png"
import erpImg from "../assets/imgs/bT/erp.png"
import hrmsImg from "../assets/imgs/bT/tms.png"
import newsImg6 from "../assets/imgs/news-6.jpg"
import newsImg7 from "../assets/imgs/news-7.jpg"
import "../assets/css/style.css"
import "../assets/css/responsive.css" // Keep this for existing responsive rules
import ContactArea from '../components/Home/ContactArea';

const BlogDetailPage = () => {
  const { type } = useParams()

  const Blogs = {
    aiml: {
      title: "How AI and Lean Manufacturing Are Revolutionizing the Indian Industry",
      subtitle: "Transforming Manufacturing with Artificial Intelligence",
      imgHero: aimlImg,
      imgAlt: "AI and Lean Manufacturing Implementation",
      author: "Dr. Rajesh Kumar",
      date: "April 1, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      content: {
        intro:
          "The Indian manufacturing sector is undergoing a massive transformation with the integration of Artificial Intelligence (AI) and Lean Manufacturing Techniques. These innovations are not only increasing efficiency but also reducing costs and enhancing product quality.",
        sections: [
          {
            title: "What is Lean Manufacturing?",
            content:
              "Lean Manufacturing is a systematic approach that focuses on minimizing waste, improving productivity, and optimizing processes. It involves tools like Just-in-Time (JIT), Kaizen, and Six Sigma to enhance operational efficiency.",
          },
          {
            title: "Role of AI in Lean Manufacturing",
            content: "AI plays a crucial role in modern manufacturing by enabling:",
            list: [
              "Predictive Maintenance – Preventing machine failures before they occur.",
              "Smart Automation – Reducing human intervention and increasing precision.",
              "Supply Chain Optimization – Ensuring a seamless flow of raw materials and finished goods.",
              "Data-Driven Decision Making – Leveraging AI-driven insights for better production planning.",
            ],
          },
          {
            title: "Benefits of AI and Lean Manufacturing in India",
            content: "",
            list: [
              "Cost Reduction: AI helps identify inefficiencies, leading to lower operational costs.",
              "Enhanced Productivity: AI-driven automation speeds up production processes.",
              "Better Quality Control: AI algorithms detect defects in real-time.",
              "Sustainability: Lean practices reduce waste, supporting environmental goals.",
            ],
          },
        ],
        conclusion:
          "Adopting AI and Lean Manufacturing is no longer an option but a necessity for Indian businesses to remain competitive. Nighwan Technology is at the forefront of this revolution, providing cutting-edge solutions that help manufacturers embrace the future.",
      },
      blurb:
        "Discover how Artificial Intelligence (AI) and Lean Manufacturing are reshaping the Indian industry by boosting efficiency, reducing costs, and improving product quality. Learn about key AI-driven innovations like predictive maintenance, smart automation, and supply chain optimization that are transforming manufacturing processes. Stay ahead of the competition with cutting-edge strategies!",
      meta: {
        title: "AI in Manufacturing: Revolutionizing Indian Industry | Nighwan Technology",
        description:
          "Learn how AI and Lean Manufacturing are transforming Indian industry. Discover the latest trends, benefits, and implementation strategies for smart manufacturing.",
        keywords: [
          "AI in manufacturing",
          "lean manufacturing India",
          "smart manufacturing",
          "industry 4.0",
          "manufacturing automation",
          "AI-driven production",
          "industrial transformation",
        ],
      },
    },
    erp: {
      title: "Why Your Business Needs an Integrated ERP System in 2025",
      subtitle: "Streamlining Business Operations with Enterprise Resource Planning",
      imgHero: erpImg,
      imgAlt: "ERP System Implementation",
      author: "Dr. Rajesh Kumar",
      date: "April 1, 2025",
      readTime: "8 min read",
      category: "Enterprise Resource Planning",
      content: {
        intro:
          "With digital transformation accelerating across industries, businesses must adopt Enterprise Resource Planning (ERP) systems to streamline operations, improve efficiency, and gain a competitive edge.",
        sections: [
          {
            title: "What is an ERP System?",
            content:
              "An ERP system integrates various business processes like finance, HR, supply chain, and customer relationship management (CRM) into a single platform, enabling better coordination and decision-making.",
          },
          {
            title: "Key Benefits of an Integrated ERP System",
            content: "",
            list: [
              "Real-Time Data Access: Make informed decisions with up-to-date insights.",
              "Improved Efficiency: Automates repetitive tasks, saving time and effort.",
              "Scalability: Supports business growth by adapting to evolving needs.",
              "Regulatory Compliance: Ensures adherence to legal and financial regulations.",
            ],
          },
          {
            title: "Why Businesses Need ERP in 2025",
            content: "",
            list: [
              "AI-Powered Automation: AI-driven ERP solutions enhance productivity.",
              "Cloud-Based Systems: Accessible from anywhere, ensuring business continuity.",
              "Data Security: Protects sensitive business information from cyber threats.",
              "Customizable Solutions: Tailored to meet the unique needs of different industries.",
            ],
          },
        ],
        conclusion:
          "Nighwan Technology's advanced ERP solutions help businesses integrate processes, optimize workflows, and drive growth. Contact us today to upgrade your operations!",
      },
      blurb:
        "Is your business ready for 2025? Discover why an integrated ERP system is essential for streamlining operations, improving efficiency, and gaining a competitive edge. Explore the latest trends in AI-powered automation, cloud-based ERP, and data security to future-proof your business. Learn how Nighwan Technology can help!",
      meta: {
        title: "ERP Solutions 2025: Streamlining Business Operations | Nighwan Technology",
        description:
          "Discover the importance of integrated ERP systems in 2025. Learn how ERP solutions can streamline business operations, improve efficiency, and support growth.",
        keywords: [
          "ERP solutions 2025",
          "integrated ERP system",
          "business operations",
          "digital transformation",
          "enterprise resource planning",
        ],
      },
    },
    hrms: {
      title: "Transforming Workforce Management with AI-Powered HRMS Solutions",
      subtitle: "Revolutionizing Human Resource Management with Artificial Intelligence",
      imgHero: hrmsImg,
      imgAlt: "HRMS System Implementation",
      author: "Dr. Rajesh Kumar",
      date: "April 1, 2025",
      readTime: "8 min read",
      category: "Human Resource Management",
      content: {
        intro:
          "In the age of digital transformation, businesses are turning to AI-powered Human Resource Management Systems (HRMS) to streamline workforce management, improve employee engagement, and enhance HR efficiency.",
        sections: [
          {
            title: "What is an AI-Powered HRMS?",
            content:
              "An HRMS is an all-in-one platform that automates HR functions such as payroll, recruitment, attendance tracking, and performance management using Artificial Intelligence.",
          },
          {
            title: "Benefits of AI-Driven HRMS",
            content: "",
            list: [
              "Automated Payroll Processing: Reduces errors and ensures timely salary disbursement.",
              "Smart Recruitment Tools: AI filters top talent, reducing hiring time.",
              "Real-Time Attendance Tracking: Uses biometric and facial recognition technology.",
              "Performance Analytics: AI assesses employee performance and suggests improvements.",
            ],
          },
          {
            title: "Why Your Business Needs HRMS in 2025",
            content: "",
            list: [
              "Remote Workforce Management: Essential for hybrid work environments.",
              "Data Security & Compliance: Ensures adherence to labor laws and data protection regulations.",
              "Employee Engagement & Retention: AI-driven insights enhance job satisfaction.",
            ],
          },
        ],
        conclusion:
          "Nighwan Technology's AI-powered HRMS solutions help businesses manage their workforce more effectively, boosting productivity and employee satisfaction. Upgrade your HR management with us today!",
      },
      blurb:
        "HR management is evolving with AI-powered HRMS solutions! Learn how automated payroll, smart recruitment tools, real-time attendance tracking, and AI-driven performance analytics are transforming workforce management. Discover why businesses need AI HRMS in 2025 and how Nighwan Technology can help enhance your HR operations.",
      meta: {
        title: "HRMS Solutions 2025: Transforming Workforce Management | Nighwan Technology",
        description:
          "Discover the benefits of AI-powered HRMS solutions in 2025. Learn how HRMS can streamline workforce management, improve employee engagement, and enhance HR efficiency.",
        keywords: [
          "HRMS software",
          "AI in HR management",
          "workforce automation",
          "AI-powered HRMS",
          "smart recruitment tools",
          "employee engagement software",
          "HR tech solutions",
          "HRMS India",
        ],
      },
    },
  }

  // Get related blogs based on current blog
  const getRelatedBlogs = () => {
    switch(type) {
      case 'aiml':
        return [
          { ...Blogs.erp, key: 'erp' },
          { ...Blogs.hrms, key: 'hrms' }
        ];
      case 'erp':
        return [
          { ...Blogs.aiml, key: 'aiml' },
          { ...Blogs.hrms, key: 'hrms' }
        ];
      case 'hrms':
        return [
          { ...Blogs.aiml, key: 'aiml' },
          { ...Blogs.erp, key: 'erp' }
        ];
      default:
        return [];
    }
  };

  const relatedBlogs = getRelatedBlogs();
  const currentBlog = Blogs[type] || Blogs.aiml

  return (
    <>
      <Helmet>
        <title>{currentBlog.meta.title}</title>
        <meta name="description" content={currentBlog.meta.description} />
        <meta name="keywords" content={currentBlog.meta.keywords.join(", ")} />
        <meta property="og:title" content={currentBlog.meta.title} />
        <meta property="og:description" content={currentBlog.meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://nighwantech.com/blog/${type}`} />
        <meta property="article:published_time" content={currentBlog.date} />
        <meta property="article:author" content={currentBlog.author} />
        <meta property="article:section" content={currentBlog.category} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://nighwantech.com/blog/${type}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Custom CSS for Blog Detail Page */}
      <style>
        {`
      /* =========================
       Cooler Blog Detail Page Styles
       ========================= */

      /* --- General Styles --- */
      .nt-blog-detail-page {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        line-height: 1.7;
        opacity: 0;
        animation: ntFadeIn 0.5s ease-out forwards;
      }

      @keyframes ntFadeIn {
        to {
          opacity: 1;
        }
      }

      .nt-container {
        max-width: 1200px;
    border-radius: 20px;
    margin: 0 auto;
    background: #F3F6FC;
    padding: 30px;
      }

      .nt-paragraph-blurb {
        margin-bottom: 1.8em;
        color: #555;
        animation: ntFadeInUp 0.6s ease-out forwards;
        opacity: 0;
        font-style: italic;
      }

       .nt-paragraph {
        margin-bottom: 1.8em;
        color: #555;
        animation: ntFadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }

      @keyframes ntFadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        from {
          transform: translateY(20px);
        }
      }

      .nt-heading-secondary {
        font-size: 2.4em;
        color: #222;
        margin-top: 2.5em;
        margin-bottom: 1.2em;
        border-bottom: 5px solid #E8EDFB; /* Deeper Orange */
        padding-bottom: 0.6em;
        animation: ntSlideInLeft 0.7s ease-out forwards;
        opacity: 0;
      }

      @keyframes ntSlideInLeft {
        to {
          opacity: 1;
          transform: translateX(0);
        }
        from {
          transform: translateX(-30px);
        }
      }

      .nt-list {
        list-style-type: '» '; /* Modern bullet point */
        padding-left: 25px;
        margin-bottom: 1.8em;
        animation: ntSlideInRight 0.7s ease-out forwards;
        opacity: 0;
      }

      @keyframes ntSlideInRight {
        to {
          opacity: 1;
          transform: translateX(0);
        }
        from {
          transform: translateX(30px);
        }
      }

      .nt-list-item {
        margin-bottom: 0.6em;
        color: #555;
      }

      .nt-image-scale-up {
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      }

      .nt-image-scale-up img {
        display: block;
        width: 100%;
        height: auto;
        transform: scale(1);
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .nt-image-scale-up:hover img {
        transform: scale(1.03);
      }

      .nt-link-hover {
        color: #333;
        text-decoration: none;
        transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
        border-bottom: 2px solid transparent;
      }

      .nt-link-hover:hover {
        color: #ff7043;
        border-bottom-color: #ff7043;
      }

      .nt-theme-btn {
        display: inline-block;
        background-color: #ff7043;
        color: white;
        padding: 12px 25px;
        border-radius: 7px;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        margin-top: 1.5em;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .nt-theme-btn:hover {
        background-color: #f4511e; /* Lighter Hover Orange */
        transform: translateY(-3px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
      }

      .nt-button-float {
        animation: ntFloat 3s ease-in-out infinite alternate;
      }

      @keyframes ntFloat {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-5px);
        }
      }

      /* --- Hero Section with Animated Background --- */
      .nt-blog-hero {
        position: relative;
        overflow: hidden;
        padding: 100px 30px;
        text-align: center;
        color: #fff;
        background: linear-gradient(135deg, #ff9800, #f4511e); /* Orange Gradient */
      }

      .nt-hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); /* Subtle overlay */
        z-index: 1;
      }

      .nt-blog-hero-content {
        position: relative;
        z-index: 2;
      }

      .nt-blog-meta {
        margin-bottom: 25px;
        font-size: 1em;
        opacity: 0;
        animation: ntFadeInDown 0.6s ease-out 0.2s forwards;
      }

      @keyframes ntFadeInDown {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        from {
          transform: translateY(-20px);
        }
      }

      .nt-category,
      .nt-date,
      .nt-read-time {
        margin-right: 20px;
        color: #eee;
      }

      .nt-category {
        color: #fff;
        font-weight: bold;
      }

      .nt-blog-title {
        font-size: 3.8em;
        margin-bottom: 20px;
        line-height: 1.3;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        opacity: 0;
        animation: ntSlideInDown 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards;
      }

      @keyframes ntSlideInDown {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        from {
          transform: translateY(-50px);
        }
      }

      .nt-blog-subtitle {
        font-size: 1.8em;
        margin-bottom: 40px;
        color: #ddd;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        opacity: 0;
        animation: ntSlideInDown 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s forwards;
      }

      .nt-author-info {
        font-size: 1.1em;
        opacity: 0;
        animation: ntFadeIn 0.6s ease-out 0.5s forwards;
      }

      /* --- Featured Image --- */
      .nt-featured-image {
        margin: 40px 0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .nt-featured-image img {
        width: 100%;
        height: auto; /* Reduced height */
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }

      .nt-featured-image:hover img {
        transform: scale(1.02);
      }

      /* --- Content Body --- */
      .nt-content-body {
        padding: 20px 0;
      }

      .nt-content-image {
        margin: 30px 0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      }

      .nt-content-image img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s ease;
      }

      .nt-content-image:hover img {
        transform: scale(1.03);
      }

      .nt-conclusion {
        font-size: 1.1em;
        font-weight: 500;
        color: #444;
        border-left: 4px solid #ff7043;
        padding-left: 20px;
        margin-top: 40px;
      }

      /* --- Related Articles Section with Hover Effects --- */
      .blog_related_section {
        background-color: #f8f9fa;
        padding: 80px 0;
        margin-top: 50px;
        margin-bottom : 50px;
      }

      .blog_related_container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .blog_related_title {
        text-align: center;
        font-size: 2.5em;
        color: #333;
        margin-bottom: 50px;
        position: relative;
      }

      .blog_related_title:after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background-color: #ff7043;
      }

      .blog_related_grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      }

      .blog_related_item {
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .blog_related_item:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .blog_related_image_box {
        position: relative;
        height: 200px;
        overflow: hidden;
      }

      .blog_related_image_box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .blog_related_item:hover .blog_related_image_box img {
        transform: scale(1.1);
      }

      .blog_related_shine:before {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        z-index: 2;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
        transform: skewX(-25deg);
      }

      .blog_related_item:hover .blog_related_shine:before {
        animation: blog_shine 0.75s;
      }

      @keyframes blog_shine {
        100% {
          left: 125%;
        }
      }

      .blog_related_content {
        padding: 25px;
      }

      .blog_related_category {
        color: #ff7043;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
      }

      .blog_related_heading {
        font-size: 20px;
        color: #333;
        margin-bottom: 15px;
        line-height: 1.4;
      }

      .blog_related_heading a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .blog_related_heading a:hover {
        color: #ff7043;
      }

      .blog_related_text {
        color: #666;
        margin-bottom: 20px;
        line-height: 1.6;
      }

      .blog_related_button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: #ff7043;
        color: white;
        padding: 12px 25px;
        border-radius: 6px;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }

      .blog_related_button:hover {
        background-color: #f4511e;
      }

      /* Animation for items */
      .blog_related_delay1 {
        animation: blogFadeUp 0.5s ease forwards;
        animation-delay: 0.2s;
      }

      .blog_related_delay2 {
        animation: blogFadeUp 0.5s ease forwards;
        animation-delay: 0.4s;
      }

      @keyframes blogFadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Responsive styles */
      @media (max-width: 768px) {
        .blog_related_section {
          padding: 40px 0;
        }
        
        .blog_related_grid {
          grid-template-columns: 1fr;
        }
        
        .blog_related_title {
          font-size: 2em;
        }
      }

      
    `}
      </style>

      <main className="nt-blog-detail-page">
        <article className="nt-blog-article">
          {/* Hero Section */}
         
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="heading">{currentBlog.category}</h5>
                <h2 className="section-title fade-in">
                {currentBlog.title}
                </h2>
              </div>
            </div>
          </div>
        </div>

          {/* Main Content */}
          <div className="nt-blog-content">
            <div className="nt-container">
              {/* <div className="nt-featured-image nt-image-scale-up">
                <img src={currentBlog.imgHero || "/placeholder.svg"} alt={currentBlog.imgAlt} />
              </div> */}

              <div className="nt-content-body">
                {/* Start with the blurb */}
                <div className="nt-content-section">
                  <p className="nt-paragraph-blurb">{currentBlog.blurb}</p>
                </div>

                {/* Introduction section */}
                <div className="nt-content-section nt-intro-section">
                  <h3 className="heading">Introduction</h3>
                  <p className="nt-paragraph">{currentBlog.content.intro}</p>
                </div>

                {/* Content sections */}
                {currentBlog.content.sections.map((section, index) => (
                  <div key={index} className="nt-content-section">
                    <h2 className="nt-heading-secondary">{section.title}</h2>
                    {section.content && <p className="nt-paragraph">{section.content}</p>}

                    {index === 0 && (
                      <div className="nt-featured-image nt-image-scale-up">
                        <img
                          src={currentBlog.imgHero || "/placeholder.svg"}
                          alt={`${currentBlog.title} illustration`}
                        />
                      </div>
                    )}

                    {section.list && (
                      <ul className="nt-list">
                        {section.list.map((item, i) => (
                          <li key={i} className="nt-list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="nt-content-section">
                  <p className="nt-paragraph nt-conclusion">{currentBlog.content.conclusion}</p>

               
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="blog_related_section">
            <div className="blog_related_container">
              <h2 className="blog_related_title">Related Articles</h2>
              <div className="blog_related_grid">
                {relatedBlogs.map((blog, index) => (
                  <div key={blog.key} className={`blog_related_item blog_related_delay${index + 1}`}>
                    <div className="blog_related_image_box blog_related_shine">
                      <img src={blog.imgHero} alt={blog.imgAlt || "Related blog"} />
                    </div>
                    <div className="blog_related_content">
                      <h5 className="heading">{blog.category}</h5>
                      <h2 className="blog_related_heading">
                        <Link to={`/blogs/${blog.key}`}>
                          {blog.title}
                        </Link>
                      </h2>
                      <p className="blog_related_text" style={{ fontStyle: "italic" }}>{blog.blurb}</p>
                      <Link to={`/blogs/${blog.key}`} className="theme-btn">
                        Read More <i className="icon-right iconoir-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      
       {/* <FeatureArea /> */}
       <ContactArea />
    </>
  )
}

export default BlogDetailPage
