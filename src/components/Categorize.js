import React from "react";
import Rock from "../categories/Rock";
import Rnb from "../categories/Rnb";
import Pop from "../categories/Pop";
import smallLogo from "../images/spotifyLogo.png";

function Categorize({ songs }){
    return(
        <div className="categories">
            <div className="logo">
                <img src={smallLogo} alt="Spotify Logo"/>
                <h1>Spotify</h1>
            </div>
            <h2>categories</h2>
            <Rock songs={songs} />
            <Rnb songs={songs} />
            <Pop songs={songs} />
        </div>
    )
}

export default Categorize