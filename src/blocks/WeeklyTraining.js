import React from "react";
import "./WeeklyTraining.scss";

const WeeklyTraining = (props) => {
  const distances = [
    { day: "Monday", distance: 10 },
    { day: "Tuesday", distance: 10 },
    { day: "Wednesday", distance: 8 },
    { day: "Thursday", distance: 8 },
    { day: "Friday", distance: 6 },
    { day: "Saturday", distance: 16 },
    { day: "Sunday", distance: 6 },
  ];
  const maxDistance = Math.max.apply(
    Math,
    distances.map((x) => {
      return x.distance;
    })
  );
  const generateCircles = () => {
    return distances.map((day, i) => {
      const circleSize = 100 - (maxDistance - day.distance);
      return (
        <div className="day">
          <div className="day-icon">
            {day.distance ? (
              <div
                className="circle"
                style={{ height: circleSize + "px", width: circleSize + "px", lineHeight: circleSize + "px" }}>
                {day.distance}km
              </div>
            ) : (
              <div className="rest">Rest</div>
            )}
          </div>
          <div className="day-name">{day.day}</div>
        </div>
      );
    });
  };
  return <div className="weekly-training-container">{generateCircles()}</div>;
};

export default WeeklyTraining;
