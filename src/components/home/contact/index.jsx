"use client";
import React from "react";

const CTASection = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div
            className="d-flex align-items-center justify-content-between p-4 p-lg-5"
            style={{
              backgroundColor: "#000000",
              borderRadius: "20px",
              minHeight: "120px",
            }}
          >
            {/* Desktop Layout */}
            <div className="d-none d-lg-flex align-items-center flex-grow-1">
              {/* Paper Plane Icon */}
              <div className="me-4">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex-grow-1">
                <h2
                  className="text-white mb-2"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  We Are Open for Your Questions!
                </h2>
                <p
                  className="text-white mb-0"
                  style={{
                    fontSize: "1.1rem",
                    opacity: "0.9",
                  }}
                >
                  Feel free to communicate with us
                </p>
              </div>

              {/* CTA Button */}
              <div className="ms-4">
                <button
                  className="btn d-flex align-items-center px-4 py-3"
                  style={{
                    backgroundColor: "white",
                    color: "#000",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    border: "none",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0f0f0";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="me-2"
                  >
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                  </svg>
                  ASK A QUESTION
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="d-lg-none w-100 text-center">
              {/* Paper Plane Icon */}
              <div className="mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="mb-4">
                <h2
                  className="text-white mb-3"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  We Are Open for Your Questions!
                </h2>
                <p
                  className="text-white mb-0"
                  style={{
                    fontSize: "1rem",
                    opacity: "0.9",
                  }}
                >
                  Feel free to communicate with us
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  className="btn d-flex align-items-center justify-content-center mx-auto px-4 py-3"
                  style={{
                    backgroundColor: "white",
                    color: "#000",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    border: "none",
                    transition: "all 0.3s ease",
                    minWidth: "200px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0f0f0";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="me-2"
                  >
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                  </svg>
                  ASK A QUESTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
