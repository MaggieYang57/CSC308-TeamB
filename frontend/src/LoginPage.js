/* eslint-disable node/handle-callback-err */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import "./css/LoginPage.css";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      RedirectLoggedUser: false,
      userType: "",
      emptyUser: false,
      email: "",
      password: "",
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  isNotLoggedIn = () => {
    this.setState({ isLoggedIn: false });
  };

  isLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };

  passwordVisibility = () => {
    const password = document.getElementById("password");
    password.type =
      password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
  };

  changeUserType = (event) => {
    this.setState({ userType: event.target.value, emptyUser: false });
  };

  componentDidMount() {
    const path = window.location.pathname.split("/");

    if (path.length === 3) {
      if (path[2] === "admin") {
        document.getElementById("admin").checked = true;
        this.setState({ userType: path[2] });
      } else if (path[2] === "user") {
        document.getElementById("user").checked = true;
        this.setState({ userType: path[2] });
      }
    }
  }

  login = (e) => {
    e.preventDefault();

    if (this.state.userType === "") {
      this.setState({ emptyUser: true });
      return;
    }

    const user = {
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType,
    };

    this.mongoLogin(user);
  };

  mongoLogin = (user) => {
    const _this = this;
    fetch(`${backendHostURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 404) {
          _this.setState({ error: true });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        _this.storeUser(data);
        this.props.history.push("/profile");
      })
      .catch((err) => {
        console.log("Error");
        _this.setState({ error: true });
      });
  };

  storeUser(user) {
    localStorage.setItem("email", user.user_email);
    localStorage.setItem("userType", JSON.stringify(user.userType));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("_id", user._id);
    this.props.onUserChange(user.userType);
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.login}>
        <div className="title">
          {window.location.pathname.split("/")[2] === "admin" ? "Admin " : ""}
          {window.location.pathname.split("/")[2] === "user" ? "User " : ""}
          <b
            className="text text-center "
            style={{ fontSize: 50, color: "#2C6674" }}
          >
            Log In
          </b>
        </div>
        <div id="cta-type">
          <div id="admin">
            <input
              type="radio"
              id="admin"
              name="cta"
              value="admin"
              onChange={this.changeUserType}
              checked={null}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div id="user">
            <input
              type="radio"
              id="user"
              name="cta"
              value="user"
              onChange={this.changeUserType}
              checked={null}
            />
            <label htmlFor="user">User</label>
          </div>
        </div>
        <p className="input-email">Email</p>
        <input
          type="text"
          id="email"
          size="50"
          style={{ width: "500px" }}
          onChange={this.handleChange}
        />
        <br />
        <p className="input-password">Password</p>
        <div className="link">
          <Link to="/reset-password">Forgot Password?</Link>
        </div>
        <input
          type="password"
          id="password"
          size="50"
          style={{ width: "500px" }}
          onChange={this.handleChange}
        />
        <br />
        <label className="password-security">
          <input
            type="checkbox"
            id="password-visibility"
            onClick={() => this.passwordVisibility()}
          />
          Show Password
        </label>
        <br />
        {this.state.emptyUser && (
          <div className="error">Select the type of user</div>
        )}
        {this.state.error && (
          <div className="error">Invalid email or password</div>
        )}
        <button id="login-button" type="submit">
          LOG IN
        </button>
        <p>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  userType: PropTypes.object,
  onUserChange: PropTypes.func,
};
export default withRouter(Login);
