"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import ContactArea from '../components/Home/ContactArea';   

import "../assets/css/style.css"
import "../assets/css/responsive.css"

const JobDetail = () => {
  const { id } = useParams()
  const [jobDetail, setJobDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`https://hrmsapi.leanxpert.in/api/JobPost/${id}`)
        if (!response.ok) {
          throw new Error("Record Not Found")
        }
        const data = await response.json()
        setJobDetail(data)
      } catch (error) {
        console.error("Error fetching job details:", error)
        setError("Record Not Found")
      } finally {
        setLoading(false)
      }
    }

    fetchJobDetail()
  }, [id])

  if (loading) return <p>Loading job details...</p>
  if (error) return <p className="error">{error}</p>

  if (!jobDetail) {
    return <div>Job not found</div>
  }

  // Inline styles for the layout
  const styles = {
    container: {
      maxWidth: "1300px",
      margin: "20px auto",
      padding: "15px 15px",
      backgroundColor: "#F3F6FC",
      borderRadius: "10px",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "30px",
      margin: "30px 0",
    },
    leftColumn: {
      flex: "1 1 60%",
      minWidth: "300px",
    },
    rightColumn: {
      flex: "1 1 30%",
      minWidth: "300px",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      padding: "30px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignSelf: "flex-start",
      position: "sticky",
      top: "20px",
    },
    heroSection: {
      textAlign: "center",
      padding: "50px 0",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#333",
      margin: "0 0 20px 0",
    },
    serviceAbout: {
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      padding: "25px",
      marginBottom: "20px",
      border: "3px solid #ddd",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    },
    serviceTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "15px",
      fontFamily: "var(--font_yantramanv)",
    },
    serviceList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    serviceItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "10px",
      fontSize: "16px",
      lineHeight: "1.6",
      fontFamily: "var(--font_yantramanv)",

    },
    icon: {
      color: "#ff7c20",
      marginRight: "10px",
      fontSize: "18px",
    },
    // Right column card styles
    cardLogo: {
      width: "100px",
      height: "100px",
      margin: "0 auto 20px",
      display: "block",
    },
    cardTitle: {
      fontSize: "24px",
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
      fontFamily: "var(--font_yantramanv)",

    },
    visitButton: {
      // backgroundColor: "#e78d45",
      color: "white",
      border: "none",
      borderRadius: "30px",
      padding: "12px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      textAlign: "center",
      display: "block",
      width: "100%",
      marginBottom: "20px",
      textDecoration: "none",
    },
    divider: {
      height: "1px",
      backgroundColor: "#ddd",
      margin: "20px 0",
      width: "100%",
    },
    detailRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    detailLabel: {
      color: "#666",
      fontSize: "18px",
      fontFamily: "var(--font_yantramanv)",
    },
    detailValue: {
      color: "#333",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "var(--font_yantramanv)",
    },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "20px",
    },
    tag: {
      border: "1px solid #e78d45",
      borderRadius: "30px",
      padding: "8px 15px",
      color: "#666",
      fontSize: "14px",
    },
    applyButton: {
      // backgroundColor: "#e78d45",
      color: "white",
      border: "none",
      borderRadius: "30px",
      padding: "15px 20px",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
      textAlign: "center",
      display: "block",
      width: "100%",
      marginTop: "20px",
      textDecoration: "none",
    },
    // Media queries handled with inline conditional styles
    "@media (max-width: 1200px)": {
      container: {
        padding: "20px 20px",
      },
    },
    "@media (max-width: 768px)": {
      flexContainer: {
        flexDirection: "column",
      },
      rightColumn: {
        position: "static",
      },
    },
  }

  // Apply media query styles conditionally
  const getResponsiveStyle = (baseStyle, property) => {
    const windowWidth = window.innerWidth

    if (windowWidth <= 768 && styles["@media (max-width: 768px)"][baseStyle]) {
      return {
        ...styles[baseStyle],
        ...styles["@media (max-width: 768px)"][baseStyle],
      }
    }

    if (windowWidth <= 1200 && styles["@media (max-width: 1200px)"][baseStyle]) {
      return {
        ...styles[baseStyle],
        ...styles["@media (max-width: 1200px)"][baseStyle],
      }
    }

    return styles[baseStyle]
  }

  return (
    <>
      <Helmet>
        <title>{jobDetail.designationName} | Career Opportunities | Nighwan Technology Pvt. Ltd.</title>
        <meta
          name="description"
          content={`Join Nighwan Technology as a ${jobDetail.designationName}. ${jobDetail.jobDescription?.substring(0, 150)}...`}
        />
        <meta
          name="keywords"
          content={`${jobDetail.designationName}, job opening, career opportunity, ${jobDetail.department}, software development jobs, IT careers, Nighwan Technology careers`}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section style={styles.heroSection}>

        <div className="headings text-center">
              <h5 className="heading">{jobDetail.designationName}</h5>
              </div>
      </section>

      <div style={styles.container}>
        <div style={styles.flexContainer}>
          {/* Left Column - Existing Content */}
          <div style={styles.leftColumn}>
            <div style={styles.serviceAbout}>
              <h2 style={styles.serviceTitle}>Overview</h2>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>{jobDetail.overView}</li>
              </ul>
            </div>

            <div style={styles.serviceAbout}>
              <h2 style={styles.serviceTitle}>Job Description</h2>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>{jobDetail.jobDescription}</li>
              </ul>
            </div>

            <div style={styles.serviceAbout}>
              <h2 style={styles.serviceTitle}>Responsibilities</h2>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>
                  <i className="las la-check" style={styles.icon}></i>
                  {jobDetail.responsibilities}
                </li>
              </ul>
            </div>

            <div style={styles.serviceAbout}>
              <h2 style={styles.serviceTitle}>Required Skills</h2>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>
                  <i className="las la-check" style={styles.icon}></i>
                  {jobDetail.requiredSkills}
                </li>
              </ul>
            </div>

            <div style={styles.serviceAbout}>
              <h2 style={styles.serviceTitle}>Benefits</h2>
              <ul style={styles.serviceList}>
                <li style={styles.serviceItem}>
                  <i className="las la-check" style={styles.icon}></i>
                  {jobDetail.benefits}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Job Card */}
          <div style={styles.rightColumn}>
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-07%20at%205.49.39%E2%80%AFPM-NhYj1lCY1jHx8yxbBhojIv8ZEtBhBS.png"
              alt="Company Logo"
              style={styles.cardLogo}
            /> */}
            <h2 style={styles.cardTitle}>{jobDetail.designationName }</h2>

            <a href="#" style={styles.visitButton} className="theme-btn">
              Visit website
            </a>

            <div style={styles.divider}></div>

            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Salary</span>
              <span style={styles.detailValue}>{jobDetail.salaryAmount }</span>
            </div>

            {/* <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Expertise</span>
              <span style={styles.detailValue}>HARDCODED</span>
            </div> */}

            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Location</span>
              <span style={styles.detailValue}>{jobDetail.jobLocationName }</span>
            </div>

            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Job Type</span>
              <span style={styles.detailValue}>{jobDetail.jobtypeName }</span>
            </div>

            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Date</span>
              <span style={styles.detailValue}>
                {jobDetail.createdOn ? new Date(jobDetail.createdOn).toLocaleDateString() : ""}
              </span>
            </div>

            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Experience</span>
              <span style={styles.detailValue}>{jobDetail.minimumExperience }</span>
            </div>
{/* 
            <div style={styles.tagContainer}>
              <span style={styles.tag}>Design</span>
              <span style={styles.tag}>Product Design</span>
              <span style={styles.tag}>Brands</span>
              <span style={styles.tag}>Application</span>
              <span style={styles.tag}>UI/UX</span>
            </div> */}

            <a href="#" style={styles.applyButton} className="theme-btn">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <ContactArea />
      
    </>
  )
}

export default JobDetail

