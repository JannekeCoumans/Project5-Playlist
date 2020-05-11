import React, { Component } from "react"
import ListItem from "./ListItem"

class SongList extends Component {
    render() {
        const { songs, deleteSong } = this.props;
        const listItems = songs.map(item => (
            <ListItem
                key={item.id}
                song={item}
                deleteSong={deleteSong}
            />
        ))

        return (
            <div className="song-list">
                {listItems}
            </div>
        )
    }
}

export default SongList