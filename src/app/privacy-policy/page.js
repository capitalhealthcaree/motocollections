import Breadcrumb from "@/components/breadcrumb/CustomBreadcrumb";
import Section from "@/components/elements/Section";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";
import { fetchMarkdownFile } from "@/utils/api";
import markdownToHtml from "@/utils/markdownToHtml";
import Contact from "@/components/home/contact";
import WelcomSection2 from "@/components/home/welcom-section2";
import FreeDeliverySection from "@/components/home/free-delivery-section";

const PrivacyPolicy = async () => {
    const privacyMeta = fetchMarkdownFile('Privacy', 'src/data');
    const privacyContent = await markdownToHtml(privacyMeta.content || "");
    const getPrivacy = { ...privacyMeta.data, privacyContent };

    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <Breadcrumb title="Privacy Policy" />
                <div
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Introduction */}
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
                                Introduction
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                This Privacy Policy describes how Moto Collection collects, uses, and discloses your Personal Information when you visit or make a
                                purchase from the Site.
                            </p>
                        </div>

                        {/* Section 1: Collecting Personal Information */}
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
                                1. Collecting Personal Information
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                When you visit the Site, we collect information about your device, interactions, and purchases. We may also collect additional details if you
                                contact us for support. -Personal Information- means any data that can identify you.
                            </p>

                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    1.1 Device Information
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Purpose:</strong> To load and optimize our Site.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Source:</strong> Automatically via cookies, log files, web beacons, tags, or pixels.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Shared With:</strong> WooCommerce (processor).
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0' }}>
                                    <strong>Data Collected:</strong> Version of web browser, IP address, time zone, cookie data, viewed pages/products, search terms, interaction metrics.
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    1.2 Order Information
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Purpose:</strong> To provide products or services.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Source:</strong> Directly from you.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Shared With:</strong> WooCommerce (processor).
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0' }}>
                                    <strong>Data Collected:</strong> Name, billing/shipping address, payment details (e.g. credit cards, email, phone).
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    1.3 Customer Support Information
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Purpose:</strong> To assist you when you contact us.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0 0 8px 0' }}>
                                    <strong>Source & Shared With:</strong> Same as Device Information.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0' }}>
                                    <strong>Data Collected:</strong> Cookies, logs, web beacons, tags, pixels.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Minors */}
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
                                2. Minors
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We do not knowingly collect Personal Information from anyone under 13. If you become aware a child has provided us data, please contact
                                us to request deletion.
                            </p>
                        </div>

                        {/* Section 3: Sharing Personal Information */}
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
                                3. Sharing Personal Information
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We share your data with service providers (e.g. WooCommerce) to deliver our services. We may also disclose information to comply with
                                laws, respond to legal requests, or protect our rights.
                            </p>
                        </div>

                        {/* Section 4: Behavioural Advertising */}
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
                                4. Behavioural Advertising
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                We use your information to deliver targeted ads and marketing:
                            </p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    Google Analytics for site usage insights (Privacy Policy | Opt-out).
                                </li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    Ad partners receive data on site visits, purchases, and ad interactions.
                                </li>
                            </ul>
                            <p style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '10px' }}>
                                <strong>Opt out of targeted ads via:</strong>
                            </p>
                            <ul style={{ paddingLeft: '20px', margin: '0' }}>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Facebook</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Google</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Bing</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>DMA Opt-out Portal</li>
                            </ul>
                        </div>

                        {/* Section 5: Using Personal Information */}
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
                                5. Using Personal Information
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We process your data to sell products, process payments, ship orders, and notify you of new offerings and promotions.
                            </p>
                        </div>

                        {/* Section 6: Lawful Basis (GDPR) */}
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
                                6. Lawful Basis (GDPR)
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '10px' }}>
                                If you&apos;re in the EEA, we rely on:
                            </p>
                            <ul style={{ paddingLeft: '20px', margin: '0' }}>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Your consent</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Performance of contract</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Legal obligations</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Vital interests</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Public interest tasks</li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>Our legitimate interests (without overriding your rights)</li>
                            </ul>
                        </div>

                        {/* Section 7: Retention */}
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
                                7. Retention
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We keep your order-related data until you request erasure. See -Your Rights- below for more.
                            </p>
                        </div>

                        {/* Section 8: Automated Decision-Making */}
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
                                8. Automated Decision-Making
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                WooCommerce uses limited fraud-prevention measures (IP and card blacklists), which do not have a significant legal effect on you.
                            </p>
                        </div>

                        {/* Section 9: Your Rights (GDPR & CCPA) */}
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
                                9. Your Rights (GDPR & CCPA)
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '10px' }}>
                                <strong>EEA Residents:</strong> Access, port, correct, update, or erase your data. Contact us to exercise these rights.
                            </p>
                            <p style={{ fontSize: '0.95rem', color: '#555555', margin: '0' }}>
                                <strong>California Residents:</strong> -Right to Know-, port, correct, or erase your data. You may also designate an agent to submit requests.
                            </p>
                        </div>

                        {/* Section 10: Cookies */}
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
                                10. Cookies
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '15px' }}>
                                We use both session and persistent cookies to enhance your browsing experience. Below are our privacy cookies:
                            </p>

                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    10.1 Necessary Cookies
                                </h3>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#e8e8e8' }}>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>NAME</th>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>FUNCTION</th>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DURATION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>__cfduid</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cloudflare access</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 year</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>_secure_session_id</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Store navigation</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>24 hours</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>_tracking_consent</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Privacy preferences</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: '#2c3e50',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    10.2 Reporting & Analytics Cookies
                                </h3>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#e8e8e8' }}>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>NAME</th>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>FUNCTION</th>
                                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DURATION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>_landing_page</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Track landing pages</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 weeks</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>_orig_referrer</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Track referrals</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 weeks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: '#555555', margin: '0' }}>
                                You can manage or block cookies via your browser settings, but please note that this may impact site functionality. More at
                                AllAboutCookies.org.
                            </p>
                        </div>

                        {/* Section 11: Do Not Track */}
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
                                11. Do Not Track
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We do not change our practices in response to -Do Not Track- signals, as the industry has no standard response.
                            </p>
                        </div>

                        {/* Section 12: Changes to This Policy */}
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
                                12. Changes to This Policy
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                We may update this Privacy Policy, so please check back periodically for changes.
                            </p>
                        </div>

                        {/* Section 13: Complaints */}
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
                                13. Complaints
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                If you&apos;re dissatisfied with our response to your privacy concern, you may lodge a complaint with your local data protection authority.
                            </p>
                        </div>

                        {/* Contact Section */}
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
                                Contact
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '15px' }}>
                                If you have any questions or complaints about our privacy practices, please reach out to us:
                            </p>
                            <ul style={{ paddingLeft: '20px', margin: '0' }}>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    <strong>Trade Name:</strong> MotoCollection
                                </li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    <strong>Phone:</strong> +1 (762) 344 6355
                                </li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    <strong>Email:</strong> support@motocollection.us
                                </li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    <strong>Business Hours:</strong> 9:00 a.m. - 6:00 p.m (Support 24/7 via Live Chat & WhatsApp)
                                </li>
                                <li style={{ fontSize: '0.95rem', color: '#555555', marginBottom: '5px' }}>
                                    <strong>Address:</strong> 10856 Vista lakes Dr Apt 917, Plantation, FL 33325, United States
                                </li>
                            </ul>
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

export default PrivacyPolicy;