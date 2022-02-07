import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/faqs">FAQs</a>
                    </li>
                    <li>
                      <a href="/pricingplan">Prices and Plans</a>
                    </li>
                    <li>
                      <a href="/service">Services</a>
                    </li>
                    <li>
                      <a href="/privacypolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/tos">ToS</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Download App</h2>
                  <ul>
                    <li>
                      <a href="/">IOS</a>
                    </li>
                    <li>
                      <a href="/">Android</a>
                    </li>
                    <li>
                      <a href="/">How to Use App?</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Usefull Links</h2>
                  <ul>
                    <li>
                      <a href="/findtutors">Find Tutors</a>
                    </li>
                    <li>
                      <a href="/findtutors">Find Students</a>
                    </li>
                    <li>
                      <a href="/quran">Read Quran</a>
                    </li>
                    <li>
                      <a href="/qaida">Read Qaida</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>

                  <div className="row2">
                    <div className="col-12 mx-auto img1">
                      <a href="/">
                        <img src="./images/appstore.png" alt="App Store" />
                      </a>
                    </div>
                    <div className="col-12 mx-auto img2">
                      <a href="/">
                        <img src="./images/playstore.png" alt="App Store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ {new Date().getFullYear()} Quran Tutor. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
