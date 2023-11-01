import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

  const [name,setName] = useState("LogIn");
  const nameHandler = () =>{
    
    name === "LogIn" ? setName("LogOut") : setName("LogIn");
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button onClick={nameHandler} className="login">{name}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
