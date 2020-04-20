import React from "react"

function ListItem({ song }) {
    return (
        <tbody>
            <tr
                className="list-item"
                value={song}
            >
                <td style={{ width: "25%" }}>{song.songTitle}</td>
                <td style={{ width: "25%" }}>{song.artist}</td>
                <td style={{ width: "25%" }}>{song.genre}</td>
                <td style={{ width: "25%" }}>{song.rating}</td>
            </tr>
        </tbody>
    )
}

export default ListItem