"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Where to buy Leather Jackets that last?",
      answer:
        "You can purchase high-quality leather jackets from our Moto Collection. We offer premium leather gear with over a decade of experience in crafting durable, stylish jackets that are built to last.",
    },
    {
      id: 2,
      question: "Do you offer custom sizing and personalization?",
      answer:
        "Yes, we offer custom sizing and personalization options. You can provide your measurements for a perfect fit, and we also offer customization options including patches, embroidery, and color variations to make your jacket unique.",
    },
    {
      id: 3,
      question: "Is my payment secure on your website?",
      answer:
        "Absolutely! We use industry-standard SSL encryption and secure payment gateways to protect your personal and financial information. All transactions are processed through trusted payment providers ensuring complete security.",
    },
    {
      id: 4,
      question: "Are your jackets real leather or synthetic?",
      answer:
        "All our jackets are made from 100% genuine leather. We source high-quality cowhide, lambskin, and other premium leather materials. We clearly specify the leather type for each product and never use synthetic materials without disclosure.",
    },
    {
      id: 5,
      question: "How long does shipping and delivery take?",
      answer:
        "Standard shipping takes 5-7 business days within the US and 10-15 business days internationally. We also offer express shipping options (2-3 business days) for urgent orders. Custom orders may take an additional 1-2 weeks for production.",
    },
    {
      id: 6,
      question: "Do you offer women's leather jackets too?",
      answer:
        "Yes, we have an extensive collection of women's leather jackets in various styles including biker jackets, bomber jackets, blazers, and fashion jackets. All are available in multiple sizes and colors with the same quality standards as our men's collection.",
    },
    {
      id: 7,
      question: "Can I trust Moto Collection with my order?",
      answer:
        "Absolutely! We have been in business since 2012 with thousands of satisfied customers worldwide. We offer secure payments, order tracking, customer support, and a satisfaction guarantee. Check our customer reviews and testimonials for peace of mind.",
    },
    {
      id: 8,
      question: "Can I get a jacket from a photo or idea?",
      answer:
        "Yes, we offer custom design services where you can send us photos, sketches, or ideas, and our skilled craftsmen will create a custom leather jacket based on your specifications. This service includes consultation to ensure the design is feasible and meets your expectations.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
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
              fontWeight: "700",
              color: "#333",
              letterSpacing: "0.5px",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      {/* Desktop Layout - 2 Columns */}
      <div className="d-none d-lg-block">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 pe-4">
            {faqData.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="mb-3"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <button
                  className="w-100 text-start border-0 bg-transparent d-flex justify-content-between align-items-center p-4"
                  onClick={() => toggleAccordion(faq.id)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#333",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform:
                        openAccordion === faq.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      minWidth: "16px",
                    }}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>

                <div
                  style={{
                    maxHeight: openAccordion === faq.id ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div
                    className="px-4 pb-4"
                    style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-lg-6 ps-4">
            {faqData.slice(4, 8).map((faq) => (
              <div
                key={faq.id}
                className="mb-3"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <button
                  className="w-100 text-start border-0 bg-transparent d-flex justify-content-between align-items-center p-4"
                  onClick={() => toggleAccordion(faq.id)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#333",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform:
                        openAccordion === faq.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      minWidth: "16px",
                    }}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>

                <div
                  style={{
                    maxHeight: openAccordion === faq.id ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div
                    className="px-4 pb-4"
                    style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className="d-lg-none">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="mb-3"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <button
              className="w-100 text-start border-0 bg-transparent d-flex justify-content-between align-items-center p-3"
              onClick={() => toggleAccordion(faq.id)}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#333",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <span>{faq.question}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform:
                    openAccordion === faq.id
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  minWidth: "14px",
                }}
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>

            <div
              style={{
                maxHeight: openAccordion === faq.id ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div
                className="px-3 pb-3"
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
