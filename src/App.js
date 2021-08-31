import React, { useEffect } from "react";
import M from "materialize-css";

import "./App.css";
import Connect from "./Components/Connect";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SideNav from "./Components/SideNav";
import Technology from "./Components/Technology";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <SideNav/>
      <Home/>
      <Profile/>
      <Experience/>
      <Technology/>
      <Education/>
      <Connect/>
    </div>
  );
}

export default App;
