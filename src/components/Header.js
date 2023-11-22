import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [name, setName] = useState("LogIn");

  const nameHandler = () => {
    name === "LogIn" ? setName("LogOut") : setName("LogIn");
  };
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //Selector : to subscribe the component to the redux. It's a hook
  //getting access to store using useSelector hook.
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems, "items");

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
          <li className="p-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems?.length} items)</Link>
          </li>
          <button onClick={nameHandler} className="login">
            {name}
          </button>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
