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
                    title="Terms & Conditions"
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
                                    fontFamily: 'Arial, sans-serif'
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
                                This website is operated by motocollection.us. &quot;We,&quot; &quot;us,&quot; and &quot;our&quot; refer to MotoCollection. By visiting or purchasing from our site you
                                agree to these Terms of Service (&quot;Terms&quot;). Please read them carefully before using any part of the site. Continued use after changes
                                constitutes acceptance.
                            </p>
                        </div>

                        {/* Section 2: Online Store Terms */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                2. Online Store Terms
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
                                    You confirm you are of legal age or have parental consent.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    No illegal or unauthorized use of our products or site.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Do not transmit harmful code such as viruses or worms.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Violation of any Term may result in immediate service termination.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: General Conditions */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                3. General Conditions
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
                                    We may refuse service to anyone for any reason at any time.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Your content (including payment data) may be transmitted unencrypted across networks.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Do not reproduce, sell, or exploit the Service without our written permission.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Headings are for convenience and do not affect interpretation.
                                </li>
                            </ul>
                        </div>

                        {/* Section 4: Accuracy & Timeliness */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                4. Accuracy & Timeliness
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We strive for accurate, complete, and current site information but make no guarantees. Reliance on site material is at your own risk. We
                                reserve the right to modify content at any time without obligation to update.
                            </p>
                        </div>

                        {/* Section 5: Modifications to Service & Prices */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                5. Modifications to Service & Prices
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
                                    Product prices and availability may change without notice.
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    We may modify or discontinue the Service at any time without liability.
                                </li>
                            </ul>
                        </div>

                        {/* Section 6: Products & Services */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                6. Products & Services
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Certain items may be sold exclusively online in limited quantities. All descriptions, images, and prices are subject to change. We may limit or
                                discontinue products at our discretion. See our Refund Policy for returns/exchanges.
                            </p>
                        </div>

                        {/* Section 7: Billing & Account Information */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                7. Billing & Account Information
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We reserve the right to refuse or cancel orders. You agree to provide accurate, complete, and current account and payment information, and
                                to update it as needed.
                            </p>
                        </div>

                        {/* Section 8: Optional Tools */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                8. Optional Tools
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We may offer third party tools as is without endorsement or liability. Your use of such tools is at your own risk and subject to their terms.
                            </p>
                        </div>

                        {/* Section 9: Third Party Links */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                9. Third Party Links
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Our Service may contain links to external sites. We have no control over their content or policies and are not responsible for any
                                transactions you make there.
                            </p>
                        </div>

                        {/* Section 10: User Comments & Submissions */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                10. User Comments & Submissions
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                By submitting feedback or comments, you grant us a royalty-free, perpetual right to use, edit, publish, and distribute them. Do not submit
                                unlawful, harmful, or infringing content.
                            </p>
                        </div>

                        {/* Section 11: Personal Information */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                11. Personal Information
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Your data is governed by our Privacy Policy.
                            </p>
                        </div>

                        {/* Section 12: Errors & Omissions */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                12. Errors & Omissions
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We can correct any inaccuracies in product details, pricing, or availability and cancel related orders without notice. We are not obligated to
                                update site content.
                            </p>
                        </div>

                        {/* Section 13: Prohibited Uses */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                13. Prohibited Uses
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                You may not use the site to:
                            </p>
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
                                    Violate any laws or rights of others
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Transmit malicious code
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Collect personal data of others
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Infringe intellectual property rights
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '8px'
                                    }}
                                >
                                    Spam, phish, or scrape the site
                                </li>
                            </ul>
                        </div>

                        {/* Section 14: Disclaimer & Limitation of Liability */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                14. Disclaimer & Limitation of Liability
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                The Service is provided as is and as available. We make no warranties and are not liable for damages arising from your use of the site,
                                to the fullest extent permitted by law.
                            </p>
                        </div>

                        {/* Section 15: Indemnification */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                15. Indemnification
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                You agree to indemnify and hold harmless MotoCollection and its affiliates from any claims or losses arising from your breach of these
                                Terms or violation of law.
                            </p>
                        </div>

                        {/* Section 16: Severability & Termination */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                16. Severability & Termination
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                If any provision is invalid, the remainder stays in effect. We may terminate or suspend your access for violations, and your obligations
                                survive termination.
                            </p>
                        </div>

                        {/* Section 17: Governing Law & Changes */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                17. Governing Law & Changes
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                These Terms are governed by U.S. law. We may update them at any time by posting changes here. Your continued use constitutes
                                acceptance of updates.
                            </p>
                        </div>

                        {/* Section 18: Contact Information */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif'
                                }}
                            >
                                18. Contact Information
                            </h2>
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
                                    <strong>Phone:</strong> +1 (762) 344 6355
                                </p>
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