import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div className="hand-hand-icon">
          <img src={hand_icon} alt="hand icon" />
          <p>New</p>
        </div>
        <p>Collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="arrow icon " />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero right" />
      </div>
    </div>
  );
};

export default Hero;
