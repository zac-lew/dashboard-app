import React from "react";
import "./BlockHeader.scss";

const BlockHeader = (props) => {
  return (
    <div className="block-header-container">
      <div>{props.header}</div>
    </div>
  );
};

export default BlockHeader;
