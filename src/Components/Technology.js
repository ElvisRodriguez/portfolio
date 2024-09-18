import React, { useEffect } from 'react';
import M from "materialize-css";

import TechLogo from "./TechLogo";

// Programming Languages
import bash_logo from "../Images/language-logos/bash-logo.svg";
import cpp_logo from "../Images/language-logos/cpp-logo.svg";
import css3_logo from "../Images/language-logos/css3-logo.svg";
import html5_logo from "../Images/language-logos/html5-logo.svg";
import java_logo from "../Images/language-logos/java-logo.svg";
import javascript_logo from "../Images/language-logos/javascript-logo.svg";
import python_logo from "../Images/language-logos/python-logo.svg";

// Frameworks
import flask_logo from "../Images/framework-logos/flask-logo.svg";
import jquery_logo from "../Images/framework-logos/jquery-logo.svg";
import react_logo from "../Images/framework-logos/react-logo.svg";

// General Tools
import atom_logo from "../Images/tool-logos/atom-logo.svg";
import nodejs_logo from "../Images/tool-logos/nodejs-logo.svg";
import vim_logo from "../Images/tool-logos/vim-logo.svg";
import vscode_logo from "../Images/tool-logos/vscode-logo.svg";


function Technology(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="technology" id="technology">
            <div className="blue-header">
                <h1><code>Technology</code></h1>
            </div>
            <div className="category">
                <h3><code>Languages</code></h3>
            </div>
            <div className="container row">
                <TechLogo src={python_logo} alt="Python Logo"/>
                <TechLogo src={bash_logo} alt="Bash Logo"/>
                <TechLogo src={javascript_logo} alt="JavaScript Logo"/>
                <TechLogo src={html5_logo} alt="HTML5 Logo"/>
                <TechLogo src={css3_logo} alt="CSS3 Logo"/>
                <TechLogo src={java_logo} alt="Java Logo"/>
                <TechLogo src={cpp_logo} alt="C++ Logo"/>
            </div>
            <div className="category">
                <h3><code>Frameworks</code></h3>
            </div>
            <div className="container row">
                <TechLogo src={flask_logo} alt="Flask Logo"/>
                <TechLogo src={react_logo} alt="React Logo"/>
                <TechLogo src={jquery_logo} alt="Jquery Logo"/>
            </div>
            <div className="category">
                <h3><code>Tools</code></h3>
            </div>
            <div className="container row">
                <TechLogo src={vscode_logo} alt="Vistual Studio Code Logo"/>
                <TechLogo src={vim_logo} alt="Vim Logo"/>
                <TechLogo src={atom_logo} alt="Atom Logo"/>
                <TechLogo src={nodejs_logo} alt="NodeJS Logo"/>
            </div>
        </div>
    );
}

export default Technology;