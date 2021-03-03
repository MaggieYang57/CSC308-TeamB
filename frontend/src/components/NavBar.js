import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div id="nav-left">
          <h2 ><Link className="logo" to="/">SLO HIKES</Link></h2>
          <Link className="nav-link" to="/singlepage">*Single Hike*</Link>
          <Link className="nav-link" to="/">Profile</Link>
          <Link className="nav-link" to="/">Saved</Link>
          <Link className="nav-link" to="/hikeFinder">HikeFinder</Link>
        </div>
        <div id="nav-right">
          <Link className="nav-button" to="/">Sign In</Link>
          <Link className="nav-button" to="/">Register</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
