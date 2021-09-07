import React, { useEffect } from 'react';
import M from "materialize-css";

function ProjectCard(props) {
    useEffect(() => {
        M.AutoInit();
      });
    return (
        <div className="card row">
            <div className="card-content col l10 xl10">
                <div className="card-heading">
                    <div className="card-title left-align">
                        <span>
                            {props.title}
                            <span className="project-link" id={props.displayLink}>
                                <a href={props.projectLink} target="_blank" rel="noreferrer">&#8690;</a>
                            </span>
                        </span>
                        <span>&nbsp;|&nbsp;</span>
                        <small>
                            {props.smalls}
                        </small>
                    </div>
                    <div className="card-date left-align">{props.workPeriod}</div>
                </div>
                <ul className="card-badges">
                    {props.badges.map((badge, i) => {
                        return(
                        <li key={i}>{badge}</li>);
                    })}
                </ul>
                <ul className="card-details left-align">
                    {props.descriptions.map((description, i) => {
                        return(
                        <li key={i}>
                            <i className="material-icons">chevron_right</i>
                            <p>{description}</p>
                        </li>);
                    })}
                </ul>
            </div>
            <div className="card-image col l2 xl2">
                <img src={props.image} className="right-align valign-wrapper" alt={props.alt}></img>
            </div>
        </div>
    );
}

export default ProjectCard;