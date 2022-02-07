import React from "react";
import "./FindStudents.css";

const FindStudents = () => {
  return (
    <>
      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Find Students here</h3>
              <h1 className="main-heading">A Brief Summary</h1>
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
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindStudents;
