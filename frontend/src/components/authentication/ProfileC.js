import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProfileC.css";
import { useHistory } from "react-router";

function ProfileC() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(user);
    if (!user) history.push("/login");
  }, [history]);

  return (
    <>
      <section className="aboutme-section mt-5">
        <div className="container aboutme-container">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-image">
                  <img src="./images/hero1.png" alt="profile-pic" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-heading">
                  <h3>{userData.name}</h3>
                  <h4>{userData.work}</h4>

                  <ul className="nav nav" role="tablist">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        to="/"
                        role="tab"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 edit-ptofile-button">
                <input
                  type="submit"
                  className="profile-edit-button"
                  value="edit profile"
                  name="btn-AddMore"
                />
              </div>
            </div>
            <div className="row">
              {/* left side link */}
              <div className="col-md-4">
                <div className="profile-links">
                  <p>More Detils</p>
                </div>
              </div>

              {/* right side data toggle */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="User id">User id</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData._id}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Contact</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.phone}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Email</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.email}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Profession</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.work}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ProfileC;
