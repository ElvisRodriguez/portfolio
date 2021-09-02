import React, { useEffect } from 'react';
import M from "materialize-css";

import Contact from "./Contact";

import Strings from "../Utils/Strings.json";

import gmail_logo from "../Images/gmail-logo.png";
import github_logo from "../Images/github-logo.svg";
import linkedin_logo from "../Images/linkedin-logo.svg";

function Connect(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="connect" id="connect">
            <div className="blue-header">
                <h1><code>Connect</code></h1>
            </div>
            <div className="container valign-wrapper">
                <Contact link={Strings["Contact"]["github"]} logo={github_logo} alt="GitHub Logo"/>
                <Contact link={Strings["Contact"]["linkedin"]} logo={linkedin_logo} alt="LinkedIn Logo"/>
                <Contact link={Strings["Contact"]["email"]} logo={gmail_logo} alt="Gmail Logo"/>
            </div>
        </div>
    );
}

export default Connect;