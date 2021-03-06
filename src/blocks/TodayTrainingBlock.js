import React, { useState, useEffect } from "react";
import Moment from "moment";
import "./TodayTrainingBlock.scss";
import { trainingSchedule } from "../assets/data/trainingSchedule";
import TrainingIcon from "../common/TrainingIcon";

const TodayTrainingBlock = ({ setModal }) => {
  const [morningSession, setMorningSession] = useState("");
  const [eveningSession, setEveningSession] = useState("");
  useEffect(() => {
    const today = Moment();
    const morningSession = trainingSchedule.find(
      (session) => Moment(session.Date, "MM/DD/YY").isSame(today, "day") && session.Time === "AM"
    ).Event;
    const eveningSession = trainingSchedule.find(
      (session) => Moment(session.Date, "MM/DD/YY").isSame(today, "day") && session.Time === "PM"
    ).Event;
    setMorningSession(morningSession);
    setEveningSession(eveningSession);
  }, []);
  return (
    <div className="today-training-block" onClick={() => setModal(true)}>
      <div className="today-training-body">
        <div className="today-training-am">
          <div className="icon">
            <TrainingIcon session={morningSession} />
          </div>
          <div className="exercise">{parseInt(morningSession) ? `${morningSession}km Easy Run` : morningSession}</div>
        </div>
        <div className="today-training-pm">
          <div className="icon">
            <TrainingIcon session={eveningSession} />
          </div>
          <div className="exercise">{parseInt(eveningSession) ? `${eveningSession}km Easy Run` : eveningSession}</div>
        </div>
      </div>
    </div>
  );
};

export default TodayTrainingBlock;
