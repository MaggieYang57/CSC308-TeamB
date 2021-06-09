import React, { Component } from "react";
import { logout } from "./LogoutFunc";

class UserNavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark "
          style={{ backgroundColor: "#2c6674" }}
        >
          <div className="navbar-brand">
            <form className="form-inline " style={{ marginLeft: "-11vw" }}>
              <a href="/">
                <img
                  className="nav-link"
                  src="/images/SH.png"
                  style={{ width: 200, height: 53, borderRadius: 0 }}
                />
              </a>
              <a className="nav-link text-light" href="/profile">
                Profile
              </a>
              <a className="nav-link text-light" href="/hikeFinder">
                HikeFinder
              </a>
            </form>
          </div>
          <form
            className="form-inline"
            style={{ marginRight: "2vw" }}
            action="/logout"
          >
            <button
              className="btn btn-outline-light my-2 my-sm-0 m-3 border border-white"
              onClick={logout}
            >
              Logout
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default UserNavBar;
