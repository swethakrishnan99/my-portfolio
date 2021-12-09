import React, { Component } from "react";
import "./MyPortfolio.css";
import sahara from "./sahara.png";
import clock from "./clock.png";
import todo from "./todo.png";
import blog_project from "./react_blog.png";

export default class MyPortfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <p className="portfolio-title">My Portfolio</p>
        <div>
          <a
            href="https://swethakrishnan99.github.io/Todo_App_JS/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={todo} alt="todo project" className="project-img" />
          </a>
          <a
            href="https://swethakrishnan99.github.io/digital_clock/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={clock} alt="clock project" className="project-img" />
          </a>
          <a
            href="https://swethakrishnan99.github.io/assessment_6/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sahara} alt="sahara website" className="project-img" />
          </a>
          <a
            href="https://react-blog-app-by-swetha.vercel.app/home"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={blog_project}
              alt="blog website"
              className="project-img"
            />
          </a>
        </div>
      </div>
    );
  }
}
