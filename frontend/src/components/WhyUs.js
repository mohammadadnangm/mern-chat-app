import React, { useState } from "react";
import "./WhyUs.css";
import whyUsApi from "../API/whyUsApi.js";

const WhyUs = () => {
  const [aboutData] = useState(whyUsApi);
  return (
    <>
      <section className="whyus-section">
        <div className="container mb-5 whyus-container">
          <div className="row">
            {/* 1section leftt side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column  whyus-section-lefttside">
              <h3 className="title">Why Choose Us?</h3>
              <h1 className="heading">
                World class Services <br /> Simple, Reliable, Secure
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row info" key={id}>
                      <div className="col-1 number">{id}</div>
                      <div className="col-10 data">
                        <h2>{title}</h2>
                        <p className="para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border whyus-section-button">
                learn more
              </button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  text-center whyus-section-rightside-img">
              <img
                src="./images/callcenter.jpg"
                alt="WhyUsImg"
                className="whyus-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
