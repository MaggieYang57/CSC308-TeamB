import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className = "navbar">
                <h2>SLO HIKES</h2>
                    <Link className="navbar-link-left" to="/singlepage">*Single Hike*</Link>
                    <Link className="navbar-link-left" to="/">Profile</Link>
                    <Link className="navbar-link-left" to="/">Saved</Link>
                    <Link className="navbar-link-left" to="/">HikeFinder</Link>
                    <Link className="navbar-link-right" to="/">SIGN IN</Link>
                    <Link className="navbar-link-right" to="/">REGISTER</Link>

            </div>
        );
    }
}

export default NavBar;
