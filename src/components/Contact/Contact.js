import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container-outer" id="contact">
        <h2>Contact Me</h2>
        <div className="flex-row contact-container-inner">
          <div className="flex-column contact-left">
            <h3>Let's contact</h3>
            <p></p>
          </div>
          <div className="flex-column contact-right">
            <form action="#">
              <h3>Send me a message</h3>
              <label htmlFor="name">
                First & last Name <sup>*</sup>
              </label>
              <input type="text" name="name" />
              <label htmlFor="phone">
                Phone number <sup>*</sup>
              </label>
              <input type="tel" name="phone" />
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input type="email" name="email" />
              <label htmlFor="message">
                Message <sup>*</sup>
              </label>
              <textarea
                name="message"
                cols="30"
                rows="8"
                placeholder="Your message here..."
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
