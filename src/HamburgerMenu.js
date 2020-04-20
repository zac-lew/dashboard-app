import React from "react";
import Hamburger from "./assets/icons/hamburger.png";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "hamburger-menu-open" : "hamburger-menu-closed"}>
      <img src={Hamburger} alt="menu" height="40" onClick={() => setMenuOpen(!menuOpen)} />
      <div onClick={() => setMenuOpen(false)}>text</div>
    </div>
  );
};

export default HamburgerMenu;
