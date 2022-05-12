import React from "react";
import { WeatherIconMapper } from "../common/weatherIconMapper";
import loading from "../assets/icons/pacman.svg";
import "./CurrentWeatherBlock.scss";

const CurrentWeatherBlock = ({ weather }) => {
  return (
    <div className="current-weather-block">
      <div className="current-weather-body">
        {weather.data && weather.data.current ? <SuccessBlock weather={weather} /> : <LoadingBlock />}
      </div>
    </div>
  );
};

const LoadingBlock = () => {
  return (
    <div className="loading_block">
      <img src={loading} alt="loading..." height="100" />
    </div>
  );
};

const SuccessBlock = ({ weather }) => {
  return (
    <div className="success_block">
      <div className="icon">
        <WeatherIconMapper weatherDescriptions={weather.data.current && weather.current.weather_descriptions} />
      </div>
      <div className="temperature">{weather.current && weather.current.temperature}°C</div>
      <div className="location">
        {weather.location && weather.location.name}, {weather.location && weather.location.region}
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
