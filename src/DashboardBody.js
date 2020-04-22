import React, { useState } from "react";
import "./DashboardBody.scss";
import CurrentWeatherBlock from "./blocks/CurrentWeatherBlock";
import TodayTrainingBlock from "./blocks/TodayTrainingBlock";
import ToDoListBlock from "./blocks/ToDoListBlock";
import loading from "./assets/icons/pacman.svg";
import WeeklyTraining from "./blocks/WeeklyTraining";
import { Modal, ModalBody } from "reactstrap";

const DashboardBody = (props) => {
  const { weather } = props;
  const [modal, setModal] = useState(false);
  return (
    <div className="dashboard-body-container">
      {weather ? (
        <React.Fragment>
          <TodayTrainingBlock {...props} setModal={setModal} />
          <CurrentWeatherBlock {...props} />
          <ToDoListBlock {...props} />
          <WeeklyTraining {...props} />
          <Modal isOpen={modal} toggle={() => setModal(!modal)} className="training-calendar-modal">
            <ModalBody>Inset Full Training Program</ModalBody>
          </Modal>
        </React.Fragment>
      ) : (
        <img src={loading} alt="loading..." />
      )}
    </div>
  );
};

export default DashboardBody;
