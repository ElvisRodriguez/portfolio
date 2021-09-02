import React, { useEffect } from 'react';
import M from "materialize-css";

function Contact(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    let classNames=props.alt.toString().split(" ")[0];
    classNames = `${classNames} logo`;
    
    return (
        <div className={classNames}>
            <a href={props.link}>
                <img src={props.logo} alt={props.alt}></img>
            </a>
        </div>
    );
}

export default Contact;