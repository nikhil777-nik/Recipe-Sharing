import React from "react";
import "./index.css";

const NotFound = () => {
  const goHome = () => {
    window.location.href = "/login";
  };

  return (
    <div className="nf-container">
      <div className="nf-content">
        <div className="nf-illustration">
          {/* Cute food illustration (plate + pizza slice) */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="nf-svg"
          >
            <circle cx="100" cy="100" r="90" fill="#fff8f0" stroke="#ff7b7b" strokeWidth="8"/>
            <path
              d="M100 40 L160 160 L40 160 Z"
              fill="#ffcc80"
              stroke="#d2691e"
              strokeWidth="5"
            />
            <circle cx="100" cy="100" r="8" fill="#b71c1c" />
            <circle cx="120" cy="120" r="8" fill="#b71c1c" />
            <circle cx="85" cy="125" r="8" fill="#b71c1c" />
          </svg>
        </div>

        <h1 className="nf-title">404</h1>
        <p className="nf-text">Oops! Looks like you’re in the wrong kitchen <br/>this recipe isn’t here 🍴</p>

        <button className="nf-btn" onClick={goHome}>
          Back to login
        </button>
      </div>
    </div>
  );
};

export default NotFound;
