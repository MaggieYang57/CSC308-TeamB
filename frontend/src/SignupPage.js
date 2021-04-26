import React, { Component } from "react";
import "./css/Signup.css";
import { Link, withRouter } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: "",
      passwordValidated: true,
      personalData: {
        first_name: "",
        last_name: "",
        user_email: "",
        password: "",
      },
      emptyUser: false,
    };
  }

  // updates personal data
  handleChange = (event) => {
    const personalData = this.state.personalData;
    personalData[event.target.id] = event.target.value;

    this.setState({ personalData: personalData });
  };

  changeUserType = (event) => {
    this.setState({ user_type: event.target.value, emptyUser: false });
  };

  validatePassword = (event) => {
    const confirmPassword = event.target.value;
    const password = this.state.personalData.password;
    if (password !== confirmPassword) {
      this.setState({ passwordValidated: false });
    } else {
      this.setState({ passwordValidated: true });
    }
  };

  signup = (e) => {
    e.preventDefault();
    if (this.state.passwordValidated === true) {
      const userType = this.state.user_type;
      if (userType === "admin" || userType === "user") {
        this.addAccount();
      } else {
        this.setState({ emptyUser: true });
      }
    }
  };

  addAccount = () => {
    if (this.state.user_type === "admin") {
      this.addAdmin(this.state.personalData);
    } else if (this.state.user_type === "user") {
      this.addUser(this.state.personalData);
    }
  };

  addAdmin = (personalData) => {
    const newAdmin = {
      first_name: personalData.first_name,
      last_name: personalData.last_name,
      user_email: personalData.user_email,
      password: personalData.password,
      user_type: "admin",
    };

    this.mongo_signup(newAdmin);
  };

  addUser = (personalData) => {
    const newUser = {
      first_name: personalData.first_name,
      last_name: personalData.last_name,
      user_email: personalData.user_email,
      password: personalData.password,
      user_type: "user",
    };
    this.mongoSignup(newUser);
  };

  mongoSignup = (user) => {
    const _this = this;
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log("User added");

      if (res.status === 404) {
        _this.setState({ error: true });
      } else {
        _this.props.history.push("/signupSuccess");
      }
    });
  };

  render() {
    return (
      <div className="signup-form">
        <div id="title-signup">
          <b
            className="text text-center "
            style={{ fontSize: 50, color: "#2C6674" }}
          >
            Sign Up
          </b>
        </div>
        <form onSubmit={this.signup}>
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

          <div className="input-name">
            <p id="first-name">First Name</p>
            <p id="last-name">Last Name</p>
          </div>
          <div id="cta-type" style={{ marginBottom: "0px" }}>
            <input
              type="text"
              id="first_name"
              className="user-name"
              style={{ width: "245px" }}
              onChange={this.handleChange}
              size="25"
              required
            />
            <input
              type="text"
              id="last_name"
              className="user-name"
              style={{ width: "245px" }}
              onChange={this.handleChange}
              size="25"
              required
            />
          </div>
          <p id="input">Email</p>
          <input
            type="email"
            className="account-info"
            id="user_email"
            size="50"
            style={{ width: "500px" }}
            onChange={this.handleChange}
            required
          />
          <p id="input">Password</p>
          <input
            type="password"
            className="account-info"
            id="password"
            style={{ width: "500px" }}
            onChange={this.handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number, one uppercase, and one lowercase letter, and at least 6 or more characters long"
            size="50"
            required
          />
          <br />
          <label id="pass-label" htmlFor="password">
            (Must contain at least one number, one uppercase, and one lowercase{" "}
            <br />
            letter, and at least 6 or more characters long)
          </label>
          <p id="input">Confirm Password</p>
          <input
            type="password"
            className="account-info"
            id="password-confirm"
            size="50"
            style={{ width: "500px" }}
            onChange={this.validatePassword}
            required
          />
          <br />
          <section>
            {this.state.passwordValidated === false && (
              <div>
                <p id="confirm-error">
                  Confirmation password does not match password!
                </p>
              </div>
            )}
          </section>
          {this.state.emptyUser && (
            <div className="signup-error">Select the type of user</div>
          )}
          {this.state.error && (
            <div className="signup-error">Email already taken</div>
          )}
          <input id="signup-button" type="submit" value="CREATE ACCOUNT" />
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
