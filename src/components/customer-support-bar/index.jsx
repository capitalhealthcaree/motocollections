'use client';
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Top Quality",
      description: "Made for flawless performance."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 7.45 20.55 7 20 7H4C3.45 7 3 7.45 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16Z" stroke="currentColor" strokeWidth="2" />
          <path d="M21 12L17 8L13 12L9 8L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Express Shipping",
      description: "Fast, reliable delivery worldwide."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path d="M7 11V7C7 5.9 7.9 5 9 5H15C16.1 5 17 5.9 17 7V11" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Secure Payments",
      description: "Easy and secure payments."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9 14C9.5 14.5 10.5 15 12 15C13.5 15 14.5 14.5 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Customer Support",
      description: "24/7 Live customer support."
    }
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12">
          {/* Desktop Layout */}
          <div
            className="d-none d-lg-flex justify-content-center"
            style={{
              backgroundColor: '#000000',
              borderRadius: '50px',
              padding: '20px 40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="d-flex align-items-center text-white"
                style={{
                  flex: 1,
                  borderRight: index < features.length - 1 ? '1px solid #333' : 'none',
                  paddingRight: index < features.length - 1 ? '30px' : '0',
                  paddingLeft: index > 0 ? '30px' : '0'
                }}
              >
                <div className="me-3" style={{ minWidth: '24px' }}>
                  {feature.icon}
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-white" style={{ fontSize: '14px', lineHeight: '1.2' }}>
                    {feature.title}
                  </h6>
                  <p className="mb-0 text-white" style={{ fontSize: '12px', opacity: 0.8, lineHeight: '1.2' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div
            className="d-lg-none"
            style={{
              backgroundColor: '#000000',
              borderRadius: '30px',
              padding: '30px',
              maxWidth: '350px',
              margin: '0 auto'
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center text-white"
                style={{
                  borderBottom: index < features.length - 1 ? '1px solid #333' : 'none',
                  paddingBottom: index < features.length - 1 ? '25px' : '0',
                  paddingTop: index > 0 ? '25px' : '0'
                }}
              >
                <div className="mb-3 d-flex justify-content-center">
                  {feature.icon}
                </div>
                <h6 className="mb-2 fw-bold text-white" style={{ fontSize: '16px', lineHeight: '1.2' }}>
                  {feature.title}
                </h6>
                <p className="mb-0 text-white" style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.3' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;