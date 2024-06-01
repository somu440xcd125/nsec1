import { Navbar } from "../navbar/Navbar";
import "./header.css";
import logo from "../../assets/images/logo/logo.png";

import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <NavLink to="" className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span>NSEC CSE</span>
        </NavLink>

        <Navbar />
      </div>
    </header>
  );
};
