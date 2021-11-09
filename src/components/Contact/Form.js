import React, { Component } from "react";

export default class Form extends Component {
  sendMail = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.sendMail} className="flex-column contact-right">
        <p className="contact-title2">Send me a message</p>
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
        <button type="submit" id="submitBtn">
          Send Message
        </button>
      </form>
    );
  }
}
