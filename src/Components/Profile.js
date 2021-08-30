import React, { useEffect } from 'react';
import M from "materialize-css";

import profile_picture from "../Images/profile_picture.jpeg"

function Profile(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="profile" id="profile">
            <h1><code>Profile</code></h1>
            <img src={profile_picture} className="profile-picture" alt="Profile of Elvis Rodriguez">
            </img>
            <ul>
                <li>
                    <label>Name</label>
                    <br/>
                    <div className="label-value">
                        <p><code>Elvis Rodriguez</code></p>
                    </div>
                </li>
                <li>
                    <label>Birthday</label>
                    <div className="label-value">
                        <p><code>December 11, 1993</code></p>
                    </div>
                </li>
                <li>
                    <label>Titles</label>
                    <div className="label-value">
                        <p><code>Software Engineer</code></p>
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