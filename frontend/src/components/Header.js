import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-section ">
        <section className="container header-container ">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn Quran with tajweed <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Whether you are proficient in reading the Quran and want to
                teach others or whether you wish to learn, create an account and
                begin your journey towards success.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>

            {/*  --------------- header right side--------------  */}
            <div className="col-12 col-lg-6 text-center  header-right-side-img">
              <img
                src="./images/hero1.png"
                alt="heroimg"
                className="img-fluid"
              />
              <div className="two-btn">
                <button type="button" className="btn btn-primary btn-lg p-2 ">
                  Get Free Trial
                </button>
                <button type="button" className="btn btn-secondary btn-lg p-2">
                  Sign Up as Tutor
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
