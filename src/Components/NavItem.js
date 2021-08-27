import React, { useEffect } from 'react';
import M from "materialize-css";

function NavItem(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="nav-item row">
            <div className="col">
                <a href="#section"><i className="material-icons">{props.icon}</i></a>
            </div>
            <div className="col">
                <a href="#section" className="text">{props.anchor}</a>
            </div>
        </div>
    );
}

export default NavItem;