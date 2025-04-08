import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Helmet>
        <title>Page Not Found | Return to Nighwan Technology - Leading IT Solutions</title>
        <meta name="description" content="Sorry, the page you're looking for cannot be found. Return to Nighwan Technology's homepage for expert IT solutions, software development, and digital transformation services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://nighwantech.com/404" />
      </Helmet>
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="fs-3">Oops! Page Not Found</h2>
        <p className="lead mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Homepage
        </Link>
        <div className="mt-4">
          <p className="text-muted">
            Looking for something specific? Visit our <Link to="/services" className="text-decoration-none">services</Link> or <Link to="/contact" className="text-decoration-none">contact us</Link> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;