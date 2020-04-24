import React, { useState, useEffect } from "react";
import moment from "moment";
import "./WeeklyTraining.scss";
import { getToken, getActivities } from "../api";
import { convertActivityData } from "../common/utils";
import { useLocalStorage } from "../common/customHooks";

const WeeklyTraining = (props) => {
  const [tokenResponse, setTokenResponse] = useLocalStorage("token_response", 0);
  const [activities, setActivities] = useState(0);
  const [mondayDate, setMondayDate] = useState(moment().startOf("isoWeek").unix());
  const [distances, setDistances] = useState([]);
  useEffect(() => {
    if (tokenResponse) getToken(setTokenResponse, tokenResponse);
  }, []);
  useEffect(() => {
    if (tokenResponse || document.URL.includes("exchange"))
      getActivities(tokenResponse, setActivities, mondayDate, setTokenResponse);
  }, [tokenResponse, mondayDate]);
  useEffect(() => {
    const localDistances = convertActivityData(activities);
    setDistances(localDistances);
  }, [activities]);
  const maxDistance = Math.max.apply(
    Math,
    distances.map((x) => {
      return x.distance;
    })
  );
  const totalDistance = distances.reduce((a, b) => a + b.distance, 0);
  const generateCircles = () => {
    return distances.map((day, i) => {
      const today = moment().format("d");
      const circleSize = (day.distance / maxDistance) * (100 - 50) + 50;
      return (
        <div className="day">
          <div className="day-icon">
            {day.distance ? (
              <div
                className="circle"
                style={{ height: circleSize + "px", width: circleSize + "px", lineHeight: circleSize + "px" }}>
                {day.distance}
              </div>
            ) : i < parseInt(today) ? (
              <div className="rest">Rest</div>
            ) : (
              <div className="rest" />
            )}
          </div>
          <div className="day-name">{day.day}</div>
        </div>
      );
    });
  };
  return (
    <div className="weekly-training-container">
      {tokenResponse ? (
        <React.Fragment>
          <div className="weekly-total">Weekly Total: {totalDistance}km</div>
          <div>
            <div className="icons">{generateCircles()}</div>
          </div>
        </React.Fragment>
      ) : (
        <div
          className="strava-sync"
          onClick={() => {
            // getToken(setTokenResponse, tokenResponse);
            // getActivities(tokenResponse, setActivities, mondayDate, setTokenResponse);
          }}>
          Sync with Strava
        </div>
      )}
    </div>
  );
};

export default WeeklyTraining;
