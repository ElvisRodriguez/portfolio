import React, { useEffect } from 'react';
import M from "materialize-css";


function TechLogo(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="card">
            <img src={props.src} alt={props.alt}></img>
        </div>
    );
}

export default TechLogo;