/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "./css/SinglePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

import WeatherWidget from "./components/singlepage/WeatherWidget";
import ReviewTable from "./components/ReviewTable";
import SaveButton from "./components/singlepage/SaveButton"

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

const averageRatings = (ratings) => {
  let sum = 0;
  for (const i in ratings) sum += +ratings[i];
  return (sum / ratings.length).toFixed(1);
};

const averageDifficulty = (difficulty) => {
  let sum = 0;
  for (const i in difficulty) sum += +difficulty[i];
  return (sum / difficulty.length).toFixed(1);
};

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: [],
      saved: false,
      checkedSave: false,
      error: false
    };
  }

  componentDidMount() {
    fetch(`${backendHostURL}/hike/${this.props.match.params.id}`)
      .then((res) => {
        if(res.status === 404)
          this.setState({error: true})
        else
        {
          res.json().then((data) => {
            this.setState({ data: data[0] });
            document.getElementById("rating-num").innerText = averageRatings(
              this.state.data.rating
            );
            document.getElementById("diff-num").innerText = averageDifficulty(
              this.state.data.difficulty
            );
          })
        }
      })
    this.checkSaved()
    this.state.checkedSave = true
    console.log("checked save")
  }

  async checkSaved() {
    if (localStorage.getItem("isLoggedIn") === "true")
    {
      await fetch(`${backendHostURL}/login/${localStorage.getItem("_id")}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ user: this.state.user.concat(data[0]) });
          if(this.state.user.length > 0)
          {          
            const hike = this.state.data._id
            const length = this.state.user[0].saved_trails.length
            for(let i = 0; i < length; i++)
            {
                const curr = this.state.user[0].saved_trails[i]
                if (curr === hike)
                {
                  this.setState({saved: true})
                }
            }
          }
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  postRating = () => {
    if (localStorage.getItem("isLoggedIn") === "false")
            window.location.href = "/login";
    else{
      const ratingSelect = document.getElementById("select-rating");
      const rate = +ratingSelect.options[ratingSelect.selectedIndex].value;
      const data = {
        rating: rate,
      };

      fetch(`${backendHostURL}/hike/${this.state.data._id}/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        this.state.data.rating.push(rate);
        document.getElementById("rating-num").innerText = averageRatings(
          this.state.data.rating
        );
      });
    }
  };
  
  render() {
    const error = this.state.error
    if (error === true)
    {
      return(
        <div>
          <h1 className="text-center" style={{margin:'0', marginTop:'50px'}}>404 Hike Not Found</h1>
          <p style={{marginTop:'20px',fontSize:'25px'}}>Return to <Link to="/">Homepage</Link></p>
        </div>
      )
    }
    else{
      return (
        <div className="hike">
          <div className="header">
            <h1>{this.state.data.title}</h1>
            <h2>- {this.state.data.location}</h2>
            <a href={localStorage.getItem("isLoggedIn") === "true" ? "/review/" + this.state.data._id : "/login"}>
              <button id="review-button">Write a Review</button>
            </a>
            {this.state.checkedSave === true ? <SaveButton hike={this.state.data._id} saved = {this.state.saved} /> :
                <h3>Loading</h3>
                }
          </div>

          <img src={this.state.data.imagesrc} height="300" width="400" />
          <div className="single-info">
            <div className="stats">
              <div className="difficulty-box">
                <h2 id="difficulty">Difficulty:</h2>
                <h2 id="diff-num"/>
              </div>
              <h2 id="rating">
                ★<h2 id="rating-num" />
              </h2>
            </div>
            <p id="desc">{this.state.data.description}</p>
            <br></br>
            <WeatherWidget city={this.state.data.location} />
            <br></br>
            <p>{this.state.data.tags}</p>
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
            <ReviewTable reviewList={this.state.data._id} route={"hike"} />
          </div>
        </div>
      );
    }
  }
}

SinglePage.propTypes = {
  match: PropTypes.object,
};
export default withRouter(SinglePage);
