import React, { useState } from "react";
import "./HowItWorks.css";
import howItWorkApi from "../API/howItWorkApi.js";

const HowItWorks = () => {
  const [workData] = useState(howItWorkApi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center"> How It Works?</h1>
          <h3 className="sub-heading text-center"> 3 easy steps to start</h3>
          <div className="row">
            {workData.map((curElem) => {
              const { logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-grid gap-2 col-3 mx-auto find-tutor-button">
            <button className="btn btn-primary" type="button">
              Find Tutor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
