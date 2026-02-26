import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="brand logo" />
          <p>HELLO🤍SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="image of shopping cart" />
          <dic className="nav-cart-count">0</dic>
        </div>
      </div>
    </>
  );
};

export default Navbar;
