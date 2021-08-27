import React, { useEffect } from 'react';
import M from "materialize-css";

import './App.css';

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <p>
        <code>Webpage Under Construction!</code>
      </p>
    </div>
  );
}

export default App;
