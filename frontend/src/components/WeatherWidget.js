/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import moment from "moment";

function WeatherWidget(props) {
  if (props.city) {
    getWeather(props.city);
  }

  function getWeather(city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=9bb2aad28619e8c45992b312cb325c36"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          var icon = JSON.stringify(data.weather[0].icon);
          icon = icon.replace('"', "");
          icon = icon.replace('"', "");

          document.getElementById("weatherTempLabel").innerHTML =
            "Current Temperature: " +
            data.main.temp +
            "&#176; F <br> Feels like: " +
            data.main.feels_like +
            "&#176; F" +
            "<br> Day Low: " +
            data.main.temp_min +
            "&#176; F <br> Day High: " +
            data.main.temp_max +
            "&#176; F" +
            "<br>Pressure: " +
            data.main.pressure +
            " hPa <br> Humidity: " +
            data.main.humidity +
            "%";
          document.getElementById("weatherDescription").innerHTML =
            data.weather[0].main + ": " + data.weather[0].description;
          document.getElementById("windDescription").innerHTML =
            "Wind: Speed: " +
            data.wind.speed +
            " mph Direction: " +
            data.wind.deg +
            "&#176;";
          document.getElementById("sunriseSunsetDescription").innerHTML =
            "Sunrise: " +
            moment.unix(data.sys.sunrise).format("LT") +
            " Sunset: " +
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
        <p id="weatherTempLabel"></p>
        <p id="weatherDescription"></p>
        <p id="windDescription"></p>
        <p id="sunriseSunsetDescription"></p>
      </div>
    </div>
  );
}

export default WeatherWidget;
