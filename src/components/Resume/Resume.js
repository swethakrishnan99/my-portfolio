import React from "react";
import "./Resume.css";
import image from "./swetha-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <div className="resume-container" id="resume">
      <p className="resume-title">Resume</p>
      <div className="flex-row">
        <ul>
          <li>
            <p className="edu-title">Full Stack web development</p>
            <div className="vertical-line">
              <p className="institute">Elevation Academy - PrepBytes</p>
              <p className="date">08/2021 - Present</p>
              <p className="course-title">Courses</p>
              <p className="courses">
                HTML, CSS, Bootstrap, Java script, ReactJS, NodeJS, Database
              </p>
            </div>
          </li>
          <li>
            <p className="edu-title">B.Tech</p>
            <div className="vertical-line">
              <p className="institute">
                Federal Institute of Science And Technology (FISAT)®
              </p>
              <p className="date">07/2016 - 07/2020</p>
              <p className="cgpa">CGPA : 7.11</p>
              <p className="course-title">Courses</p>
              <p className="courses">
                ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)
              </p>
            </div>
          </li>
        </ul>
        <div className="resume-profile">
          <img src={image} alt="profile-img" className="profile-img" />
          <div className="profile-contact">
            <a
              href="https://www.linkedin.com/in/swethakrishnan99"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
            <a href="https://github.com/swethakrishnan99" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.facebook.com/swetha.krishnan.9406/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
