import React from "react";
import Hamburger from "./assets/icons/hamburger.png";
import "./HeaderBar.scss";

const HeaderBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="header-bar-container">
      <img src={Hamburger} alt="menu" height="40" onClick={() => setMenuOpen(!menuOpen)} />
      <div className="current-location"></div>
    </div>
  );
};

export default HeaderBar;
