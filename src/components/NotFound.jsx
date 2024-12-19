import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon"></div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Sorry, we couldn't find the page you're looking for. The page might
          have been removed, had its name changed, or is temporarily
          unavailable.
        </p>

        <div className="not-found-buttons">
          <button
            onClick={() => navigate(-1)}
            className="back-button"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="home-button"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
