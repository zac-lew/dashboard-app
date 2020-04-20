import React from "react";
import Sunny from "../assets/icons/sunny.svg";
import "./CurrentWeatherBlock.scss";
import BlockHeader from "./BlockHeader";

const CurrentWeatherBlock = ({ weather }) => {
  return (
    <div className="current-weather-block">
      <BlockHeader header="Current Conditions" />
      <div className="current-weather-body">
        <div className="icon">
          <img src={Sunny} alt="icon" height="100"></img>
        </div>
        <div className="temperature">{weather.temperature}°C</div>
        <div className="description">{weather.weather_descriptions[0]}</div>
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
