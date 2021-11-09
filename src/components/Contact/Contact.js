import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container-outer" id="contact">
        <h2>Contact Me</h2>
        <div className="flex-row contact-container-inner">
          <div className="flex-column contact-left">
            <p className="contact-title2">Let's connect</p>
            <span className="contact-details">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              &ensp;swethakrishnan7399@gmail.com
            </span>
            <span className="contact-details">
              <FontAwesomeIcon icon={faPhoneVolume} className="contact-icon" />
              &ensp;+91-8547702433
            </span>
            <span className="contact-details">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              &ensp;PSRA 10, Perole, Nileshwar, PIN:671314
            </span>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}
