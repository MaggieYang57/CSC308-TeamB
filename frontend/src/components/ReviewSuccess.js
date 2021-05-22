import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup.css";

function ReviewSuccess(props) {
  return (
    <div className="signup-form">
      <div id="title-signup">
        <b
          className="text text-center "
          style={{ fontSize: 40, color: "#2C6674" }}
        >
          Your review is added!
        </b>
      </div>
      <p style={{ marginTop: 20 }}>
        Back to <Link to="/">home page</Link>
      </p>
    </div>
  );
}

export default ReviewSuccess;
