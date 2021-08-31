import React, { useEffect } from 'react';
import M from "materialize-css";

function NavItem(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <a href={props.link} className="waves-effect waves-light">
            <div className="nav-item row valign-wrapper">
                <div className="col">
                    <i className="material-icons">{props.icon}</i>
                </div>
                <div className="col">
                    <code>{props.anchor}</code>
                </div>
            </div>
        </a>
    );
}

export default NavItem;