import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  //define state variables for hamburger nav menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="brand logo" />
          <p>HELLO🤍SHOPPER</p>
        </div>

        {/* Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            {" "}
            <img src={cart_icon} alt="img of shopping cart" />
          </Link>

          <div className="nav-cart-count">0</div>
        </div>
        {/* Hamburger Icon */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
