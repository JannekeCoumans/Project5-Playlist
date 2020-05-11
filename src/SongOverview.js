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
            songs: [
                {id: 1, songTitle: "Sunflower (feat. Steve Lacy)", artist: "Vampire Weekend", genre: "Pop", rating: 3},
                {id: 2, songTitle: "Charcoal Baby", artist: "Blood Orange", genre: "R&B", rating: 3},
                {id: 3, songTitle: "Money Trees", artist: "Kendrick Lamar, Jay Rock", genre: "R&B", rating: 4},
                {id: 4, songTitle: "N Side", artist: "Steve Lacey", genre: "R&B", rating: 4},
                {id: 5, songTitle: "Eat, Sleep, Wake (Nothing But You)", artist: "Bombay Bicycle Club", genre: "Rock", rating: 3},
                {id: 6, songTitle: "Let You Know - Robin Hannibal Rework", artist: "Flume, London Grammar, Robin Hannibal", genre: "Pop", rating: 5},
                {id: 7, songTitle: "Circles", artist: "Post Malone", genre: "Pop", rating: 4},
                {id: 8, songTitle: "Is It true", artist: "Tame Impala", genre: "Rock", rating: 5},
                {id: 9, songTitle: "Lost In Yesterday", artist: "Tame Impala", genre: "Rock", rating: 5},
                {id: 10, songTitle: "Freelance", artist: "Toro Y Moi", genre: "Pop", rating: 4},
                {id: 11, songTitle: "Motion", artist: "Emotional Oranges", genre: "R&B", rating: 5},
                {id: 12, songTitle: "Don't Start Now", artist: "Dua Lipa", genre: "Pop", rating: 4},
                {id: 13, songTitle: "Best To You", artist: "Blood Orange", genre: "R&B", rating: 5},
                {id: 14, songTitle: "Tailwhip", artist: "Men I Trust", genre: "Pop", rating: 5},
                {id: 15, songTitle: "It Might Be Time", artist: "Tame Impala", genre: "Rock", rating: 5}
            ]
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
            <div className="container">
                <Header songs={this.state.songs}/>
                <div className="songs">
                    <SongForm addSong={addSong} />
                    <div className="songHeader">
                        <div className="song-row__item" onClick={sortTitles}>Title ▼</div>
                        <div className="song-row__item" onClick={sortArtist}>Artist ▼</div>
                        <div className="song-row__item" onClick={sortGenre}>Genre ▼</div>
                        <div className="song-row__item" onClick={sortRating}>Rating ▼</div>
                        <div className="song-row_item" onclick={deleteSong}></div>
                    </div>
                    <SongList songs={this.state.songs} deleteSong={deleteSong} />
                </div>
                <Categorize songs={this.state.songs} />
            </div >
        );
    };
};

export default SongOverview;