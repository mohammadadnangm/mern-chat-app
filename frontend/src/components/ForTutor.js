import React, { useState } from "react";
import "./ForTutor.css";
import forTutorApi from "../API/forTutorApi.js";

const ForTutor = () => {
  const [serviceData] = useState(forTutorApi);
  return (
    <>
      <section className="fortutor-section">
        <div className="container fortutor-container">
          <h1 className="heading text-center fw-bold">Register as a Tutor</h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-grid gap-2 col-3 mx-auto find-tutor-button">
            <button className="btn btn-secondary" type="button">
              Sign Up As Tutor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTutor;
