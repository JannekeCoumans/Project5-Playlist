import React from "react"

function ListItem({ song, deleteSong }) {

    return (
        <div className="list-item">
            <div>{song.songTitle}</div>
            <div>{song.artist}</div>
            <div>{song.genre}</div>
            <div>{song.rating}</div>
            <div className="trashCan" onClick={deleteSong} value={song.songTitle}>🗑️</div>
        </div>
    )
}

export default ListItem