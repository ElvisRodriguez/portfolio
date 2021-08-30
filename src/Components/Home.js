import React, { useEffect } from 'react';
import M from "materialize-css";

function Home(props) {
    useEffect(() => {
        M.AutoInit();
      });
    
    return (
        <div className="home" id="home">
            <div class="">
                <h1><code>Elvis Rodriguez</code></h1>
                <h3><code>Backend Software Engineer</code></h3>
            </div>
        </div>
    );
}

export default Home;