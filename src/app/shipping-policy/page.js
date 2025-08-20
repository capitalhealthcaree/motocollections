'use client';
import React, { useState } from 'react';
import Breadcrumb from "@/components/breadcrumb/CustomBreadcrumb";
import FreeDeliverySection from "@/components/home/free-delivery-section";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import Contact from "@/components/home/contact";
import WelcomSection2 from "@/components/home/welcom-section2";

const AboutUs = () => {


    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <Breadcrumb
                    title="Shipping Policy"
                />
                <div
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Section 1: Overview */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                1. Overview
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We prioritize fast, reliable delivery across the USA, with free shipping on every order. All prices are in USD, and no membership fees apply.
                            </p>
                        </div>

                        {/* Section 2: Order Cut-Off, Handling & Transit */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                2. Order Cut-Off, Handling & Transit
                            </h2>
                            <ul
                                style={{
                                    paddingLeft: '20px',
                                    margin: '0'
                                }}
                            >
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    <strong>Order Cut-off Time:</strong> 8 AM ET (USA & Canada)
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    <strong>Handling Time:</strong> 0–1 business days (Mon–Fri)
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    <strong>Transit Time:</strong> 2–3 business days (Mon–Fri)
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: Carriers & Delivery Terms */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                3. Carriers & Delivery Terms
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We partner with DHL, UPS, and USPS to ensure your gear arrives safely and swiftly.
                            </p>
                        </div>

                        {/* Section 4: Change of Address */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                4. Change of Address
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                If you need to update your delivery address, contact us within 24 hours of placing your order. Once in transit, address changes are not
                                possible.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0',
                                    fontStyle: 'italic'
                                }}
                            >
                                <strong>Email:</strong> support@motocollection.us | <strong>Call:</strong> (+1) 951-801-0845
                            </p>
                        </div>

                        {/* Section 5: Cancellations */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                5. Cancellations
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                You may cancel at any time before dispatch. Once your order has shipped, please follow our refund policy.
                            </p>
                        </div>

                        {/* Section 6: Damaged Parcels */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                6. Damaged Parcels
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                If your package arrives damaged, reject it at delivery if possible, then contact our customer service. If you weren't present, notify us
                                immediately to arrange next steps.
                            </p>
                        </div>

                        {/* Section 7: Contact Us */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingBottom: '10px'
                                }}
                            >
                                7. Contact Us
                            </h2>
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    border: '1px solid #ddd',
                                    padding: '20px',
                                    borderRadius: '5px'
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555'
                                    }}
                                >
                                    <p style={{ margin: '0 0 8px 0' }}>
                                        <strong>Trade Name:</strong> MotoCollection
                                    </p>
                                    <p style={{ margin: '0 0 8px 0' }}>
                                        <strong>Email:</strong> support@motocollection.us
                                    </p>
                                    <p style={{ margin: '0 0 8px 0' }}>
                                        <strong>Address:</strong> 10856 Vista lakes Dr Apt 917, Plantation, FL 33325, United States
                                    </p>
                                    <p style={{ margin: '0' }}>
                                        <strong>Phone:</strong> (+1) 815-304-6448
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FreeDeliverySection />
                <WelcomSection2 />
                <Contact />
            </main>
            <FooterOne />
        </>
    );
}

export default AboutUs;