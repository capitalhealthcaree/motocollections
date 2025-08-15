import React from 'react';

const MotoCollectionSection = () => {
  return (
    <div className="container py-5">
      {/* Top Border */}
      <div
        className="w-100 mb-4"
        style={{
          height: '3px',
          backgroundColor: '#000',
          margin: '0 auto'
        }}
      />

      <div className="container">
        <div className="row align-items-center">
          {/* Content Column */}
          <div className="col-12 col-lg-7 mb-4 mb-lg-0">
            {/* Title with Arrow */}
            <div className="d-flex align-items-center mb-4">
              <h1
                className="mb-0 me-3"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                MOTO COLLECTION
              </h1>
              {/* Arrow Icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="d-none d-lg-block"
              >
                <path
                  d="M8 32L32 8M32 8H12M32 8V28"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mobile Arrow - Positioned differently */}
            <div className="d-lg-none text-end mb-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 32L32 8M32 8H12M32 8V28"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Description Paragraphs */}
            <div className="mb-4">
              <p
                className="mb-3"
                style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}
              >
                Welcome to Moto Collection, your destination for premium leather
                gear since 2012. We offer a wide range of motorbike suits, gloves,
                shoes, leather jackets, celebrity jackets, movie jackets, and
                customized options. Whether you're a rider, cosplay fan, or need
                stylish work aprons, we have something for every style and occasion.
              </p>

              <p
                className="mb-0"
                style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}
              >
                With over a decade of experience, we provide both wholesale and
                retail options, ensuring top-quality, durable gear. Explore our
                collection today and find the perfect fit for any event or adventure.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-12 col-lg-5">
            <div className="text-center">
              <img
                src="images/welcome.jpg"
                alt="Moto Collection - Premium Leather Gear"
                className="img-fluid"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div
        className="w-100 mt-4"
        style={{
          height: '3px',
          backgroundColor: '#000',
          margin: '0 auto'
        }}
      />
    </div>
  );
};

export default MotoCollectionSection;