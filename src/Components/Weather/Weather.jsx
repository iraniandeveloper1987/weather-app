import React from "react";
import "./Weather.css";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";

function Weather() {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="search city..." className="input" />
        <div className="search-icon">
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="weather-symbol">
        <img src={snow_icon} alt="weather-symbol" />
      </div>
      <div className="weather-temp">-5°c</div>
      <div className="weather-location">Halifax</div>
      <div className="data-container">
        <div className="data-item">
          <img src={humidity_icon} alt="humidity" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="title">humidity</div>
          </div>
        </div>
        <div className="data-item">
          <img src={wind_icon} alt="wind-speed" />
          <div className="data">
            <div className="wind-speed">40km/h</div>
            <div className="title">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
