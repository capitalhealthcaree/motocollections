import Image from "next/image";
import Link from "next/link";
import { ScocialLink, Logo } from "@/data/Common";
import { FooterData } from "@/data/Footer";

const FooterOne = (props) => {
  return (
    <footer
      className={`axil-footer-area footer-style-1 ${props.dark ? "footer-dark" : "bg-color-white"
        }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="axil-footer-widget">
              <div className="logo mb--30">
                <Link href="/">
                  <Image
                    className="light-logo"
                    src="/images/logo.png"
                    width={40}
                    height={150}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="inner">
                <ul>
                  <li style={{ color: "black" }}>
                    <b>Address:</b> 12650 Vista Isles Dr Apt 917, Plantation, FL
                    33325, United States
                  </li>
                  <li style={{ color: "black" }}>
                    <b>Phone:</b>{" "}
                    <a style={{ color: "black" }} href="tel:817-523-4648">
                      +1 (720) 248 6355
                    </a>
                  </li>
                  <li style={{ color: "black" }}>
                    <b>Email:</b>{" "}
                    <a
                      style={{ color: "black" }}
                      href="mailto:support@motocollections.us"
                    >
                      support@motocollections.us
                    </a>
                  </li>
                  <li style={{ color: "black" }}>
                    <b>Business Hours:</b> 08:30 am to 5:30 pm
                  </li>
                  <li style={{ color: "black" }}>
                    <b>Support:</b> 24/7 on Live Chat & Whatsapp
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {FooterData.footerLink.slice(0, 3).map((items, index) => (
            <div className="col-md-3 col-sm-4" key={index}>
              <div className="axil-footer-widget">
                <h5
                  className="widget-title"
                  style={{ fontSize: "25px", marginBottom: "0px" }}
                >
                  <b>{items.label}</b>
                </h5>
                <div className="inner">
                  <ul>
                    {items.linkList.map((link, index) => (
                      <li key={index}>
                        <Link style={{ color: "black" }} href={link.url}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright-area copyright-default separator-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12">
              <div className="copyright-left d-flex flex-wrap justify-content-xl-start justify-content-center">
                {/* <ul className="quick-link">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">Terms of Service</Link>
                  </li>
                </ul> */}
                <ul className="quick-link">
                  <li style={{ color: "black" }}>
                    © {new Date().getFullYear()}. All rights reserved by{" "}
                    <a
                      style={{ color: "black" }}
                      target="_blank"
                      href="http://boostcoders.com/"
                    >
                      <b>BoostCoders</b>
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                <span className="card-text" style={{ color: "black" }}>
                  Accept For
                </span>
                <ul className="payment-icons-bottom quick-link">
                  <li>
                    <Image
                      src="/images/icons/cart/cart-1.png"
                      alt="paypal cart"
                      width={20}
                      height={23}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/cart/cart-2.png"
                      alt="paypal cart"
                      width={37}
                      height={23}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/cart/cart-3.png"
                      alt="paypal cart"
                      width={58}
                      height={23}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/cart/cart-4.png"
                      alt="paypal cart"
                      width={50}
                      height={23}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/icons/cart/cart-5.png"
                      alt="paypal cart"
                      width={50}
                      height={23}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
