import React from "react";
import PropTypes from "prop-types";
import "./css/Review.css";
import "./css/SinglePage.css";
import { withRouter, Link } from "react-router-dom";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`${backendHostURL}/hike/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ...data[0] });
      });
  }

  submitReview = () => {
    const userName = document.getElementById("email").value;
    const reviewBody = document.getElementById("review-body").value;
    const accessibility = document.getElementById("accessibility-rating").options[document.getElementById("accessibility-rating").selectedIndex].value;
    const difficulty = document.getElementById("difficulty-rating").options[document.getElementById("difficulty-rating").selectedIndex].value;
    const freeParking = document.querySelector("#free-parking").checked
    const dogFriendly = document.querySelector("#dog-friendly").checked
    const horseRiding = document.querySelector("#horse-friendly").checked
    const mountainBiking = document.querySelector("#bike-friendly").checked

    const review = {
      user_email: userName,
      body: reviewBody,
      hike_id: this.state._id,
      difficulty: difficulty,
      accessibility: accessibility,
      dog_friendly: dogFriendly,
      horseback_riding: horseRiding,
      mountain_biking: mountainBiking,
      free_parking: freeParking
    };

    fetch(`${backendHostURL}/review/hike/${this.state._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    }).then(() => {
      this.state.reviews.push(review);
    });
  };

  render() {
    return (
      <div className="signup-form">
        <div className="title">
          <b
            className="text text-center "
            style={{ fontSize: 50, color: "#2C6674" }}
          >
            Review for:
          </b>
        </div>
        <p id="hike-title">{this.state.title}</p>
        <p> - {this.state.location}</p>
        <form onSubmit={this.submitReview} action="/reviewSuccess">
          <p id="input" style={{ marginLeft: "45px" }}>
            Your email:
          </p>
          
          <input
            type="text"
            value={localStorage.getItem("email")}
            className="account-info"
            id="email"
            size="50"
            style={{ width: "500px" }}
            disabled
          />

          <div className="rating">
            <label htmlFor="difficulty-rating">
              <p id="input" style={{ marginLeft: "-10px" }}>
                Difficulty:{" "}
              </p>
            </label>
            <select id="difficulty-rating">
              <option value="5">5 ★</option>
              <option value="4">4 ★</option>
              <option value="3">3 ★</option>
              <option value="2">2 ★</option>
              <option value="1">1 ★</option>
            </select>
            <label htmlFor="accessibility-rating">
              <p id="input">Accessibility: </p>
            </label>
            <select id="accessibility-rating" length="20">
              <option value="5">5 ★</option>
              <option value="4">4 ★</option>
              <option value="3">3 ★</option>
              <option value="2">2 ★</option>
              <option value="1">1 ★</option>
            </select>
          </div>

          <div>
            <p id="input" style={{ marginLeft: "45px" }}>
              Activities permitted:
            </p>
            <label >
              <span style={{ marginLeft: "45px" }}>dog-friendly</span>
              <input id="dog-friendly" type="checkbox" value="1" />
            </label>
            <label >
              <span>horse-friendly</span>
              <input id="horse-friendly" type="checkbox" value="1" />
            </label>
            <label >
              <span>bike-friendly</span>
              <input id="bike-friendly" type="checkbox" value="1" />
            </label>
            <label >
              <span>free-parking</span>
              <input id="free-parking" type="checkbox" />
            </label>
          </div>

          <p id="input" style={{ marginLeft: "45px" }}>
            Review:
          </p>
          <textarea
            placeholder="Enter your review here..."
            name="review-body"
            id="review-body"
            className="review-body"
            wrap="hard"
            style={{ width: "500px", height: "200px" }}
            required
          ></textarea>

          <input
            id="signup-button"
            type="submit"
            value="SUBMIT A REVIEW"
            style={{ marginLeft: "45px" }}
          />
          <Link to={"/hike/" + this.state._id}> Go Back to the Hike Page </Link>
        </form>
      </div>
    );
  }
}

Review.propTypes = {
  match: PropTypes.object,
};
export default withRouter(Review);
