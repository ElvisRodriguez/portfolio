import React, { useEffect } from "react";
import M from "materialize-css";

import "./App.css";
import SideNav from "./Components/SideNav";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <SideNav/>
    </div>
  );
}

export default App;
