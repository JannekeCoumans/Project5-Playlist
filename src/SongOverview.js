import React from "react";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            songs: []
        }

    }

    render() {

        const addSong = (song) => {
            const generateId = this.state.songs.length + 1;
            const newSong = {
                id: generateId,
                songTitle: song.songTitle,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            };

            this.setState(prevState => {
                const updatedSongs = prevState.songs.concat(newSong);
                return {
                    songs: updatedSongs
                };
            });
        };

        return (
            <div>
                <Header />
                <SongForm addSong={addSong} />
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr className="song-header">
                            <th className="song-row__item">Song</th>
                            <th className="song-row__item">Artist</th>
                            <th className="song-row__item">Genre</th>
                            <th className="song-row__item">Rating</th>
                        </tr>
                    </tbody>
                </table>
                <SongList songs={this.state.songs} />
            </div>
        );
    };
};

export default SongOverview;