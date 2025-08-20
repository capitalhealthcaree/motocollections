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
                    title="Billing Terms & Conditions"
                />
                <div
                    style={{
                        padding: '60px 40px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Section 1: Checkout Process */}
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
                                1. Checkout Process
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                When you click directly to complete your purchase, click the "Continue to checkout" button. If you currently
                                have an account with us, the checkout flow is to include if you don't have to checkout, you will be prompted to
                                create one—only your email and selected product will be in your cart to process an order.
                            </p>
                        </div>

                        {/* Section 2: Payment Methods */}
                        <div style={{ marginBottom: '40px' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    borderBottom: '2px solid #ddd',
                                    paddingButton: '10px'
                                }}
                            >
                                2. Payment Methods
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                For the payment section, you will be instructed on your order including tax, free of extra applicable
                                shipping charges, and update total order amount overall over your next method to use/Paypal payment
                                transaction/verify payment method within correct product in your cart.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                We accept credit cards:
                            </p>
                            <ul
                                style={{
                                    paddingLeft: '20px',
                                    margin: '0 0 15px 0'
                                }}
                            >
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    MASTERCARD
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    AMERICAN EXPRESS
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    DISCOVER
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    VISA
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    PAYPAL
                                </li>
                                <li
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#555555',
                                        marginBottom: '5px'
                                    }}
                                >
                                    GOOGLE PAY
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: Payment Security */}
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
                                3. Payment Security
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                We use trusted payment gateways to encrypt information and to ensure MotoCollection who uses third structured
                                data interchange service within a secure environment.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                We are committed to protecting your privacy and establishing security encryption to protect your personal information.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                We can't disclose the security of your transaction by looking for a security connection symbol to provide
                                a safe way is important for online security.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Please note that we do not store your credit card information. Once your order is completed, your payment
                                information is submitted directly to our bank for processing.
                            </p>
                        </div>

                        {/* Section 4: Order Verification */}
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
                                4. Order Verification
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Once you have placed your order, MotoCollection may independently order confirmation directly confirming
                                payment via cart confirmation warning check on some large for check backing verification if you are order
                                address payment. We take no responsibility for an offer your order does not reach the customer, for a
                                combination on our end or a third party. This means we'd like to send the final order verification via email.
                            </p>
                        </div>

                        {/* Section 5: Customer Support */}
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
                                5. Customer Support
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Please reach out at anytime to check further outstanding details that we specifically know Customer Support
                                team.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Trading Name: MotoCollection
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Email: support@motocollection.us
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    marginBottom: '15px'
                                }}
                            >
                                Our mailing address: 10856 Vista lakes Dr Apt 917, PLANTATION, FL 33325, United States
                            </p>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                Business hours: +1 (762) 344 6355
                            </p>
                        </div>

                        {/* Section 6: Exchange Requirement */}
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
                                6. Exchange Requirement
                            </h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#555555',
                                    margin: '0'
                                }}
                            >
                                MotoCollection is committed to providing a seamless, secure and dependable online shopping experience
                                our customer can trust. if you have any issue with your order, contact customer service, we will customer service
                                or a solution can be found or any question.
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