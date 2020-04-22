import React, { useEffect, useState } from "react";
import "./App.css";
import DashboardBody from "./DashboardBody";
import { getWeather } from "./api";

function App() {
  const [weather, setWeather] = useState(0);
  const [location, setLocation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    getWeather(setWeather, setLocation);
  }, []);
  return (
    <div className="App">
      <React.Fragment>
        <div className={"body-container" + (menuOpen ? " blurred" : "")}>
          <DashboardBody weather={weather} />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
