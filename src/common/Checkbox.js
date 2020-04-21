import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ label, checked, setCompleted, index }) => {
  return (
    <div className="custom-checkbox">
      <label className={"container " + (checked && "checked")}>
        {label}
        <input type="checkbox" checked={checked} onClick={() => setCompleted(index)} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
