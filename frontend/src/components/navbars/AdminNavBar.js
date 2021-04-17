/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "./LogoutFunc";

class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark "
          style={{ backgroundColor: "#2c6674" }}
        >
          <a className="navbar-brand" href="/">
            <form className="form-inline " style={{ marginLeft: "-11vw" }}>
              <img
                className="nav-link"
                src="/images/SH.png"
                style={{ width: 200, height: 53, borderRadius: 0 }}
              />
              <a className="nav-link text-light" href="/profile">
                Profile
              </a>
              <a className="nav-link text-light" href="/manage">
                Manage
              </a>
              <a className="nav-link text-light" href="/hikeFinder">
                HikeFinder
              </a>
            </form>
          </a>
          <form
            className="form-inline"
            style={{ marginRight: "2vw" }}
            action="/logout"
          >
            <button
              className="btn btn-outline-light my-2 my-sm-0 m-3 border border-white"
              onClick={logout()}
            >
              Logout
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default AdminNavBar;
