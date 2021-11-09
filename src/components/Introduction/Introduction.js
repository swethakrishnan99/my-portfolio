import React from "react";
import "./Introduction.css";
import resume from "./Resume.pdf";

export default function Introduction() {
  return (
    <div className="flex" id="introduction">
      <div className="intro">
        <h1 className="intro-name">Hi, I am Swetha Krishnan.</h1>
        <h1 className="intro-profession">A Front-end Developer</h1>
        <p>Get ready to turn ideas into reality</p>
        <a href="#contact">
          <button className="btn" id="hireMe">
            Hire Me
          </button>
        </a>
        <a href={resume} download="SWETHA's Resume" target="_blank">
          <button className="btn" id="getResume">
            Get Resume
          </button>
        </a>
      </div>
      <div>{/* <img src={image} height={500} width={300} /> */}</div>
    </div>
  );
}
