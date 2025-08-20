'use client';
import React, { useState } from 'react';
import Breadcrumb from "@/components/breadcrumb/CustomBreadcrumb";
import FreeDeliverySection from "@/components/home/free-delivery-section";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import Contact from "@/components/home/contact";
import WelcomSection2 from "@/components/home/welcom-section2";

const AboutUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Inquiry submitted:', formData);
        // Handle form submission
    };
    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <Breadcrumb
                    title="Wholesale Leather Jackets Manufacturer"
                />
                <div
                    style={{
                        padding: '80px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                        {/* Main Title */}
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h1
                                style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '25px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Why Choose MotoCollection
                            </h1>
                            <p
                                style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}
                            >
                                Motocollection.us is your go-to destination for premium leather jackets — from varsity and bomber to motorbike and customized styles. We
                                manufacture and export over 10,000 jackets each year worldwide.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '0px',
                                marginBottom: '80px'
                            }}
                        >
                            {/* Feature 1 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>🏷️</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Unbeatable Prices
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Get premium leather at affordable wholesale rates.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>⭐</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Top Quality
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Handcrafted perfection with durable materials.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>📋</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Sample Available
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Order a sample piece to ensure full satisfaction.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>🎨</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Custom Design
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Bring your creative jacket vision to life.
                                </p>
                            </div>

                            {/* Feature 5 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>📏</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Tailored Sizes
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Every jacket made to match your perfect fit.
                                </p>
                            </div>

                            {/* Feature 6 */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#4a5568',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ color: '#ffd700', fontSize: '28px' }}>🚚</span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#4a5568',
                                        marginBottom: '15px',
                                        fontFamily: 'Arial, sans-serif'
                                    }}
                                >
                                    Fast Shipping
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666666',
                                        lineHeight: '1.6',
                                        margin: '0',
                                        maxWidth: '250px',
                                        margin: '0 auto'
                                    }}
                                >
                                    Reliable and speedy worldwide delivery.
                                </p>
                            </div>
                        </div>

                        {/* Wholesale Section */}
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    color: '#888888',
                                    marginBottom: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                Lowest Prices ever
                            </p>
                            <h2
                                style={{
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '50px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                For Whole Sale Customers
                            </h2>

                            {/* Wholesale Features Grid */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '0px',
                                    marginBottom: '60px'
                                }}
                            >
                                {/* Wholesale Feature 1 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>💰</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Lowest Prices Ever
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        For wholesale customers with unbeatable pricing.
                                    </p>
                                </div>

                                {/* Wholesale Feature 2 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>🤲</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Hand Crafted
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        50 years of experience in premium handmade leatherwear.
                                    </p>
                                </div>

                                {/* Wholesale Feature 3 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>🎁</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Free Shipping & Samples
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        Receive free samples of leather, embroidery, or jackets.
                                    </p>
                                </div>

                                {/* Wholesale Feature 4 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>🚚</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Fast Delivery
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        MOQ of 5 pcs & samples ready in 15 days.
                                    </p>
                                </div>

                                {/* Wholesale Feature 5 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>📊</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Flexible MOQ
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        We cater to all types of customization requests.
                                    </p>
                                </div>

                                {/* Wholesale Feature 6 */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#2c3e50',
                                            borderRadius: '50%',
                                            margin: '0 auto 20px auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span style={{ color: 'white', fontSize: '24px' }}>💎</span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '12px'
                                        }}
                                    >
                                        Cost-effective
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            lineHeight: '1.5',
                                            margin: '0'
                                        }}
                                    >
                                        Luxury quality at the most affordable price point.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div style={{ textAlign: 'center', marginTop: '80px' }}>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    color: '#888888',
                                    marginBottom: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                Ask any question
                            </p>
                            <h2
                                style={{
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Start Your Consultation
                            </h2>
                            <p
                                style={{
                                    fontSize: '1rem',
                                    color: '#555555',
                                    marginBottom: '40px',
                                    maxWidth: '600px',
                                    margin: '0 auto 40px auto'
                                }}
                            >
                                Want to order wholesale jackets, Just fill the form and we will reach out to you.
                            </p>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '15px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'white'
                                        }}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '15px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'white'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '15px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'white'
                                        }}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '15px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'white'
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '30px' }}>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        style={{
                                            width: '100%',
                                            padding: '15px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'white',
                                            resize: 'vertical'
                                        }}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#2c3e50',
                                        color: 'white',
                                        padding: '15px 40px',
                                        border: 'none',
                                        borderRadius: '0',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontFamily: 'Arial, sans-serif',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    SEND INQUIRY
                                </button>
                            </form>
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