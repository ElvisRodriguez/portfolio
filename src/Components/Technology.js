import React, { useEffect } from 'react';
import M from "materialize-css";

function Technology(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="technology" id="technology">
            <div className="blue-header">
                <h1><code>Technology</code></h1>
            </div>
        </div>
    );
}

export default Technology;