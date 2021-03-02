import React from 'react';
import '../css/SinglePage.css';
import moment from 'moment';

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
     var icon = JSON.stringify(data.weather[0].icon);
     icon = icon.replace("\"","");
     icon = icon.replace("\"","");
    
     document.getElementById("weatherTempLabel").innerHTML = data.main.temp + '&#176; F';
     document.getElementById("weatherDescription").innerHTML = data.weather[0].main + ': ' + data.weather[0].description;
     document.getElementById("windDescription").innerHTML = 'Wind: Speed: ' + data.wind.speed + ' Direction: ' + data.wind.deg + ' Gusts: ' + data.wind.gust;
     document.getElementById("sunriseSunsetDescription").innerHTML = 'Sunrise: ' + moment.unix(data.sys.sunrise).format('LT') + ' Sunset: ' + moment.unix(data.sys.sunset).format('LT');
     document.getElementById("weatherIcon").src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
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
                <div className = "boxed">
                <p>Current Weather:</p>
                <p id="weatherTempLabel"></p>
                <p id="weatherDescription"></p>
                <p id="windDescription"></p>
                <p id="sunriseSunsetDescription"></p>
                <img id="weatherIcon" src = "" height="100" />
                </div>
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
