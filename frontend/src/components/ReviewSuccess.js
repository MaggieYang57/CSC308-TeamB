import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup.css";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL
let hikeIdPath;

if (backendHostURL === "http://localhost:3001")
  hikeIdPath = window.location.pathname.split('/')[2]
else if (backendHostURL === "https://slo-hikes-backend.herokuapp.com")
  hikeIdPath = window.location.href.split('/')[4]

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
        Back to <Link to={`/hike/${hikeIdPath}`}> hike page</Link>
      </p>
    </div>
  )
}

export default ReviewSuccess;
