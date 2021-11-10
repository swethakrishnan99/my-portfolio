import React, { Component } from "react";
// import emailjs from "emailjs-com";

export default class Form extends Component {
  state = { name: "", phone: "", email: "", message: "" };
  handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_dz0pnas",
    //     "template_uyq34z6",
    //     "#form",
    //     "user_5yLUjqvFHV4t5VuL03tp1"
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
    this.setState({ name: "", phone: "", email: "", message: "" });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex-column contact-right"
        id="form"
      >
        <p className="contact-title2">Send me a message</p>
        <label htmlFor="name">
          First & last Name <sup>*</sup>
        </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="phone">
          Phone number <sup>*</sup>
        </label>
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          title="please enter valid mobile number"
          value={this.state.phone}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="email">
          Email address <sup>*</sup>
        </label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="message">
          Message <sup>*</sup>
        </label>
        <textarea
          name="message"
          cols="30"
          rows="8"
          placeholder="Your message here..."
          value={this.state.message}
          onChange={this.handleChange}
          required
        ></textarea>
        <button type="submit" id="submitBtn">
          Send Message
        </button>
      </form>
    );
  }
}
