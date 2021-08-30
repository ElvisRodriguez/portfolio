import React, { useEffect } from 'react';
import M from "materialize-css";

function NavItem(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="nav-item row">
            <div className="col">
                <a href={props.link}><i className="material-icons">{props.icon}</i></a>
            </div>
            <div className="col">
                <a href={props.link} className="text"><code>{props.anchor}</code></a>
            </div>
        </div>
    );
}

export default NavItem;