import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container" id="resume">
      <h2>Resume</h2>
      <ul>
        <li>
          <h3>Full Stack web development</h3>
          <div className="vertical-line">
            <h4>Elevation Academy - PrepBytes</h4>
            <p className="date">08/2021 - Present</p>
            <p className="course-title">Courses</p>
            <p className="courses">
              HTML, CSS, Bootstrap, Java script, ReactJS, NodeJS, Database
            </p>
          </div>
        </li>
        <li>
          <h3>B.Tech</h3>
          <div className="vertical-line">
            <h4>Federal Institute of Science And Technology (FISAT)®</h4>
            <p className="date">07/2016 - 07/2020</p>
            <p className="cgpa">CGPA : 7.11</p>
            <p className="course-title">Courses</p>
            <p className="courses">
              ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
