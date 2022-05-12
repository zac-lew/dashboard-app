import React from "react";

import sunny from "../assets/icons/weather/animated/sunny.svg";
import cloudy from "../assets/icons/weather/animated/cloudy.svg";
import partlycloudy from "../assets/icons/weather/animated/partlycloudy.svg";
import rainy from "../assets/icons/weather/animated/rainy.svg";
import snowy from "../assets/icons/weather/animated/snowy.svg";
import thunder from "../assets/icons/weather/animated/thunder.svg";
import weather from "../assets/icons/weather/animated/weather.svg";

export const WeatherIconMapper = ({ weatherDescriptions }) => {
  const firstDescription = weatherDescriptions ? weatherDescriptions[0] : "";
  if (firstDescription.includes("Shower")) {
    return <img src={rainy} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Sunny")) {
    return <img src={sunny} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Sunny")) {
    return <img src={sunny} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Cloudy")) {
    return <img src={cloudy} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Partly")) {
    return <img src={partlycloudy} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Snow")) {
    return <img src={snowy} alt="icon" height="110"></img>;
  } else if (firstDescription.includes("Thunder")) {
    return <img src={thunder} alt="icon" height="110"></img>;
  } else {
    return <img src={weather} alt="icon" height="110"></img>;
  }
};
