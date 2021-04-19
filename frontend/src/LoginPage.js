/* eslint-disable node/handle-callback-err */
/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route, Redirect, Link, withRouter } from "react-router-dom";
import env from "react-dotenv";
import "./css/LoginPage.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      RedirectLoggedUser: false,
      user_type: this.props.match.params.user
        ? this.props.match.params.user
        : "",
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
    this.setState({ user_type: event.target.value, emptyUser: false });
  };

  componentDidMount() {
    const path = window.location.pathname.split("/");

    if (path.length === 3) {
      if (path[2] === "admin") {
        document.getElementById("admin").checked = true;
        this.setState({ user_type: path[2] });
      } else if (path[2] === "user") {
        document.getElementById("user").checked = true;
        this.setState({ user_type: path[2] });
      }
    }
  }

  login = (e) => {
    e.preventDefault();

    if (this.state.user_type == "") {
      this.setState({ emptyUser: true });
      return;
    }

    const user = {
      email: this.state.email,
      password: this.state.password,
      user_type: this.state.user_type,
    };

    this.mongoLogin(user);
  };

  mongoLogin = (user) => {
    const _this = this;
    fetch("http://localhost:3001/login", {
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

  storeUser = (user) => {
    const date = new Date();
    localStorage.setItem("email", user.email);
    localStorage.setItem("user_type", this.state.user_type);
    localStorage.setItem("isLoggedIn", true);
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

export default withRouter(Login);
