import React from "react";

function Header({ songs }) {
    return(
        <header>
            <div className="album-cover"></div>
            <div className="header-text">
                <h4>Playlist</h4>
                <h1>Favorites</h1>
                <p>Few of my fav jams</p>
                <p>Created by: <a href="https://open.spotify.com/user/1112978171" target="_blank">Janneke Coumans</a> ● &nbsp;&nbsp; {songs.length} songs </p>
                <button className="play">Play</button> <button className="menu">● ● ●</button>
            </div>
            <div className="followers">
                <p>Followers<br/>23</p>
            </div>
        </header>
    )
}

export default Header;