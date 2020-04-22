import React from "react";
import Sunny from "../assets/icons/sunny.svg";
import "./CurrentWeatherBlock.scss";

const CurrentWeatherBlock = ({ weather }) => {
  return (
    <div className="current-weather-block">
      <div className="current-weather-body">
        <div className="icon">
          <img src={Sunny} alt="icon" height="80"></img>
        </div>
        <div className="temperature">{weather.temperature}°C</div>
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
