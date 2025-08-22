'use client';
import Image from "next/image";
import Link from "next/link";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";

const NotFound = () => {
    return (
        <>
            <HeaderFive />
            <main className="main-wrapper">
                <section className="error-page onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-exclamation-circle" /> Oops! Somthings missing.</span>
                                    <h1 className="title">Page not found</h1>
                                    <p>It seems like we dont find what you searched. The page you were looking for doesn&apos;t exist, isn&apos;t available loading incorrectly.</p>
                                    <Link href="/" className="axil-btn btn-bg-secondary right-icon">
                                        Back To Home <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterOne />
        </>
    );
}

export default NotFound;