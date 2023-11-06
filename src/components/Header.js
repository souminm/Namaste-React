import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [name, setName] = useState("LogIn");
  const nameHandler = () => {
    name === "LogIn" ? setName("LogOut") : setName("LogIn");
  };
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus, "status");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="p-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="p-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="p-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="p-4">Cart</li>
          <button onClick={nameHandler} className="login">
            {name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
