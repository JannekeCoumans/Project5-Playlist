import React from "react";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import Categorize from "./components/Categorize";

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

        const sortTitles = () => {
            const sortedBySongTitle = [...this.state.songs].sort(function (a, b) {
                if (a.songTitle < b.songTitle) return -1;
                else if (a.songTitle > b.songTitle) return 1;
                return 0;
            });

            this.setState({
                songs: sortedBySongTitle
            })
        }

        const sortArtist = () => {
            const sortedByArtist = [...this.state.songs].sort(function (a, b) {
                if (a.artist < b.artist) return -1;
                else if (a.artist > b.artist) return 1;
                return 0;
            });

            this.setState({
                songs: sortedByArtist
            })
        }

        const sortGenre = () => {
            const sortedByGenre = [...this.state.songs].sort(function (a, b) {
                if (a.genre < b.genre) return -1;
                else if (a.genre > b.genre) return 1;
                return 0;
            });

            this.setState({
                songs: sortedByGenre
            })
        }

        const sortRating = () => {
            const sortedByRating = [...this.state.songs].sort(function (a, b) {
                if (a.rating < b.rating) return 1;
                else if (a.rating > b.rating) return -1;
                return 0;
            });

            this.setState({
                songs: sortedByRating
            });
        };

        const deleteSong = (event) => {
            const titleOfSongToDelete = event.target.getAttribute("value");
            const newArrayOfSongs = this.state.songs.filter(song => song.songTitle !== titleOfSongToDelete).map(song => { return song });
            this.setState({
                songs: newArrayOfSongs
            })
        };   

    return(
            <div>
                <Header />
                <SongForm addSong={addSong} />
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr className="song-header">
                            <th className="song-row__item" style={{ width: "25%" }} onClick={sortTitles}>Song</th>
                            <th className="song-row__item" style={{ width: "25%" }} onClick={sortArtist}>Artist</th>
                            <th className="song-row__item" style={{ width: "25%" }} onClick={sortGenre}>Genre</th>
                            <th className="song-row__item" style={{ width: "25%" }} onClick={sortRating}>Rating</th>
                        </tr>
                    </tbody>
                </table>
                <SongList songs={this.state.songs} deleteSong={deleteSong} />
                <Categorize songs={this.state.songs} />
            </div >
        );
    };
};

export default SongOverview;