import React from "react"

function CategoryItem({ song }) {

    return (
        <tbody>
            <tr
                className="list-item"
            >
                <td>{song.songTitle}</td>
                <td>{song.artist}</td>
            </tr>
        </tbody>
    )
}

export default CategoryItem