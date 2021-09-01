import React, { useEffect } from 'react';
import M from "materialize-css";

import profile_picture from "../Images/profile_picture.jpeg"

function Profile(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="profile" id="profile">
            <div className="profile-header">
                <h1>Elvis Rodriguez</h1>
                <div className="typewriter center-align">
                    <h2><code>Software Engineer</code></h2>
                </div>
            </div>
            <img src={profile_picture} className="profile-picture" alt="Profile of Elvis Rodriguez">
            </img>
            <ul>
                <li>
                    <label>Titles</label>
                    <div className="label-value">
                        <p><code>Open Source Contributor</code></p>
                        <p><code>Python Developer</code></p>
                        <p><code>React Developer</code></p>
                    </div>
                </li>
                <li>
                    <label>Locations</label>
                    <div className="label-value">
                        <p><code>New York, NY</code></p>
                    </div>
                </li>
            </ul>
            
        </div>
    );
}

export default Profile;