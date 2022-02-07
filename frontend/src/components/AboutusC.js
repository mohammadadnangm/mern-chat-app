import React from "react";
import "./AboutusC.css";

const AboutusC = () => {
  return (
    <>
      <section className="aboutus-section">
        <div className="container mb-5 aboutus-container">
          <div className="row">
            {/* images section  right side*/}
            <div className="col-12 col-lg-5 text-center  aboutus-section-rightside-img">
              <img
                src="./images/aboutsection.png"
                alt="aboutusImg"
                className="about-img"
              />
            </div>

            {/* 1section left side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column aboutus-section-lefttside">
              <h1 className="title">About Quran Tutor</h1>
              <h3 className="heading">A Brief Summary</h3>
              <p className="description">
                Do you want to read the Quran with proper pronunciation
                (Tajweed)? Would you like your child to memorize the Quran
                (Hifz) but don't know where to start? At Qutor, we make it our
                mission to develop innovative tools to help you achieve these
                goals. Whether you are proficient in reading the Quran and want
                to teach others or whether you wish to learn, create an account
                and begin your journey towards success.
              </p>

              <br />
              <button className="btn-style btn-style-border aboutus-section-button">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusC;
