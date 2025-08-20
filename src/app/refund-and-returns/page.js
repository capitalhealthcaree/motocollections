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
                    title="Refund and Returns Policy"
                />
                <div
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Section 1: Return Window */}
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
                                1. Return Window
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We offer a 90-day return policy. You have 90 days from the date you receive your item to request a return.
                            </p>
                        </div>

                        {/* Section 2: Eligibility Criteria */}
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
                                2. Eligibility Criteria
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
                                    Item must be in the same condition you received it—unworn, unused, with original tags and packaging.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    You&apos;ll need your receipt or proof of purchase.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: How to Start a Return */}
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
                                3. How to Start a Return
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Contact us at support@motocollection.us to request your return authorization. Once approved, send your package to:
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px',
                                    fontWeight: '600',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '3px'
                                }}
                            >
                                10856 Vista lakes Dr Apt 917, Plantation, FL 33325, United States
                            </p>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    lineHeight: '1.6',
                                    color: '#666666',
                                    margin: '0',
                                    fontStyle: 'italic'
                                }}
                            >
                                <strong>Note:</strong> You are responsible for return shipping costs. Items received without prior authorization will not be accepted.
                            </p>
                        </div>

                        {/* Section 4: Damages & Issues */}
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
                                4. Damages & Issues
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Inspect your order upon arrival. If your item is defective, damaged, or you&apos;ve received the wrong product, contact us immediately so we can
                                make it right.
                            </p>
                        </div>

                        {/* Section 5: Exchanges */}
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
                                5. Exchanges
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                The quickest way to get what you want is to return the original item (per above process) and then place a new order for the replacement.
                            </p>
                        </div>

                        {/* Section 6: EU 14-Day Cooling-Off Period */}
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
                                6. EU 14-Day Cooling-Off Period
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                If your order ships to the European Union, you have the right to cancel or return within 14 days, for any reason, without justification. Your
                                item must meet the same eligibility criteria listed above, and you&apos;ll need your proof of purchase.
                            </p>
                        </div>

                        {/* Section 7: Refunds */}
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
                                7. Refunds
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Once we receive and inspect your return, we&apos;ll notify you of approval. Approved refunds will be processed back to your original payment
                                method within 10 business days. Banks may take additional time to post the funds to your account.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                If more than 15 business days have passed since approval, please reach out to support@motocollection.us.
                            </p>
                        </div>

                        {/* Section 8: Questions? */}
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
                                8. Questions?
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                For any return-related questions, email us at support@motocollection.us. We&apos;re here to help!
                            </p>
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