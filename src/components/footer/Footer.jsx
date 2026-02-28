import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Hello🤍Shopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          This project was coded by {""}
          <a
            href="https://github.com/punSavitri"
            target="_blank"
            rel="noreferrer"
          >
            Savitri Pun
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/punSavitri/react-ecommerce-app.git"
            target="_blank"
            rel="noreferrer"
          >
            is opend sourced on Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
