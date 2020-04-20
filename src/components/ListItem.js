import React from "react"

function ListItem({ song, deleteSong }) {

    return (
        <tbody>
            <tr
                className="list-item"
            >
                <td style={{ width: "24%" }}>{song.songTitle}</td>
                <td style={{ width: "24%" }}>{song.artist}</td>
                <td style={{ width: "24%" }}>{song.genre}</td>
                <td style={{ width: "24%" }}>{song.rating}</td>
                <button onClick={deleteSong} value={song.songTitle}>Delete</button>
            </tr>
        </tbody>
    )
}

export default ListItem