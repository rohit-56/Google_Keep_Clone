import React from "react";
import logo from "../Images/logo.png";
import "./styling/headers.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Google Keep Clone</h1>
      </div>
    </>
  );
}

export default Header;
