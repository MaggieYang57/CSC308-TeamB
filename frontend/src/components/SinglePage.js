import React, {useState, useEffect} from 'react';
import '../css/SinglePage.css';

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.location+'&units=imperial&appid=9bb2aad28619e8c45992b312cb325c36')
  .then(res => res.json())
  .then(data => {
    if(data)
    {
     document.getElementById("weatherTempLabel").innerHTML = data.main.temp + '&#176; F';
     return data;
     }
     });
  }


  componentDidMount() {
    fetch('http://localhost:3001/hike/')
      .then(res => res.json())
      .then(data => {
        this.setState({ ...data[0] });
        this.getWeather();
      });
  }

  render() {
    return (
        <div className="hike">
            <div className= "header">
                <h1>{this.state.title}</h1>
                <h2>- {this.state.location}</h2>
            </div>
            <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="300" />
            <div className = "info">
                <div className = "stats">
                    <h2 className = "difficulty">{this.state.difficulty}</h2>
                    <h2 className = "rating">★{this.state.rating}</h2>
                </div>
                <p className="desc">{this.state.description}</p>
                <br></br>
                <p>Current Weather:</p>
                <p id="weatherTempLabel"></p>
                <br></br>
                <p>{this.state.tags}</p>
            </div>
            <div className = "reviews">
                <h2>Reviews</h2>
                <p>{this.state.reviews}</p>
            </div>
        </div>
    );
  }
}
export default SinglePage;
