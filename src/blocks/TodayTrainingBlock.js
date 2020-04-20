import React, { useState, useEffect } from "react";
import Run from "../assets/icons/run.svg";
import Rest from "../assets/icons/bed.svg";
import Gym from "../assets/icons/weightlifting.svg";
import Yoga from "../assets/icons/gymnast.svg";
import Rehab from "../assets/icons/physiotherapy.svg";
import BlockHeader from "./BlockHeader";
import Moment from "moment";
import "./TodayTrainingBlock.scss";
import { trainingSchedule } from "../assets/data/trainingSchedule";

const TodayTrainingBlock = ({ weather }) => {
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
    <div className="today-training-block">
      <BlockHeader header={`Today's Training - ${Moment().format("MMMM Do")}`} />
      <div className="today-training-body">
        <div className="today-training-am">
          <BlockHeader header="AM" />
          <div className="icon">
            <img
              src={
                parseInt(morningSession)
                  ? Run
                  : morningSession === "Rest"
                  ? Rest
                  : morningSession === "Yoga"
                  ? Yoga
                  : morningSession === "Rehab"
                  ? Rehab
                  : Gym
              }
              alt="icon"
              height="80"></img>
          </div>
          <div className="exercise">{parseInt(morningSession) ? `${morningSession}km Easy Run` : morningSession}</div>
        </div>
        <div className="today-training-pm">
          <BlockHeader header="PM" />
          <div className="icon">
            <img
              src={
                parseInt(eveningSession)
                  ? Run
                  : eveningSession === "Rest"
                  ? Rest
                  : eveningSession === "Yoga"
                  ? Yoga
                  : eveningSession === "Rehab"
                  ? Rehab
                  : Gym
              }
              alt="icon"
              height="80"></img>
          </div>
          <div className="exercise">{parseInt(eveningSession) ? `${eveningSession}km Easy Run` : eveningSession}</div>
        </div>
      </div>
    </div>
  );
};

export default TodayTrainingBlock;