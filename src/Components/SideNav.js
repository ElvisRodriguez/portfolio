import React, { useEffect } from 'react';
import M from "materialize-css";

import NavItem from './NavItem';

function SideNav() {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="side-nav">
            <NavItem icon="home" anchor="Home"/>
            <NavItem icon="person" anchor="Profile"/>
            <NavItem icon="verified_user" anchor="Experience"/>
            <NavItem icon="code" anchor="Technology"/>
            <NavItem icon="school" anchor="Education"/>
            <NavItem icon="share" anchor="Connect"/>
        </div>
    );
}

export default SideNav;