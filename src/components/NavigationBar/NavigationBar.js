import "./NavigationBar.css";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export default class NavigationBar extends Component {
  state = { isToggleOn: false };
  toggle = () => {
    this.setState((prevState) => {
      return { isToggleOn: !prevState.isToggleOn };
    });
  };
  render() {
    return (
      <div className="nav-head">
        <div className="nav-fixed">
          <p>Swetha Krishnan</p>
          <nav className="nav-bar">
            <Menu />
          </nav>
          <button className="menu-btn" onClick={this.toggle}>
            {this.state.isToggleOn ? (
              <FontAwesomeIcon icon={faTimes} className="menu-icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="menu-icon" />
            )}
          </button>
        </div>
        {this.state.isToggleOn && (
          <nav className="nav-bar-colum">
            <Menu toggle={this.toggle} />
          </nav>
        )}
      </div>
    );
  }
}
