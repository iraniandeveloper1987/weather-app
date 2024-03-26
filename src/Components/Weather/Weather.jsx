import { React, useState } from "react";
import axios from "axios";
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
  const [location, setLocation] = useState("");

  const [icon, setIcon] = useState(snow_icon);

  const [data, setData] = useState({});

  const handelChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const updateIcon = () => {
    switch (data.weather[0].icon) {
      case "01d":
      case "01n":
        setIcon(clear_icon);
        break;
      case "02d":
      case "02n":
        setIcon(cloud_icon);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setIcon(drizzle_icon);
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        setIcon(rain_icon);
        break;
      case "13d":
      case "13n":
        setIcon(snow_icon);
        break;
      default:
        setIcon(clear_icon);
        break;
    }
  };

  const api_Key = "acf109af3c2d42ef4d1d0864cdbee4e6";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_Key}&units=metric`;

  const fetchDate = async () => {
    try {
      await axios.get(url).then((response) => {
        // Handle the response data
        setData(response.data);
        console.log(response.data);
        updateIcon();
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="search city..."
          className="input"
          value={location}
          onChange={handelChangeLocation}
        />
        <div className="search-icon">
          <img
            src={search_icon}
            alt="search_icon"
            id="search"
            onClick={fetchDate}
          />
        </div>
      </div>

      {Object.keys(data).length !== 0 && data.constructor === Object && (
        <>
          <div className="weather-symbol">
            <img src={icon} alt="weather-symbol" />
          </div>
          <div className="weather-temp">{data.main.temp}°c</div>

          <div className="weather-location">{data.name}</div>
          <div className="data-container">
            <div className="data-item">
              <img src={humidity_icon} alt="humidity" />
              <div className="data">
                <div className="humidity-percent">{data.main.humidity}%</div>

                <div className="title">humidity</div>
              </div>
            </div>
            <div className="data-item">
              <img src={wind_icon} alt="wind-speed" />
              <div className="data">
                <div className="wind-speed">{data.wind.speed}km/h</div>

                <div className="title">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
