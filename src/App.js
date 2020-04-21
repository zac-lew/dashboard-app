import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar";
import DashboardBody from "./DashboardBody";
import { getWeather } from "./api";
import HamburgerMenu from "./HamburgerMenu";

function App() {
  const [weather, setWeather] = useState(0);
  const [location, setLocation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("App -> menuOpen", menuOpen);
  useEffect(() => {
    getWeather(setWeather, setLocation);
  }, []);
  return (
    <div className="App">
      <React.Fragment>
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={"body-container" + (menuOpen ? " blurred" : "")}>
          <HeaderBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <DashboardBody weather={weather} />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
