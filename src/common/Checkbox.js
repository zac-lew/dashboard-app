import React from "react";
import Trash from "../assets/icons/trash.svg";
import "./Checkbox.scss";

const Checkbox = ({ label, checked, setCompleted, index, deleteTask }) => {
  return (
    <div className="custom-checkbox">
      <label className={"container " + (checked && "checked")}>
        {label}
        <input type="checkbox" checked={checked} onClick={() => setCompleted(index)} />
        <span className="checkmark"></span>
      </label>
      <img src={Trash} alt="delete" className="trash" onClick={() => deleteTask(index)} />
    </div>
  );
};

export default Checkbox;
