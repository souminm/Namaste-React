import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [name, setName] = useState("LogIn");
  const nameHandler = () => {
    name === "LogIn" ? setName("LogOut") : setName("LogIn");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>Cart</li>
          <button onClick={nameHandler} className="login">
            {name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
