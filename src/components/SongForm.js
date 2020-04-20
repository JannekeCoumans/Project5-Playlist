import React from "react";
import SongInput from "./SongInput"

function SongForm({ addSong }) {
    return (
        <div>
            <SongInput handleSubmit={addSong} />
        </div>
    )
}

export default SongForm;