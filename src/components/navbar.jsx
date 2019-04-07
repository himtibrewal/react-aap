import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    console.log("Navbar- Renders !!");
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="navbar-brand">Home </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand">About</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand">Portfollio</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand">
                Cart
                <span className="badge badge-pill badge-secondary">
                  {this.props.totalCounters}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
