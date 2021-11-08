import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <nav>
      <p>Swetha Krishnan</p>
      <ul className="navigation">
        <li>
          <a href="#introduction">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
