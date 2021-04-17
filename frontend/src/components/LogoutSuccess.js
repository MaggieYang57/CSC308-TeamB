import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup.css";

function LogoutSuccess(props) {
  return (
    <div className="signup-form">
      <div id="title-signup">
        <b className="text text-center " style={{ fontSize: 40, color: "#2C6674" }}>
          Logout Filler
        </b>
      </div>
      <p style={{ marginTop: 20 }}>
        Back to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

export default LogoutSuccess;
