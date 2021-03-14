import React from 'react';
import './css/SinglePage.css';
import moment from 'moment';
import {withRouter} from "react-router-dom";

import WeatherWidget from './components/WeatherWidget';


const averageRatings = (ratings) => {
  let sum = 0
  for (const i in ratings)
    sum += +(ratings[i])
  return (sum / ratings.length).toFixed(1)
}

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
componentDidMount() {
    const { match: { params } } = this.props;

    fetch('http://localhost:3001/hike/')
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        console.log('hike', this.props.match);
        const hikeID = this.props.match.params.id;
        console.log('dataLength', data.length);       
        for (var i = 0; i < data.length; i++)
        {  
           if(data[i]._id == hikeID)
           {   
               console.log('found', data[i]);
               this.setState( {...data[i]} );
               document.getElementById('rating-num').innerText = averageRatings(this.state.rating)
           }
        }        
      });
}
 
 
  postRating = () => {
    const ratingSelect = document.getElementById('select-rating')
    const rate = +(ratingSelect.options[ratingSelect.selectedIndex].value)
    const data = {
      rating: rate
    }
  
    fetch('http://localhost:3001/hike/' + this.state._id +'/rating', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
    .then(() => {
      this.state.rating.push(rate)
      document.getElementById('rating-num').innerText = averageRatings(this.state.rating)})
  }

  render() {
    return (
        <div className="hike">
            <div className= "header">
                <h1>{this.state.title}</h1>
                <h2>- {this.state.location}</h2>
            </div>
            <img src = {this.state.imagesrc} height="300" width="400" />
            <div className = "single-info">
                <div className = "stats">
                  <h2 className = "difficulty">Difficulty: {this.state.difficulty}</h2>
                  <h2 id = "rating">★<h2 id = "rating-num"/></h2>
                </div>
                <p id="desc">{this.state.description}</p>
                <br></br>
                <WeatherWidget city={this.state.location}/>     
                <br></br>
                <p>{this.state.tags}</p>
            </div>
            <div class="rate-me">
              <label id="rating-label" for="select-rating"><h3>Rate Me!</h3></label>
              <select id="select-rating" length="20">
                <option value="1">1 ★</option>
                <option value="2">2 ★</option>
                <option value="3">3 ★</option>
                <option value="4">4 ★</option>
                <option value="5">5 ★</option>
              </select>
              <button id="post-rating" onClick = {this.postRating}>Post Rating</button>
					  </div>
            <div className = "reviews">
                <h2 class="reviews-title"><hr />Reviews<hr /></h2>
                <a href={'/review/' + this.state._id}><button id="review-button">Write a hike review</button></a>
                <p>{this.state.reviews}</p>
            </div>
        </div>
    );
  }
}
export default withRouter(SinglePage);
