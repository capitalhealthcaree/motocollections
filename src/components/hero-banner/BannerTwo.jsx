"use client";
import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: 'images/banner.jpg',
      leftText: ['RIDE WITH', 'POWER'],
      rightText: ['OWN THE', 'TRACK'],
      mobileText: ['RIDE WITH POWER', 'OWN THE TRACK']
    },
    {
      url: 'images/banner.jpg',
      leftText: ['SPEED', 'DEMON'],
      rightText: ['LIVE THE', 'THRILL'],
      mobileText: ['SPEED DEMON', 'LIVE THE THRILL']
    },
    {
      url: 'images/banner.jpg',
      leftText: ['BORN TO', 'RACE'],
      rightText: ['FEEL THE', 'RUSH'],
      mobileText: ['BORN TO RACE', 'FEEL THE RUSH']
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="position-relative d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        minHeight: '600px',
        backgroundColor: '#2a2a2a',
        backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #1a1a1a 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background overlay for better text contrast */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 70%)',
          zIndex: 1
        }}
      />

      {/* Auto-Sliding Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="position-absolute w-100 h-100"
          style={{
            zIndex: 0,
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7) contrast(1.3)',
            opacity: currentImage === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}

      {/* Desktop Text Layout */}
      <div className="d-none d-md-block">
        {/* Left Text */}
        <div
          className="position-absolute d-flex flex-column justify-content-center"
          style={{
            left: 'clamp(10px, 3vw, 60px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3
          }}
        >
          <h1
            className="text-white mb-0"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: '0.8',
              textShadow: '3px 3px 8px rgba(0,0,0,0.95)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].leftText[0]}
          </h1>
          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: '0.8',
              textShadow: '3px 3px 8px rgba(0,0,0,0.95)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].leftText[1]}
          </h1>
        </div>

        {/* Right Text */}
        <div
          className="position-absolute d-flex flex-column justify-content-center text-end"
          style={{
            right: 'clamp(10px, 3vw, 60px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3
          }}
        >
          <h1
            className="text-white mb-0"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: '0.8',
              textShadow: '3px 3px 8px rgba(0,0,0,0.95)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].rightText[0]}
          </h1>
          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: '0.8',
              textShadow: '3px 3px 8px rgba(0,0,0,0.95)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].rightText[1]}
          </h1>
        </div>
      </div>

      {/* Mobile Text Layout - Centered */}
      <div className="d-md-none">
        <div
          className="position-absolute w-100 d-flex flex-column align-items-center justify-content-center text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            padding: '0 20px'
          }}
        >
          <h1
            className="text-white mb-2"
            style={{
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              lineHeight: '0.9',
              textShadow: '4px 4px 12px rgba(0,0,0,0.9)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].mobileText[0]}
          </h1>
          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              lineHeight: '0.9',
              textShadow: '4px 4px 12px rgba(0,0,0,0.9)',
              fontFamily: 'Arial, sans-serif',
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {images[currentImage].mobileText[1]}
          </h1>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        className="position-absolute d-flex justify-content-center"
        style={{
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          gap: '8px'
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentImage === index ? 'white' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* WhatsApp Button */}
      <div
        className="position-fixed"
        style={{
          bottom: '30px',
          left: '30px',
          zIndex: 4
        }}
      >
        <a
          href="https://wa.me/your-number"
          className="d-flex align-items-center justify-content-center text-decoration-none"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;