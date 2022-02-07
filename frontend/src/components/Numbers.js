import React from "react";
import "./Numbers.css";

function Numbers() {
  return (
    <>
      <section className="numbers-section">
        <div className="container numbers-container">
          <div className="row">
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2>1212</h2>
              <p>Registered Tutors</p>
            </div>
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2>125</h2>
              <p>Quran Tutors Available</p>
            </div>
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2>132453</h2>
              <p>Session Completed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Numbers;
