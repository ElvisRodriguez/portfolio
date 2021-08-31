import React, { useEffect } from 'react';
import M from "materialize-css";

import google_logo from "../Images/google-logo.png";
import Strings from "../Utils/Strings.json";

function Experience(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="experience" id="experience">
            <div className="green-header">
                <h1><code>Experience</code></h1>
            </div>
            <div className="card row">
                <div className="card-content col l10 xl10">
                    <div className="card-heading">
                        <div className="card-title left-align">
                            <span>Google Engineering Practicum</span>
                            <span>&nbsp;|&nbsp;</span>
                            <small>
                                Software Engineering Intern | Project Co-Owner
                            </small>
                        </div>
                        <div className="card-date left-align">May 2018 - August 2018</div>
                    </div>
                    <ul className="card-badges">
                        <li>Metrics</li>
                        <li>Closed-src</li>
                    </ul>
                    <ul className="card-details left-align">
                        {Strings["GoogleEP"].map((description, i) => {
                            return(
                            <li key={i}>
                                <i className="material-icons">chevron_right</i>
                                <p>{description}</p>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="card-image col l2 xl2">
                    <img src={google_logo} className="google-logo right-align valign-wrapper" alt="Google Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default Experience;