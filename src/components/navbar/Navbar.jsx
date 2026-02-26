import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  //define state variables for hamburger nav menu
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="brand logo" />
          <p>HELLO🤍SHOPPER</p>
        </div>
        
        {/* Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="img of shopping cart" />
          <div className="nav-cart-count">0</div>
        </div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
