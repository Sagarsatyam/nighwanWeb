"use client"

import React, { useState, useEffect, useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Link } from "react-router-dom"
import "../../assets/css/style.css"

// Enhanced ErrorBoundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Oops, something went wrong!</h2>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button onClick={this.handleReload}>Reload Page</button>
        </div>
      )
    }

    return this.props.children
  }
}

// ContactArea Component
const ContactArea = () => {
  const captchaRef = useRef(null)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    message: "",
    privacy_policy_accept: false,
  })
  const [errors, setErrors] = useState({})
  const [alertMessage, setAlertMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [isHCaptchaLoaded, setIsHCaptchaLoaded] = useState(false)
  const [hcaptchaError, setHCaptchaError] = useState(null)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  // Check for mobile or tablet view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // hCaptcha Callbacks
  const handleLoad = () => {
    console.log("hCaptcha loaded successfully")
    setIsHCaptchaLoaded(true)
    setHCaptchaError(null)
  }

  const handleVerify = (token) => {
    console.log("hCaptcha verified, token:", token)
    setCaptchaToken(token)
  }

  const handleExpire = () => {
    console.log("hCaptcha expired")
    setCaptchaToken(null)
  }

  const handleError = (error) => {
    console.error("hCaptcha error:", error)
    setHCaptchaError("Failed to load hCaptcha. Please try again later.")
  }

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Form Validation
  const validateForm = () => {
    const newErrors = {}
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First Name is required."
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!formData.phone_number.trim() || !/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid 10-digit phone number."
    }
    if (!formData.privacy_policy_accept) {
      newErrors.privacy_policy_accept = "You must agree to the terms and conditions."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Submit Form Data
  const submitFormData = async (formData, captchaToken) => {
    try {
      // Build your request body without including the captcha token
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        enquiryFormId: 0,
        name: `${formData.first_name}`,
        mobileNo: formData.phone_number,
        emailId: formData.email,
        serviceTypeId: 0,
        serviceType: window.location.href,
        sourceId: 0,
        source: "NTPL Website Contact Form",
        message: formData.message,
        enquiryFormIds: [0],
      }

      const response = await fetch("https://jobportalapi.leanxpert.in/api/EnquiryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) throw new Error("Failed to submit form.")

      setAlertMessage("Form submitted successfully!")
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        message: "",
        privacy_policy_accept: false,
      })
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha()
      }
    } catch (error) {
      setAlertMessage("Failed to submit form. Please try again.")
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) {
      setAlertMessage("Please complete the captcha.")
      return
    }
    if (validateForm()) {
      setIsLoading(true)
      submitFormData(formData, captchaToken)
    } else {
      setAlertMessage("Please correct the errors before submitting.")
    }
  }

  // Cleanup on Unmount
  useEffect(() => {
    return () => {
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha()
      }
    }
  }, [])

  // Social list styles for responsive design
  const socialListStyles = {}

  return (
    <ErrorBoundary>
      <section className="nt-contact-section">
        <div className="nt-container">
          <div className="nt-row">
            <div className="nt-form-container">
              <div className="nt-form-content">
                <h5 className="heading">Contact</h5>
                <h1 className="nt-title">Let's get in touch</h1>
                <p>
                  You can reach us anytime via <a href="mailto:info@nighwantech.com">info@nighwantech.com</a>
                </p>
                <form className="nt-form" onSubmit={handleSubmit}>
                  <div className="nt-input-row">
                    <div className="nt-input-group">
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder={errors.first_name ? "Name is required." : "Your Name"}
                        value={formData.first_name}
                        onChange={handleChange}
                        className={errors.first_name ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="nt-input-row">
                    <div className="nt-input-group">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={errors.email ? "Please enter a valid email address." : "Your Email"}
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="nt-input-row">
                    <div className="nt-input-group nt-phone">
                      <select className="nt-prefix">
                        <option value="IN">IN</option>
                      </select>
                      <label htmlFor="phone_number"></label>
                      <input
                        id="phone_number"
                        type="tel"
                        name="phone_number"
                        placeholder={
                          errors.phone_number ? "Please enter a valid 10-digit phone number." : "Your Number"
                        }
                        value={formData.phone_number}
                        onChange={handleChange}
                        className={errors.phone_number ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="nt-input-row">
                    <div className="nt-input-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Leave us a message...."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                  </div>
                  <div className="nt-input-row">
                    <div className="nt-input-group nt-checkbox">
                      <input
                        type="checkbox"
                        id="privacy_policy_accept"
                        name="privacy_policy_accept"
                        checked={formData.privacy_policy_accept}
                        onChange={handleChange}
                      />
                      <label htmlFor="privacy_policy_accept">
                        You agree to our{" "}
                        <Link to="/terms-and-conditions" className="legal-link" target="_blank" rel="noopener noreferrer">
                          Terms and Conditions
                        </Link>
                      </label>
                      {errors.privacy_policy_accept && (
                        <span className="error-message">{errors.privacy_policy_accept}</span>
                      )}
                    </div>
                  </div>
                  {/* <div className="nt-input-row">
                    {hcaptchaError ? (
                      <div className="error-message">{hcaptchaError}</div>
                    ) : (
                      <HCaptcha
                        ref={captchaRef}
                        sitekey="caca3a8a-c728-4fcc-841c-795674a87c92"
                        onLoad={handleLoad}
                        onVerify={handleVerify}
                        onExpire={handleExpire}
                        onError={handleError}
                      />
                    )}
                  </div> */}
                  <div className="nt-input-row">
                    <div className="nt-input-group">
                      <button id="submit" className="nt-button" type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Get Started"}
                      </button>
                    </div>
                  </div>
                  <div className="nt-input-row">
                    <div className="nt-input-group nt-alert">
                      <div id="alert-message" className="alert-msg">
                        {alertMessage}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="contact-experience">
              <div className="nt-stats-wrapper">
                <ul className="nt-stats-list">
                  <li className="nt-stat-item">
                    <h1>
                      18+ <span>Years</span>
                    </h1>
                    <p>Field Experience</p>
                  </li>
                  <li className="nt-stat-item">
                    <h1>
                      150+ <span>Projects</span>
                    </h1>
                    <p>Done Around World</p>
                  </li>
                  <li className="nt-stat-item">
                    <h1>99%</h1>
                    <p>Client Satisfaction</p>
                  </li>
                  <li className="nt-stat-item">
                    <h1>
                      2020 <span>Year</span>
                    </h1>
                    <p>Established On</p>
                  </li>
                  <li className="nt-stat-item">
                    <h1>
                      2 <span>Mins</span>
                    </h1>
                    <p>Response Time</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact-infos">
              <div className="nt-info-wrapper">
                <div className="nt-info-block">
                  <div className="support-icon-placeholder-display">
                    <div className="support-icon-placeholder-contact"></div>
                    <h3>Contact Info</h3>
                  </div>
                  <p>
                    <a href="tel:+918985025794" target="_blank" rel="noopener noreferrer">
                      +91 8985025794
                    </a>{" "}
                  </p>
                </div>

                <div className="nt-info-block">
                  <div className="support-icon-placeholder-display">
                    <div className="support-icon-placeholder-email"></div>
                    <h3>Email Info</h3>
                  </div>
                  <p>
                    <a href="mailto:info@nighwantech.com" target="_blank" rel="noopener noreferrer">
                      info@nighwantech.com
                    </a>
                  </p>
                </div>

                <div className="nt-info-block">
                  <div className="support-icon-placeholder-display">
                    <div className="support-icon-placeholder-location"></div>
                    <h3>Registered Office</h3>
                  </div>
                  <p>
                    <a href="https://maps.app.goo.gl/kt6XpouCs8B6RALt6" target="_blank">
                      Nighwan, Kurtha, Gaya, BR, 804421, IN
                    </a>
                  </p>
                </div>

                <div className="nt-info-block">
                  <div className="support-icon-placeholder-display">
                    <div className="support-icon-placeholder-location"></div>
                    <h3>Branch Office</h3>
                  </div>
                  <p>
                    <a href="#" >
                    Gulmohar Park, Hyderabad, TS, 500019, IN
                    </a>
                  </p>
                </div>



                <ul className="nt-social-list">
                  <li>
                    <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
                      <span className="social-icon facebook-icon"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
                      <span className="social-icon x-icon"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
                      <span className="social-icon instagram-icon"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon linkedin-icon"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
                      <span className="social-icon youtube-icon"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default ContactArea

