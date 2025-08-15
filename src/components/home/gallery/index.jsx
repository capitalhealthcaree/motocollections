"use client";
import React, { useState } from "react";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop&crop=center",
      alt: "Leather Jacket Style 1",
    },
    {
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop&crop=center",
      alt: "Leather Jacket Style 2",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      alt: "Leather Jacket Style 3",
    },
    {
      src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&h=400&fit=crop&crop=center",
      alt: "Leather Jacket Style 4",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2
            className="mb-0"
            style={{
              fontSize: "2.5rem",
              fontWeight: "400",
              color: "#333",
              letterSpacing: "0.5px",
            }}
          >
            Our Gallery
          </h2>
        </div>
      </div>

      {/* Desktop Layout - 4 Images in a Row */}
      <div className="d-none d-lg-block">
        <div className="row g-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-3">
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: "15px",
                  aspectRatio: "3/4",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Indicators */}
        <div className="d-flex justify-content-center mt-4">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#333",
                margin: "0 5px",
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout - Single Image Carousel */}
      <div className="d-lg-none">
        <div className="position-relative">
          {/* Image Container */}
          <div
            className="position-relative overflow-hidden mx-auto"
            style={{
              borderRadius: "15px",
              aspectRatio: "3/4",
              maxWidth: "350px",
            }}
          >
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                borderRadius: "15px",
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="position-absolute d-flex align-items-center justify-content-center border-0"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: 2,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(0,0,0,0.9)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(0,0,0,0.7)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="position-absolute d-flex align-items-center justify-content-center border-0"
              style={{
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: 2,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(0,0,0,0.9)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(0,0,0,0.7)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Indicators */}
          <div className="d-flex justify-content-center mt-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="border-0"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    currentImage === index ? "#333" : "rgba(51,51,51,0.3)",
                  margin: "0 4px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
