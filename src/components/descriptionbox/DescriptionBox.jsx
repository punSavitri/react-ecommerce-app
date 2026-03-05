import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables businesses or
          individuals to buy and sell products or services over the internet,
          acting as a digital storefront and transaction hub.
        </p>
        <p>
          E-commerce websites allow users to browse products, add items to a
          shopping cart, make secure payments, and track orders without visiting
          a physical store. They operate 24/7, providing global access to goods
          and services, and remove geographical limitations, connecting sellers
          with a worldwide audience. These platforms serve as both a digital
          storefront and a central hub for online commercial activities,
          including marketing, customer engagement, inventory management, and
          order fulfillment.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
