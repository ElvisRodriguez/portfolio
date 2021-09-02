import React, { useEffect } from 'react';
import M from "materialize-css";

import mec_logo from "../Images/mec-logo.jpg";
import Strings from "../Utils/Strings.json";

function Education(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="education" id="education">
            <div className="green-header">
                <h1><code>Education</code></h1>
            </div>
            <div className="card row">
                <div className="card-content col l10 xl10">
                    <div className="card-heading">
                        <div className="card-title left-align">
                            <span>CUNY - Medgar Evers College</span>
                            <span>&nbsp;|&nbsp;</span>
                            <small>
                                BS Computer Science
                            </small>
                        </div>
                        <div className="card-date left-align">2016 - 2021</div>
                    </div>
                    <ul className="card-badges">
                        <li>ACM President</li>
                        <li>ACM-W Vice President</li>
                        <li>CUNY Tech Prep Alumnus</li>
                        <li>Google CSSI Alumnus</li>
                        <li>3.4 GPA</li>
                    </ul>
                    <ul className="card-details left-align">
                        {Strings["MEC"].map((description, i) => {
                            return(
                            <li key={i}>
                                <i className="material-icons">chevron_right</i>
                                <p>{description}</p>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="card-image col l2 xl2">
                    <img src={mec_logo} className="mec-logo right-align valign-wrapper" alt="Medgar Evers College Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default Education;