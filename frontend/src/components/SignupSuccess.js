import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup.css";

function SignupSuccess(props) {
  return (
    <div className="signup-form">
      <div id="title-signup">
        <b
          className="text text-center "
          style={{ fontSize: 40, color: "#2C6674" }}
        >
          Successfully Signed Up!
        </b>
      </div>
      <p style={{ marginTop: 20 }}>
        Please <Link to="/login">log in </Link>to continue
      </p>
    </div>
  );
}

export default SignupSuccess;
