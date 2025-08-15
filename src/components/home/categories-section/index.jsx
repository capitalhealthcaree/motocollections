"use client";
import React from 'react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Leather Jackets For Men",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Leather Jackets For Women",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Leather Suits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Leather Vest",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "MotoGP Leather Suit",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Motorbike Gloves",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Motorbike Shoes",
      image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "Women Coat",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2
            className="mb-0"
            style={{
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              letterSpacing: '0.5px'
            }}
          >
            Our Categories
          </h2>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="row g-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="col-6 col-lg-3"
          >
            <div
              className="position-relative overflow-hidden"
              style={{
                borderRadius: '15px',
                aspectRatio: '1',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Background Image */}
              <div
                className="position-absolute w-100 h-100"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Overlay */}
              <div
                className="position-absolute w-100 h-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
                }}
              />

              {/* Content */}
              <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                <h3
                  className="text-white text-center px-3 mb-0"
                  style={{
                    fontSize: 'clamp(3rem, 2.5vw, 1.25rem)',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                  }}
                >
                  {category.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;