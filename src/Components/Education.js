import React, { useEffect } from 'react';
import M from "materialize-css";

function Education(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="education" id="education">
            <div className="green-header">
                <h1><code>Education</code></h1>
            </div>
        </div>
    );
}

export default Education;