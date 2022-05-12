import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DashboardBody from "./DashboardBody";
import { getLocation, getWeather } from "./api";

function App() {
  const [weather, setWeather] = useState(0);
  const [location, setLocation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather(setWeather, location);
    }
  }, [location]);
  useEffect(() => {
    getLocation(setLocation);
  }, []);
  return (
    <Router>
      <div className="App">
        <React.Fragment>
          <div className={"body-container" + (menuOpen ? " blurred" : "")}>
            <DashboardBody weather={weather} location={location} />
          </div>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;
