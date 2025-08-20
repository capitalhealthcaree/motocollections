'use client';
import React, { useState } from 'react';
import Breadcrumb from "@/components/breadcrumb/CustomBreadcrumb";
import FreeDeliverySection from "@/components/home/free-delivery-section";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import Contact from "@/components/home/contact";
import WelcomSection2 from "@/components/home/welcom-section2";

const AboutUs = () => {
    const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default
    const faqs = [
        {
            question: "What kind of leather do you use for your products?",
            answer: "We use top-quality, full-grain leather for all of our products. This type of leather is the highest quality available and is known for its durability and beauty."
        },
        {
            question: "How long will my MotoCollection product last?",
            answer: "Our products are designed to last for many years with proper care. The high-quality leather and expert craftsmanship ensure durability and longevity."
        },
        {
            question: "Do you offer custom orders?",
            answer: "Yes, we offer custom orders for most of our products. You can specify colors, sizes, and design details to create your perfect leather item."
        },
        {
            question: "How do I care for my leather jacket?",
            answer: "To maintain your leather jacket, keep it clean and dry, use leather conditioner regularly, and store it properly when not in use."
        },
        {
            question: "How do I know which size to order?",
            answer: "We provide detailed size charts for all our products. You can also contact our customer service team for personalized sizing assistance."
        },
        {
            question: "Can I customize my jacket or gear?",
            answer: "Absolutely! We offer extensive customization options including colors, materials, sizing, and design modifications to meet your specific needs."
        },
        {
            question: "What is your return and exchange policy?",
            answer: "We offer a comprehensive return and exchange policy. Items can be returned within 30 days of purchase in original condition."
        },
        {
            question: "How long will it take to receive my order?",
            answer: "Standard orders typically take 2-3 weeks to complete. Custom orders may take 4-6 weeks depending on the complexity of customization."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship worldwide. International shipping times and costs vary by destination. Contact us for specific shipping information."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? -1 : index);
    };
    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <Breadcrumb
                    title="Frequently Asked Questions"
                />
                <section
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {/* Introduction Text */}
                        <p
                            style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: '#333333',
                                marginBottom: '30px',
                                textAlign: 'left'
                            }}
                        >
                            Welcome to the Moto Collection FAQ page! We know that choosing the perfect leather gear can
                            sometimes raise a few questions. Don&apos;t worry - we&apos;ve compiled answers to some of the most common
                            inquiries. If you don&apos;t find what you&apos;re looking for, feel free to reach out to our team - we&apos;re here to help!
                        </p>

                        {/* FAQ Items */}
                        <div style={{ marginBottom: '50px' }}>
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    style={{
                                        marginBottom: '8px',
                                        backgroundColor: openFAQ === index ? '#f5f5f5' : '#2c3e50',
                                        borderRadius: '0'
                                    }}
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        style={{
                                            width: '100%',
                                            padding: '18px 20px',
                                            backgroundColor: '#2c3e50',
                                            color: 'white',
                                            border: 'none',
                                            textAlign: 'left',
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <span
                                            style={{
                                                fontSize: '1.2rem',
                                                transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            ▼
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    {openFAQ === index && (
                                        <div
                                            style={{
                                                padding: '20px',
                                                backgroundColor: '#f5f5f5',
                                                color: '#333333',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.6',
                                                borderTop: '1px solid #ddd'
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Still Have Questions Section */}
                        <div style={{ textAlign: 'center', marginTop: '60px' }}>
                            <h3
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '25px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Still Have Questions ?
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#333333',
                                    marginBottom: '25px',
                                    maxWidth: '600px',
                                    margin: '0 auto 25px auto'
                                }}
                            >
                                If you couldn&apos;t find an answer to your question above, don&apos;t hesitate to get in touch. Our team at Moto
                                Collection is always happy to assist you with whatever you need. Reach out today, and we&apos;ll be happy to
                                help!
                            </p>

                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    color: '#333333',
                                    marginBottom: '20px'
                                }}
                            >
                                We&apos;re here to help 24/7! You can reach us in the following ways:
                            </p>

                            {/* Contact Information */}
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: '0',
                                    margin: '0',
                                    textAlign: 'left',
                                    maxWidth: '400px',
                                    margin: '0 auto'
                                }}
                            >
                                <li
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#333333',
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <span style={{ marginRight: '8px' }}>•</span>
                                    <span>
                                        <strong>Email:</strong> <span style={{ color: '#2c3e50' }}>support@motocollection.us</span>
                                    </span>
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#333333',
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <span style={{ marginRight: '8px' }}>•</span>
                                    <span>
                                        <strong>Phone:</strong> <span style={{ color: '#2c3e50' }}>+1 (762) 344 6425</span>
                                    </span>
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#333333',
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <span style={{ marginRight: '8px' }}>•</span>
                                    <span>
                                        <strong>Address:</strong> 10856 Vyton lakes Dr Apt 670, Plantation, FL 33325, United States
                                    </span>
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#333333',
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <span style={{ marginRight: '8px' }}>•</span>
                                    <span>
                                        <strong>Live Chat & WhatsApp:</strong> Available 24/7 for immediate assistance
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <FreeDeliverySection />
                <WelcomSection2 />
                <Contact />
            </main>
            <FooterOne />
        </>
    );
}

export default AboutUs;