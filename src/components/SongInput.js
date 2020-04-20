import React from "react";

function SongInput({handleSubmit}) {
    const onSubmit = (event) => {
        event.preventDefault();
        const input = event.target
        const newSong = {
            songTitle: input.songTitle.value,
            artist: input.artist.value,
            genre: input.genre.value,
            rating: input.rating.value
        }
        handleSubmit(newSong);
    }
    return (
        <form className="song-input" onSubmit={onSubmit}>
            <input
                placeholder="Song"
                name="songTitle"
            />
            <input
                placeholder="Artist"
                name="artist"
            />
            <select
                name="genre"
            >
                <option value="">----</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Pop">Pop</option>
            </select>
            <select
                name="rating"
            >
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Add Song</button>
        </form>
    )
}

export default SongInput;