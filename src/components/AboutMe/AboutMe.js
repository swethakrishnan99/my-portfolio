import React, { Component } from "react";
import image from "./portfolio.png";
import std from "./std_with_lap.png";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-container flex-row" id="aboutMe">
        <div>
          <img src={std} alt="" />
        </div>
        <div>
          <p className="about-title">About Me</p>
          <p className="para">
            I’m a front-end developer with a deep knowledge of Html CSS and
            javascript.
          </p>
          <p className="para">
            I enjoy turning complex problems into simple, beautiful and
            intuitive design. My hobbies are cooking and gardening
          </p>
          <div className="tools">
            <p className="tools-title">Languages/Library/Technology</p>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    );
  }
}
