import React, { useEffect } from "react";
import M from "materialize-css";

import "./App.css";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SideNav from "./Components/SideNav";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <SideNav/>
      <Home/>
      <Profile/>
    </div>
  );
}

export default App;
