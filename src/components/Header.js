import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assests/img/download.png"
/*
If we want to export the Header component to other files without using default 
export then we have to put use export keyword before Component Function declaration
eg -> export const Header = () => {....}
*/

const Header = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
      <div className="header-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
