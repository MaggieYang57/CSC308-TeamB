import React from 'react';
import './css/SinglePage.css';
import moment from 'moment';

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

  getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.location+'&units=imperial&appid=9bb2aad28619e8c45992b312cb325c36')
  .then(res => res.json())
  .then(data => {
    if(data)
    {
     var icon = JSON.stringify(data.weather[0].icon);
     icon = icon.replace("\"","");
     icon = icon.replace("\"","");
    
     document.getElementById("weatherTempLabel").innerHTML = 'Current Temperature: ' + data.main.temp + '&#176; F <br> Feels like: ' + data.main.feels_like + '&#176; F' + '<br> Day Low: ' + data.main.temp_min + '&#176; F <br> Day High: ' + data.main.temp_max + '&#176; F' + '<br>Pressure: ' + data.main.pressure + ' hPa <br> Humidity: ' + data.main.humidity + '%';
     document.getElementById("weatherDescription").innerHTML = data.weather[0].main + ': ' + data.weather[0].description;
     document.getElementById("windDescription").innerHTML = 'Wind: Speed: ' + data.wind.speed + ' mph Direction: ' + data.wind.deg + '&#176;';
     document.getElementById("sunriseSunsetDescription").innerHTML = 'Sunrise: ' + moment.unix(data.sys.sunrise).format('LT') + ' Sunset: ' + moment.unix(data.sys.sunset).format('LT');
     document.getElementById("weatherIcon").src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
     document.getElementById("weatherIcon").style.margin = '0 auto';;
     return data;
     }
     });
  }

  componentDidMount() {
    fetch('http://localhost:3001/hike/')
      .then(res => res.json())
      .then(data => {
        this.setState({ ...data[1] });
        this.getWeather();
      });
  }
  
  postRating = () => {
    const ratingSelect = document.getElementById('select-rating')
    const rating = +(ratingSelect.options[ratingSelect.selectedIndex].value)
    const data = {
      id: this.state._id,
      rating: rating
    }
  
    fetch('http://localhost:3001/hike/60388d0f23c5fd01cb21ed6b', {
      method: 'POST',
      body: JSON.stringify(data)})
    .then(() => {
      this.state.rating.push(rating)
      document.getElementById('rating').innerText = averageRatings(this.state.rating)})
  }

  render() {
    return (
        <div className="hike">
            <div className= "header">
                <h1>{this.state.title}</h1>
                <h2>- {this.state.location}</h2>
            </div>
            <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="300" />
            <div className = "single-info">
                <div className = "stats">
                  <h2 className = "difficulty">Difficulty: {this.state.difficulty}</h2>
                  <h2 id = "rating">★{this.state.rating}</h2>
                </div>
                <p id="desc">{this.state.description}</p>
                <br></br>     
                <div className = "boxed">
                  <h3>Current Weather Conditions</h3>
                  <img id="weatherIcon" height="100" />
                  <p id="weatherTempLabel"></p>
                  <p id="weatherDescription"></p>
                  <p id="windDescription"></p>
                  <p id="sunriseSunsetDescription"></p>
                </div>
                <br></br>
                <p>{this.state.tags}</p>
            </div>
            <div class="rate-me">
              <label id="rating-label" for="select-rating"><h3>Rate Me!</h3></label>
              <select id="select-rating" length='20px'>
                <option value="1">1 ★</option>
                <option value="2">2 ★</option>
                <option value="3">3 ★</option>
                <option value="4">4 ★</option>
                <option value="5">5 ★</option>
              </select>
              <button id="post-rating" onClick = {this.postRating}>Post Rating</button>
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
