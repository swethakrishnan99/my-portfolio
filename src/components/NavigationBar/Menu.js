import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <ul className="nav-bar">
        <li>
          <a href="#introduction" onClick={this.props.toggle}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutMe" onClick={this.props.toggle}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={this.props.toggle}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" onClick={this.props.toggle}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={this.props.toggle}>
            Contact
          </a>
        </li>
      </ul>
    );
  }
}
