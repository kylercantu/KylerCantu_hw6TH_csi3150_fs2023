import React from "react";
import "./hero.css";
import backgroundImg from "../../assets/HeroSection-bg-image.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <img src={backgroundImg} alt="background" />
      <div className="heading-container">
        <h1 className="main-header">Travel Blog</h1>
        <h2 className="subheader">
          Welcome to the travel blog! Here you will find information about
          London, San Francisco, and Tokyo!
        </h2>
      </div>
    </div>
  );
}

export default Hero;
