import React from "react";
import "./DashboardBody.scss";
import CurrentWeatherBlock from "./blocks/CurrentWeatherBlock";
import TodayTrainingBlock from "./blocks/TodayTrainingBlock";
import ToDoListBlock from "./blocks/ToDoListBlock";

const DashboardBody = (props) => {
  return (
    <div className="dashboard-body-container">
      <CurrentWeatherBlock {...props} />
      <TodayTrainingBlock {...props} />
      <ToDoListBlock {...props} />
    </div>
  );
};

export default DashboardBody;
