import React, { useEffect } from 'react';
import M from "materialize-css";

function Connect(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="connect" id="connect">
            <div className="gray-header">
                <h1><code>Connect</code></h1>
            </div>
        </div>
    );
}

export default Connect;