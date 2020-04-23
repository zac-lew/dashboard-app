import React from "react";
import Run from "../assets/icons/run.svg";
import Rest from "../assets/icons/bed.svg";
import Gym from "../assets/icons/weightlifting.svg";
import Yoga from "../assets/icons/gymnast.svg";
import Rehab from "../assets/icons/physiotherapy.svg";

const TrainingIcon = ({ session }) => {
  return (
    <img
      src={
        parseInt(session)
          ? Run
          : session === "Rest"
          ? Rest
          : session === "Yoga"
          ? Yoga
          : session === "Rehab"
          ? Rehab
          : Gym
      }
      alt={session}
      height="70"
    />
  );
};

export default TrainingIcon;
