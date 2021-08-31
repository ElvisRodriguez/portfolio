import React, { useEffect } from 'react';
import M from "materialize-css";

function Home(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="home" id="home">
            <div className="typewriter">
                <h1><code>Elvis Rodriguez</code></h1>
                <h2><code>Software Engineer</code></h2>
            </div>
        </div>
    );
}

export default Home;