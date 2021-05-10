import React from "react";
import profile from "../images/profile.jpg";
import theme from "../images/icon-sun.svg";
import logo from "../images/logo.svg";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="theme">
          <img src={theme} alt="" />
        </button>

        <button className="profile">
          <img src={profile} alt="" style={{ width: "2rem" }} />
        </button>
      </div>
    </div>
  );
}
