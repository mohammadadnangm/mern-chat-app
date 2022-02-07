import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/button";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Avatar } from "@chakra-ui/avatar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const RenderMenu = () => {
    const history = useHistory();
    const [user, setUser] = useState();

    const logoutHandler = () => {
      localStorage.removeItem("userInfo");
      history.push("/");
    };

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      setUser(user);
      // if (user) history.push("/chats");
    }, [history]);
    if (user) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/findtutors">
              Find Tutors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/findstudents">
              Find Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/priceplan">
              Plans
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chats">
              Messages
            </NavLink>
          </li>

          <li className="nav-item">
            <Menu>
              <MenuButton
                as={Button}
                bg="#f1f5fc"
                rightIcon={<ChevronDownIcon />}
              >
                <Avatar
                  size="md"
                  cursor="pointer"
                  name={user.name}
                  src={user.pic}
                />
              </MenuButton>
              <MenuList>
                <NavLink className="nav-link" to="/profile">
                  My Profile
                </NavLink>

                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/findtutors">
              Find Tutors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/findstudents">
              Find Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/priceplan">
              Plans
            </NavLink>
          </li>

          <li className="nav-item">
            <form className="d-flex">
              <button
                className="btn  btn-style"
                type="submit"
                //onClick={<Signup />}
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </button>
              <button
                className="btn  btn-style btn-style-border"
                type="submit"
                onClick={() => history.push("/login")}
              >
                Log in
              </button>
            </form>
          </li>
        </>
      );
    }
  };

  // toggle bar in mobile view click functionality
  const [show, setShow] = useState(false);
  // const history = useHistory();

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/">
              Quran Tutor
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <RenderMenu />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
