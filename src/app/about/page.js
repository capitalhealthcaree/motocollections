'use client';
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
                    activeItem="About Us"
                    title="About US"
                />
                <section
                    style={{
                        padding: '80px 0 100px 0'
                    }}
                >
                    {/* Welcome to Moto Collection */}
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2
                                style={{
                                    fontSize: '3.2rem',
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

                            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <p
                                    style={{
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        color: '#555555',
                                        marginBottom: '30px',
                                        fontFamily: 'Arial, sans-serif',
                                        textAlign: 'justify'
                                    }}
                                >
                                    Founded in 2012, Moto Collection has been dedicated to providing top-notch leather products for over a decade.
                                    What started as a passion for creating high-quality leather gear has grown into a leading name in the industry.
                                    Whether you're an adventurous motorbike rider, a cosplay enthusiast, or someone who simply appreciates fine
                                    craftsmanship, we have something special just for you.
                                </p>

                                <p
                                    style={{
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        color: '#555555',
                                        marginBottom: '0',
                                        fontFamily: 'Arial, sans-serif',
                                        textAlign: 'justify'
                                    }}
                                >
                                    Our mission is simple - to provide premium leather products that combine style, comfort, and durability. Every item we
                                    create is designed with attention to detail and crafted using only the finest leather. From motorbike suits, gloves, and
                                    shoes to celebrity jackets, movie jackets, and customized gear, we aim to cater to every taste and occasion.
                                </p>
                            </div>
                            {/* Divider Line */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '4px',
                                    backgroundColor: '#2c3e50',
                                    marginTop: '60px'
                                }}
                            ></div>
                            {/* What We Offer Section */}
                            <div style={{ marginTop: '80px', marginBottom: '60px' }}>
                                <h2
                                    style={{
                                        fontSize: '3.2rem',
                                        fontWeight: '800',
                                        color: '#2c3e50',
                                        marginBottom: '40px',
                                        fontFamily: 'Arial, sans-serif',
                                        letterSpacing: '-1px',
                                        lineHeight: '1.1',
                                        textAlign: 'center'
                                    }}
                                >
                                    What We Offer
                                </h2>

                                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    <p
                                        style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: '#555555',
                                            marginBottom: '30px',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        At Moto Collection, we pride ourselves on offering a wide variety of leather products that suit every need:
                                    </p>

                                    <ul
                                        style={{
                                            listStyleType: 'disc',
                                            paddingLeft: '20px',
                                            marginBottom: '30px'
                                        }}
                                    >
                                        <li
                                            style={{
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                color: '#555555',
                                                marginBottom: '15px',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                        >
                                            <strong style={{ color: '#2c3e50' }}>Motorbike Gear:</strong> Suits, gloves, shoes, and jackets designed for both comfort and safety.
                                        </li>

                                        <li
                                            style={{
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                color: '#555555',
                                                marginBottom: '15px',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                        >
                                            <strong style={{ color: '#2c3e50' }}>Celebrity & Movie Jackets:</strong> Custom replicas of iconic jackets worn by your favorite stars.
                                        </li>

                                        <li
                                            style={{
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                color: '#555555',
                                                marginBottom: '15px',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                        >
                                            <strong style={{ color: '#2c3e50' }}>Cosplay & Custom Jackets:</strong> Tailored designs for fans and enthusiasts, with endless customization options.
                                        </li>

                                        <li
                                            style={{
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                color: '#555555',
                                                marginBottom: '15px',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                        >
                                            <strong style={{ color: '#2c3e50' }}>Casual & Work Gear:</strong> Stylish college jackets and durable leather aprons for work.
                                        </li>
                                    </ul>

                                    <p
                                        style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: '#555555',
                                            marginBottom: '30px',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Whether you're looking for something practical or trendy, we have the perfect piece for you.
                                    </p>

                                    <p
                                        style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: '#555555',
                                            marginBottom: '0',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Our mission is simple - to provide premium leather products that combine style, comfort, and durability. Every item we
                                        create is designed with attention to detail and crafted using only the finest leather. From motorbike suits, gloves, and
                                        shoes to celebrity jackets, movie jackets, and customized gear, we aim to cater to every taste and occasion.
                                    </p>
                                    {/* Bottom Border Line */}
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '4px',
                                            backgroundColor: '#2c3e50',
                                            marginTop: '60px'
                                        }}
                                    ></div>
                                </div>
                            </div>
                            {/* Our Expertise Section */}
                            <div style={{ marginTop: '80px', marginBottom: '60px' }}>
                                <h2
                                    style={{
                                        fontSize: '3.2rem',
                                        fontWeight: '800',
                                        color: '#2c3e50',
                                        marginBottom: '40px',
                                        fontFamily: 'Arial, sans-serif',
                                        letterSpacing: '-1px',
                                        lineHeight: '1.1',
                                        textAlign: 'center'
                                    }}
                                >
                                    Our Expertise
                                </h2>

                                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    <p
                                        style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: '#555555',
                                            marginBottom: '0',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        With over 13 years of experience in the leather industry, we understand the value of high-quality craftsmanship. We
                                        use advanced techniques and pay attention to every stitch to ensure that each product delivers not only on style but
                                        also on durability. Whether you're hitting the road, attending a special event, or looking for everyday wear, our leather
                                        products are designed to stand out and last.
                                    </p>
                                </div>
                            </div>
                            {/* Divider Line */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '4px',
                                    backgroundColor: '#2c3e50',
                                    margin: '60px 0'
                                }}
                            ></div>

                            {/* Wholesale & Retail Section */}
                            <div style={{ marginBottom: '60px' }}>
                                <h2
                                    style={{
                                        fontSize: '3.2rem',
                                        fontWeight: '800',
                                        color: '#2c3e50',
                                        marginBottom: '40px',
                                        fontFamily: 'Arial, sans-serif',
                                        letterSpacing: '-1px',
                                        lineHeight: '1.1',
                                        textAlign: 'center'
                                    }}
                                >
                                    Wholesale & Retail
                                </h2>

                                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    <p
                                        style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: '#555555',
                                            marginBottom: '0',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Moto Collection is proud to offer both wholesale and retail options to serve individuals and businesses alike. Whether
                                        you're looking to purchase a single item or place a bulk order, we're here to meet your needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Border Line */}
                        <div
                            style={{
                                width: '100%',
                                height: '4px',
                                backgroundColor: '#2c3e50',
                                marginTop: '60px'
                            }}
                        ></div>
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