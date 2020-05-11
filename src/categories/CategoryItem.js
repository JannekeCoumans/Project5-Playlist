import React from "react"

function CategoryItem({ song }) {

    return (
        <div>
            <p className="songArtist">{song.artist}</p>
            <p className="songTitle">{song.songTitle}</p>
        </div>
    )
}

export default CategoryItem