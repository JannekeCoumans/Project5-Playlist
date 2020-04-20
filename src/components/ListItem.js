import React from "react"

function ListItem({ song }) {
    return (
        <tbody>
            <tr
                className="list-item"
                value={song}
            >
                <td>{song.songTitle}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.rating}</td>
            </tr>
        </tbody>
    )
}

export default ListItem