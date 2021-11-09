import React, { useEffect } from 'react';
import M from "materialize-css";

import ProjectCard from "./ProjectCard";

import flask_logo from "../Images/framework-logos/flask-logo.svg";
import google_logo from "../Images/google-logo.png";
import react_logo from "../Images/framework-logos/react-logo.svg";
import plotly_logo from "../Images/framework-logos/plotly-logo.svg";
import pypi_logo from "../Images/pypi-logo.svg"
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
            <ProjectCard
                title="Google Engineering Practicum"
                displayLink="no-display"
                smalls="Software Engineering Intern | Project Co-Owner"
                workPeriod="May 2018 - August 2018"
                badges={["Metrics", "Python", "Data Pipeline", "SQL"]}
                descriptions={Strings["GoogleEP"]}
                image={google_logo} alt="Google Logo"/>
            <ProjectCard
                title="Create-Flask-Api-App"
                projectLink="https://github.com/ElvisRodriguez/create-flask-api-app"
                smalls="Project Owner"
                workPeriod="June 2021 - August 2021"
                badges={["REST", "APIs", "Flask", "PyPi", "Python"]}
                descriptions={Strings["CreateFlaskApp"]}
                image={pypi_logo} alt="Flask Logo"/>
            <ProjectCard
                title="Daily Popcorn"
                projectLink="https://github.com/dave791/DailyPopcorn"
                smalls="Co-Owner | Backend | API integration"
                workPeriod="October 2019 - March 2020"
                badges={["MongoDB", "Express.js", "React.js", "Node.js"]}
                descriptions={Strings["DailyPopcorn"]}
                image={react_logo} alt="React Logo"/>
            <ProjectCard
                title="ToDoIt Task Manager"
                projectLink="https://github.com/ElvisRodriguez/TaskManager"
                smalls="Owner | Full Stack | OAuth | Unit Testing"
                workPeriod="July 2019 - August 2019"
                badges={["Flask", "Python", "SQLite", "Jinja Templates", "OAuth"]}
                descriptions={Strings["ToDoIt"]}
                image={flask_logo} alt="Flask Logo"/>
            <ProjectCard
                title="Atawear Baby Bracelet"
                projectLink="https://github.com/ElvisRodriguez/Baby_Bracelet"
                smalls="Co-Owner | Backend | Frontend"
                workPeriod="September 2018 - December 2018"
                badges={["Plotly", "Arduino", "Python", "Data Processing"]}
                descriptions={Strings["Atawear"]}
                image={plotly_logo} alt="Plotly Logo"/>
        </div>
    );
}

export default Experience;