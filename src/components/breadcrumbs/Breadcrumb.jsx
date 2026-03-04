import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../assets/breadcrum_arrow.png";
const Breadcrumb = ({ product }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <span>Home </span> <img src={arrow_icon} alt="arrow" />
      <span>Shop</span>
      <img src={arrow_icon} alt="arrow" />
      <span>{product.categoy}</span>
      <img src={arrow_icon} alt="arrow" />
      <span>{product.name}</span>
    </nav>
  );
};

export default Breadcrumb;
