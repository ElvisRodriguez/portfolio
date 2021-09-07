import React, { useEffect } from 'react';
import M from "materialize-css";

import ProjectCard from './ProjectCard';

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
            <ProjectCard
                title="CUNY - Medgar Evers College"
                displayLink="no-display"
                smalls="BS Computer Science"
                workPeriod="2016 - 2021"
                badges={["ACM President", "ACM-W Vice President", "CUNY Tech Prep Alumnus", "Google CSSI Alumnus", "3.4 GPA"]}
                descriptions={Strings["MEC"]}
                image={mec_logo} alt="Medgar Evers College Logo"/>
        </div>
    );
}

export default Education;