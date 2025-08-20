import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 12H35L32 8H28V12Z" fill="white" />
          <rect x="5" y="16" width="22" height="12" rx="2" fill="white" />
          <circle cx="10" cy="30" r="3" fill="white" />
          <circle cx="22" cy="30" r="3" fill="white" />
          <circle cx="32" cy="30" r="3" fill="white" />
          <path d="M27 20H35V26H35C35 27.1 34.1 28 33 28H31C29.9 28 29 27.1 29 26H25C25 27.1 24.1 28 23 28H21C19.9 28 19 27.1 19 26H17C17 27.1 16.1 28 15 28H13C11.9 28 11 27.1 11 26H9C7.9 28 7 27.1 7 26V18C7 16.9 7.9 16 9 16H27V20Z" fill="white" />
          <rect x="8" y="18" width="3" height="1.5" fill="black" />
          <rect x="8" y="20" width="5" height="1.5" fill="black" />
          <rect x="8" y="22" width="4" height="1.5" fill="black" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Prompt shipping to get your gear fast."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="white" />
          <path d="M16 14C16 12.9 16.9 12 18 12H22C23.1 12 24 12.9 24 14V16H28C29.1 16 30 16.9 30 18V28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28V18C10 16.9 10.9 16 12 16H16V14Z" fill="black" />
          <circle cx="15" cy="22" r="1.5" fill="white" />
          <circle cx="25" cy="22" r="1.5" fill="white" />
          <path d="M15 25C15.5 25.5 16.5 26 18 26H22C23.5 26 24.5 25.5 25 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Always ready to assist with any inquiries."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="24" height="16" rx="3" fill="white" />
          <rect x="10" y="18" width="20" height="3" fill="black" />
          <rect x="10" y="23" width="6" height="2" fill="black" />
          <rect x="10" y="26" width="4" height="2" fill="black" />
          <circle cx="20" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
          <path d="M16 12L18 14L24 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Secure Payment",
      description: "Fast, safe, and reliable payment methods."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L14 12H26L20 6Z" fill="white" />
          <rect x="8" y="12" width="24" height="20" rx="2" fill="white" />
          <rect x="10" y="15" width="20" height="3" fill="black" />
          <rect x="10" y="20" width="12" height="2" fill="black" />
          <rect x="10" y="24" width="16" height="2" fill="black" />
          <rect x="10" y="28" width="10" height="2" fill="black" />
          <circle cx="25" cy="23" r="3" fill="black" />
          <circle cx="25" cy="23" r="1.5" fill="white" />
        </svg>
      ),
      title: "Customized Design",
      description: "Create your own product designs."
    }
  ];

  return (
    <div className="container py-5">
      {/* Desktop Layout */}

      <h2

        style={{
          fontSize: '3.2rem',
          textAlign: "center",
          fontWeight: '800',
          color: '#2c3e50',
          marginBottom: '50px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '-1px',
          lineHeight: '1.1'
        }}
      >
        Welcome to Moto Collection
      </h2>
      <div className="d-none d-lg-block">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3">
              <div className="text-center px-3">
                {/* Icon */}
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#000000',
                    borderRadius: '50%'
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h4
                  className="mb-3"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#000',
                    lineHeight: '1.2'
                  }}
                >
                  {service.title}
                </h4>

                {/* Description */}
                <p
                  className="mb-0"
                  style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.4'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-lg-none">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center mb-5"
            style={{ paddingBottom: index === services.length - 1 ? '0' : '2rem' }}
          >
            {/* Icon */}
            <div
              className="d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#000000',
                borderRadius: '50%'
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h4
              className="mb-3"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#000',
                lineHeight: '1.2'
              }}
            >
              {service.title}
            </h4>

            {/* Description */}
            <p
              className="mb-0 px-3"
              style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.4'
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;