/* eslint-disable no-unused-vars */
import React from "react";
import AdminNavBar from "./AdminNavBar";
import UserNavBar from "./UserNavBar";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_type: localStorage.getItem("user_type") };
  }

  render() {
    let navbar;
    if (this.state.user_type === "admin") {
      navbar = <AdminNavBar />;
    } else if (this.state.user_type === "user") {
      navbar = <UserNavBar />;
    } else {
      navbar = 
        <div>
          <nav
            className="navbar navbar-dark "
            style={{ backgroundColor: "#2c6674" }}
          >
            {/* 
                  TODO: This throws console error in browser. We need to fix this later. */}
            <a className="navbar-brand" href="/">
              <form className="form-inline " style={{ marginLeft: "-11vw" }}>
                <img
                  className="nav-link"
                  src="/images/SH.png"
                  style={{ width: 200, height: 53, borderRadius: 0 }}
                />
                <a className="nav-link text-light" href="/hikeFinder">
                  HikeFinder
                </a>
              </form>
            </a>
            <form
              className="form-inline"
              style={{ marginRight: "2vw" }}
              href="/"
            >
              <a
                className="btn btn-outline-light my-2 my-sm-0 m-3 border border-white"
                href="/login"
              >
                Login
              </a>
              <a
                className="btn btn-outline-light my-2 my-sm-0 border border-white"
                href="/signup"
              >
                Sign Up
              </a>
            </form>
          </nav>
        </div>
    }

    return <div>{navbar}</div>
  }
}

export default Navigation;
