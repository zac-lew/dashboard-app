import React from "react";
import "./DashboardBody.scss";
import CurrentWeatherBlock from "./blocks/CurrentWeatherBlock";
import TodayTrainingBlock from "./blocks/TodayTrainingBlock";
import ToDoListBlock from "./blocks/ToDoListBlock";
import loading from "./assets/icons/pacman.svg";

const DashboardBody = (props) => {
  const { weather } = props;
  return (
    <div className="dashboard-body-container">
      {weather ? (
        <React.Fragment>
          <TodayTrainingBlock {...props} />
          <CurrentWeatherBlock {...props} />
          <ToDoListBlock {...props} />
        </React.Fragment>
      ) : (
        <img src={loading} alt="loading..." />
      )}
    </div>
  );
};

export default DashboardBody;
