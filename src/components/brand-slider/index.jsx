"use client";
import React, { useState, useEffect } from "react";

const BrandsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brandSlides = [
    [
      {
        name: "Yamaha",
        logo: "images/brand/yamaha.png",
      },
      { name: "Avirex", logo: "images/brand/2.webp" },
      {
        name: "Suzuki",
        logo: "images/brand/suzuki.webp",
      },
      {
        name: "Ducati",
        logo: "images/brand/1.webp",
      },
    ],
    [
      {
        name: "Dainese",
        logo: "images/brand/2.webp",
      },
      {
        name: "Alpinestars",
        logo: "images/brand/3.webp",
      },
      {
        name: "Rev'it",
        logo: "images/brand/4.webp",
      },
      {
        name: "AGV",
        logo: "images/brand/5.webp",
      },
    ],
    [
      {
        name: "Harley Davidson",
        logo: "images/brand/harley-davidson.webp",
      },
      {
        name: "Shoei",
        logo: "images/brand/6.webp",
      },
    ],
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [brandSlides.length]);

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Top Border */}
      <div
        className="w-100 mb-4"
        style={{
          height: "3px",
          backgroundColor: "#000",
          margin: "0 auto",
        }}
      />

      <div className="container">
        {/* Desktop Layout */}
        <div className="d-none d-lg-block">
          <div className="row align-items-center">
            {/* Brands Title */}
            <div className="col-lg-2">
              <h2
                className="mb-0"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#333",
                  letterSpacing: "1px",
                }}
              >
                Brands
              </h2>
            </div>

            {/* Brand Logos */}
            <div className="col-lg-10">
              <div className="row align-items-center justify-content-between">
                {brandSlides[currentSlide].map((brand, index) => (
                  <div
                    key={index}
                    className="col text-center"
                    style={{
                      opacity: 1,
                      transition: "opacity 1s ease-in-out",
                    }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="img-fluid"
                      style={{
                        maxHeight: "200px",
                        maxWidth: "200px",
                        objectFit: "contain",
                        filter: "brightness(1.1) contrast(1.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.filter = "brightness(1.2) contrast(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.filter = "brightness(1.1) contrast(1.1)";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="d-lg-none">
          {/* Brands Title */}
          <div className="text-center mb-4">
            <h2
              className="mb-0"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#333",
                letterSpacing: "1px",
              }}
            >
              Brands
            </h2>
          </div>

          {/* Brand Logos Grid */}
          <div className="row g-4 justify-content-center">
            {brandSlides[currentSlide].slice(0, 4).map((brand, index) => (
              <div
                key={index}
                className="col-6 text-center"
                style={{
                  opacity: 1,
                  transition: "opacity 1s ease-in-out",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "120px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="img-fluid"
                    style={{
                      maxHeight: "80px",
                      maxWidth: "140px",
                      objectFit: "contain",
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="d-flex justify-content-center mt-4">
          {brandSlides.map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  currentSlide === index ? "#333" : "rgba(51,51,51,0.3)",
                margin: "0 4px",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div
        className="w-100 mt-4"
        style={{
          height: "3px",
          backgroundColor: "#000",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default BrandsSlider;
