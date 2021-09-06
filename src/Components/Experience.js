import React, { useEffect } from 'react';
import M from "materialize-css";

import flask_logo from "../Images/framework-logos/flask-logo.svg";
import google_logo from "../Images/google-logo.png";
import react_logo from "../Images/framework-logos/react-logo.svg";
import plotly_logo from "../Images/framework-logos/plotly-logo.svg";
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
                        <li>Python</li>
                        <li>Data Processing</li>
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
                    <img src={google_logo} className="right-align valign-wrapper" alt="Google Logo"></img>
                </div>
            </div>
            <div className="card row">
                <div className="card-content col l10 xl10">
                    <div className="card-heading">
                        <div className="card-title left-align">
                            <span>
                                Create-Flask-Api-App
                                <span className="project-link">
                                    <a href="https://github.com/ElvisRodriguez/create-flask-api-app" target="_blank" rel="noreferrer">&#8690;</a>
                                </span>
                            </span>
                            <span>&nbsp;|&nbsp;</span>
                            <small>
                                Project Owner
                            </small>
                        </div>
                        <div className="card-date left-align">August 2020 - Present</div>
                    </div>
                    <ul className="card-badges">
                        <li>REST APIs</li>
                        <li>Flask</li>
                        <li>PyPi</li>
                    </ul>
                    <ul className="card-details left-align">
                        {Strings["CreateFlaskApp"].map((description, i) => {
                            return(
                            <li key={i}>
                                <i className="material-icons">chevron_right</i>
                                <p>{description}</p>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="card-image col l2 xl2">
                    <img src={flask_logo} className="right-align valign-wrapper" alt="Flask Logo"></img>
                </div>
            </div>
            <div className="card row">
                <div className="card-content col l10 xl10">
                    <div className="card-heading">
                        <div className="card-title left-align">
                            <span>
                                Daily Popcorn
                                <span className="project-link">
                                    <a href="https://github.com/dave791/DailyPopcorn" target="_blank" rel="noreferrer">&#8690;</a>
                                </span>
                            </span>
                            <span>&nbsp;|&nbsp;</span>
                            <small>
                                Co-Owner | Backend | API integration
                            </small>
                        </div>
                        <div className="card-date left-align">October 2019 - March 2020</div>
                    </div>
                    <ul className="card-badges">
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                    </ul>
                    <ul className="card-details left-align">
                        {Strings["DailyPopcorn"].map((description, i) => {
                            return(
                            <li key={i}>
                                <i className="material-icons">chevron_right</i>
                                <p>{description}</p>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="card-image col l2 xl2">
                    <img src={react_logo} className="right-align valign-wrapper" alt="React Logo"></img>
                </div>
            </div>
            <div className="card row">
                <div className="card-content col l10 xl10">
                    <div className="card-heading">
                        <div className="card-title left-align">
                            <span>
                                Atawear Baby Bracelet
                                <span className="project-link">
                                    <a href="https://github.com/ElvisRodriguez/Baby_Bracelet" target="_blank" rel="noreferrer">&#8690;</a>
                                </span>
                            </span>
                            <span>&nbsp;|&nbsp;</span>
                            <small>
                                Co-Owner | Backend | Frontend
                            </small>
                        </div>
                        <div className="card-date left-align">August 2020 - Present</div>
                    </div>
                    <ul className="card-badges">
                        <li>Plotly</li>
                        <li>Arduino</li>
                        <li>Python</li>
                        <li>Data processing</li>
                    </ul>
                    <ul className="card-details left-align">
                        {Strings["Atawear"].map((description, i) => {
                            return(
                            <li key={i}>
                                <i className="material-icons">chevron_right</i>
                                <p>{description}</p>
                            </li>);
                        })}
                    </ul>
                </div>
                <div className="card-image col l2 xl2">
                    <img src={plotly_logo} className="right-align valign-wrapper" alt="Dash Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default Experience;