import React, { useState, useEffect } from "react";
import { trainingSchedule } from "../assets/data/trainingSchedule";
import "./TrainingCalendar.scss";
import TrainingIcon from "../common/TrainingIcon";
import moment from "moment";
import Next from "../assets/icons/next.svg";
import Previous from "../assets/icons/left-arrow.svg";

const TrainingCalendar = (props) => {
  const [mondayDate, setMondayDate] = useState(moment().startOf("isoWeek"));
  const [mondayIndex, setMondayIndex] = useState(0);
  useEffect(() => {
    const index = trainingSchedule.findIndex((session) => moment(session.Date, "MM/DD/YY").isSame(mondayDate));
    setMondayIndex(index);
  }, [mondayDate]);
  return (
    <div className="training-calendar-container">
      <div className="header">
        <div>
          <img
            src={Previous}
            alt="Previous"
            height="40px"
            onClick={() => mondayIndex > 13 && setMondayDate(moment(mondayDate).subtract(7, "days"))}
          />
        </div>
        <div className="header-text">Week Starting: {moment(mondayDate).format("dddd MMM Do")}</div>
        <div>
          <img
            src={Next}
            alt="Next"
            height="40px"
            onClick={() =>
              mondayIndex < trainingSchedule.length - 14 && setMondayDate(moment(mondayDate).add(7, "days"))
            }
          />
        </div>
      </div>
      <table className="calendar-table">
        <tr className="header-row">
          <th className="am-column"></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr className="am-row">
          <td className="am-column">AM</td>
          <TrainingCalendarCell session={trainingSchedule[mondayIndex]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 2]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 4]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 6]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 8]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 10]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 12]} />
        </tr>
        <tr className="pm-row">
          <td className="pm-column">PM</td>
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 1]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 3]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 5]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 7]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 9]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 11]} />
          <TrainingCalendarCell session={trainingSchedule[mondayIndex + 13]} />
        </tr>
      </table>
    </div>
  );
};

const TrainingCalendarCell = ({ session }) => {
  return (
    <td>
      <div className="training-cell">
        <div>
          <TrainingIcon session={session.Event} />
        </div>
        <div>{parseInt(session.Event) ? `${session.Event}km Easy Run` : session.Event}</div>
      </div>
    </td>
  );
};

export default TrainingCalendar;
