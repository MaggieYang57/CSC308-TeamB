import React from "react";
import "./css/SinglePage.css";
import { withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

import WeatherWidget from "./components/singlepage/WeatherWidget";
import ReviewTable from "./components/ReviewTable";
import SaveButton from "./components/singlepage/SaveButton"

const averageRatings = (ratings) => {
  let sum = 0;
  for (const i in ratings) sum += +ratings[i];
  return (sum / ratings.length).toFixed(1);
};

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3001/hike/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ ...data[0] });
        document.getElementById("rating-num").innerText = averageRatings(
          this.state.rating
        );
      });
  }

  postRating = () => {
    const ratingSelect = document.getElementById("select-rating");
    const rate = +ratingSelect.options[ratingSelect.selectedIndex].value;
    const data = {
      rating: rate,
    };

    fetch("http://localhost:3001/hike/" + this.state._id + "/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      this.state.rating.push(rate);
      document.getElementById("rating-num").innerText = averageRatings(
        this.state.rating
      );
    });
  };

  /* checkSaved = () => {
    if (localStorage.getItem("isLoggedIn") === "true")
    {
        const hikeID = this.state._id
        const hike = hikeID
        const user = localStorage.getItem("_id")
        const data = {
            id: hike,
            user: user
        };
        fetch("http://localhost:3001/save/" + this.state._id + "/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((res) => {
            if (res.status === 404)
                return false;
            else if (res.status === 200)
                return true;
        })
    }
    else 
      return false;
  }
 */

  render() {
    // const save = this.checkSaved()
    return (
      <div className="hike">
        <div className="header">
          <h1>{this.state.title}</h1>
          <h2>- {this.state.location}</h2>
          <a href={"/review/" + this.state._id}>
            <button id="review-button">Write a Review</button>
          </a>
          <SaveButton hike={this.state.title}/>
        </div>

        <img src={this.state.imagesrc} height="300" width="400" />
        <div className="single-info">
          <div className="stats">
            <h2 className="difficulty">Difficulty: {this.state.difficulty}</h2>
            <h2 id="rating">
              ★<h2 id="rating-num" />
            </h2>
          </div>
          <p id="desc">{this.state.description}</p>
          <br></br>
          <WeatherWidget city={this.state.location} />
          <br></br>
          <p>{this.state.tags}</p>
        </div>
        <div className="rate-me">
          <label id="rating-label" htmlFor="select-rating">
            <h3>Rate Me!</h3>
          </label>
          <select id="select-rating" length="20">
            <option value="5">5 ★</option>
            <option value="4">4 ★</option>
            <option value="3">3 ★</option>
            <option value="2">2 ★</option>
            <option value="1">1 ★</option>
          </select>
          <button id="post-rating" onClick={this.postRating}>
            Post Rating
          </button>
        </div>
        <div className="reviews">
          <h2 className="reviews-title">
            <hr />
            Reviews
            <hr />
          </h2>
          <ReviewTable reviewList={this.state.reviews} />
        </div>
      </div>
    );
  }
}

SinglePage.propTypes = {
  match: PropTypes.object,
};
export default withRouter(SinglePage);
