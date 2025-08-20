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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jacketType: '',
        requirements: ''
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
        console.log('Form submitted:', formData);
        // Handle form submission here
    };
    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <Breadcrumb
                    title="Custom Leather Jackets"
                />
                <div
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div style={{ marginBottom: '50px' }}>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#333333',
                                    textAlign: 'justify',
                                    marginBottom: '20px'
                                }}
                            >
                                Welcome to our Custom Leather Jacket service, where you can bring your fashion vision to life. Whether
                                you're dreaming of a vintage jacket that represents your team spirit, a rugged motorbike jacket that
                                matches your adventurous soul, or a fashion-forward jacket that expresses your unique style, we have you
                                covered. With our expertise and craftsmanship, we offer you the opportunity to design and personalize
                                your very own leather jacket. From classic styles to modern trends, from bold our skilled artisans will create a
                                unique garment that reflects your individuality and exceeds your expectations.
                            </p>
                        </div>

                        {/* Why Choose MotoCollection */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '25px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Why Choose MotoCollection Custom Leather Jackets?
                            </h2>

                            {/* Quality */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Uncut Raw Quality
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Our leather is meticulously handpicked and we don't cut cost and we don't cut corners our superior quality
                                    every step of the way.
                                </p>
                            </div>

                            {/* Experts */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Experts
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Our team is having exceptional and unmatched craftsmanship expertise and have a famous, famous tailor
                                    and skilled craftsmen and craftsmanship.
                                </p>
                            </div>

                            {/* Workmanship */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Workmanship
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Committed to finest workmanship, as our master artisans handcraft your jacket using ultra-advanced leather and
                                    hardware material.
                                </p>
                            </div>

                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    color: '#555555',
                                    margin: '20px 0 0 0'
                                }}
                            >
                                From handcrafted sleeves to precisely stitching, we deliver one every detail to ensure your jacket meets the highest standards of
                                beauty and style.
                            </p>
                        </div>

                        {/* How Our Process Works */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '25px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                How Our Process Works?
                            </h2>

                            {/* Process Steps */}
                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    1. Design Consultation
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    We start with a detailed conversation—in person or virtual—with our style experts to discuss your vision, preferences, and all
                                    the custom details you want.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    2. Material Selection
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Based on our curated collection of premium leathers, colors, and finishes, our team will guide you to the perfect hide and hardware for your
                                    specific vision.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    3. Design Concept
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Our skilled design craftsmen will craft a detailed concept rendering—highlighting silhouette, features, embellishments, and any special
                                    touches upon your instructions.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    4. Measurements & Fitting
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Receive expert measurement guidance—either in person or via measuring instructions—to ensure a flawless fit that's true to your body's unique silhouette.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    5. Crafting Process
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Our master artisans take handcraft your jacket using time-honored techniques, meticulously stitching and assembling each component with
                                    precision and care.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    6. Quality Assurance
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Your jacket undergoes a rigorous multi-point inspection to ensure every seam, detail, and finish meets our exacting quality standards.
                                </p>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '8px'
                                    }}
                                >
                                    7. Delivery
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#555555',
                                        margin: '0'
                                    }}
                                >
                                    Once approved, your finished custom leather jacket is beautifully packaged and shipped directly to your door—ready to wear and admire.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ marginTop: '50px' }}>
                            <h2
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Start Designing Your Custom Jacket
                            </h2>

                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginBottom: '30px',
                                    maxWidth: '600px',
                                    margin: '0 auto 30px auto'
                                }}
                            >
                                It's as simple as our custom leather jacket! Let us meet our Team today to schedule a detailed consultation and kickstart the exciting journey of
                                your custom masterpiece. A detailed consultation will go far achieving your unique style.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <input
                                        type="text"
                                        name="jacketType"
                                        placeholder="What type of Jacket are you looking for?"
                                        value={formData.jacketType}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <textarea
                                        name="requirements"
                                        placeholder="Tell us your requirements..."
                                        value={formData.requirements}
                                        onChange={handleInputChange}
                                        rows="6"
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '2px solid #ddd',
                                            borderRadius: '0',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Arial, sans-serif',
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
                                        padding: '12px 30px',
                                        border: 'none',
                                        borderRadius: '0',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontFamily: 'Arial, sans-serif',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div style={{ marginTop: '60px', textAlign: 'center' }}>
                            <h3
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '30px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                Contact Us :
                            </h3>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '30px',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}
                            >
                                <div>
                                    <h4
                                        style={{
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        Trade Name
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#555555',
                                            margin: '0'
                                        }}
                                    >
                                        Moto Collection
                                    </p>
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        Phone
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#555555',
                                            margin: '0'
                                        }}
                                    >
                                        +1 (762) 344 6425
                                    </p>
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        Email
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#555555',
                                            margin: '0'
                                        }}
                                    >
                                        support@motocollection.us
                                    </p>
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        Address
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#555555',
                                            margin: '0'
                                        }}
                                    >
                                        10856 Vyton lakes Dr Apt 670,
                                        Plantation, FL 33325, United States
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