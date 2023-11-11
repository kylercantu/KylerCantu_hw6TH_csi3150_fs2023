import React from "react";
import "./travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="city-container">
      <h1 className="place-heading">{props.heading}</h1>
      <div className="image-container">
        <img src={props.img1} alt="" className="image1" />
        <img src={props.img2} alt="" className="image2" />
        <img src={props.img3} alt="" className="image3" />
      </div>
      <p className="place-description">{props.description}</p>
    </div>
  );
};

export default TravelBlog;
