import React from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import ContactArea from '../components/Home/ContactArea';

const CareerDetailPage = () => {
  const { id } = useParams();

  // Sample job data - in a real app, this would come from an API or CMS
  const jobsData = {
    "senior-software-engineer": {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Hybrid - Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      meta: {
        title: "Senior Software Engineer Position | Careers at Nighwan Technology",
        description: "Join our engineering team as a Senior Software Engineer. Work on cutting-edge projects in AI, cloud computing, and enterprise solutions. Competitive salary and benefits.",
        keywords: "senior software engineer job, tech jobs Mumbai, software engineering career, AI development jobs, cloud computing career"
      }
    },
    "ai-engineer": {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      meta: {
        title: "AI/ML Engineer Position | Careers at Nighwan Technology",
        description: "Shape the future of AI as our Machine Learning Engineer. Work on innovative AI solutions and predictive analytics projects. Remote work opportunity.",
        keywords: "AI engineer jobs, machine learning career, remote AI jobs, ML engineer position, artificial intelligence career"
      }
    },
    "devops-engineer": {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Hybrid - Bangalore, India",
      type: "Full-time",
      experience: "4+ years",
      meta: {
        title: "DevOps Engineer Position | Careers at Nighwan Technology",
        description: "Join our infrastructure team as a DevOps Engineer. Build and maintain scalable cloud infrastructure, implement CI/CD pipelines, and drive automation.",
        keywords: "DevOps engineer job, cloud infrastructure career, CI/CD jobs, automation engineer, Bangalore tech jobs"
      }
    }
  };

  const currentJob = jobsData[id] || jobsData["senior-software-engineer"];

  return (
    <>
      <Helmet>
        <title>{currentJob.meta.title}</title>
        <meta name="description" content={currentJob.meta.description} />
        <meta name="keywords" content={currentJob.meta.keywords} />
        <meta property="og:title" content={currentJob.meta.title} />
        <meta property="og:description" content={currentJob.meta.description} />
        <meta property="og:type" content="job" />
        <meta property="og:url" content={`https://nighwantech.com/careers/${id}`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://nighwantech.com/careers/${id}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://nighwantech.com/images/careers-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentJob.meta.title} />
        <meta name="twitter:description" content={currentJob.meta.description} />
      </Helmet>

      <main className="career-detail-page">
        <article className="job-posting">
          <header className="job-header">
            <h1>{currentJob.title}</h1>
            <div className="job-meta">
              <span className="department">{currentJob.department}</span>
              <span className="location">{currentJob.location}</span>
              <span className="type">{currentJob.type}</span>
              <span className="experience">{currentJob.experience}</span>
            </div>
          </header>

          <section className="job-description">
            <h2>About the Role</h2>
            <p>We are seeking a talented and motivated {currentJob.title} to join our team. As a {currentJob.title} at Nighwan Technology, you will work on cutting-edge projects and help shape the future of technology solutions.</p>
          </section>

          <section className="responsibilities">
            <h2>Key Responsibilities</h2>
            <ul>
              <li>Design and implement scalable solutions</li>
              <li>Collaborate with cross-functional teams</li>
              <li>Mentor junior team members</li>
              <li>Drive technical innovation</li>
              <li>Participate in code reviews and architecture discussions</li>
            </ul>
          </section>

          <section className="requirements">
            <h2>Requirements</h2>
            <ul>
              <li>{currentJob.experience} of professional experience</li>
              <li>Strong problem-solving skills</li>
              <li>Excellent communication abilities</li>
              <li>Bachelor's or Master's degree in Computer Science or related field</li>
              <li>Experience with modern technologies and frameworks</li>
            </ul>
          </section>

          <section className="benefits">
            <h2>Benefits</h2>
            <ul>
              <li>Competitive salary package</li>
              <li>Health insurance coverage</li>
              <li>Professional development opportunities</li>
              <li>Flexible work arrangements</li>
              <li>Modern work environment</li>
            </ul>
          </section>

          <section className="apply-section">
            <h2>How to Apply</h2>
            <p>Send your resume and cover letter to careers@nighwantech.com with the subject line "{currentJob.title} Application".</p>
          </section>
        </article>

        <aside className="similar-positions">
          <h2>Similar Positions</h2>
          {/* Add similar job listings component here */}
        </aside>

        <section className="contact-section">
          <ContactArea />
        </section>
      </main>
    </>
  );
};

export default CareerDetailPage;
