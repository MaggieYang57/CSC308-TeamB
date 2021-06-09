import React from "react";
import moment from "moment";
import { PropTypes } from 'prop-types';
import "../../css/WeatherWidget.css";

function WeatherWidget(props) {
  if (props.city) {
    getWeather(props.city);
  }

  function getWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=9bb2aad28619e8c45992b312cb325c36"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          let icon = JSON.stringify(data.weather[0].icon);
          icon = icon.replace('"', "");
          icon = icon.replace('"', "");

          document.getElementById("weatherTempLabel").innerHTML =
            "<b>Current Temperature: </b>" +
            data.main.temp +
            " &#176;F <br><b> Feels like: </b>" +
            data.main.feels_like +
            " &#176;F" +
            "<br><b> Day Low: </b>" +
            data.main.temp_min +
            " &#176;F <br><b> Day High: </b>" +
            data.main.temp_max +
            " &#176;F" +
            "<br><b>Pressure: </b>" +
            data.main.pressure +
            " hPa <br><b> Humidity: </b>" +
            data.main.humidity +
            "%";
          document.getElementById("weatherDescription").innerHTML =
            data.weather[0].main + ": " + data.weather[0].description;
          document.getElementById("windDescription").innerHTML =
            "<b>Wind speed: </b>" +
            data.wind.speed +
            " mph"
          document.getElementById("sunriseSunsetDescription").innerHTML =
            "<b>Sunrise: </b>" +
            moment.unix(data.sys.sunrise).format("LT") +
            "<br><b>Sunset: </b>" +
            moment.unix(data.sys.sunset).format("LT");
          document.getElementById("weatherIcon").src =
            "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          document.getElementById("weatherIcon").style.margin = "0 auto";
          return data;
        }
      });
  }

  return (
    <div className="weatherwidget">
      <div className="boxed">
        <h3>Current Weather Conditions</h3>
        <img id="weatherIcon" height="100" />
        <div id="weatherDescription" style={{textAlign:'center'}}/>
        <br/>
        <div id="weather-info">
          <div id="weatherTempLabel"/>
          <div id="windDescription"/>
          <div id="sunriseSunsetDescription"/>
        </div>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string,
};

export default WeatherWidget;
