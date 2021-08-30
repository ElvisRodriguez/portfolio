import React, { useEffect } from 'react';
import M from "materialize-css";

import NavItem from './NavItem';

function SideNav() {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="side-nav">
            <NavItem icon="home" anchor="Home" link="#home"/>
            <NavItem icon="person" anchor="Profile" link="#profile"/>
            <NavItem icon="verified_user" anchor="Experience" link="#experience"/>
            <NavItem icon="code" anchor="Technology" link="#technology"/>
            <NavItem icon="school" anchor="Education" link="#education"/>
            <NavItem icon="share" anchor="Connect" link="#connect"/>
        </div>
    );
}

export default SideNav;