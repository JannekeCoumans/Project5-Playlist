import React, { Component } from "react"
import ListItem from "./ListItem"

class SongList extends Component{
    render() {
        const { songs, deleteSong } = this.props;
        const listItems = songs.map(item => (
            <ListItem 
                key={item.id}
                song={item}
                deleteSong={deleteSong}
            />
        ))

        return(
            <table className="song-list" style={{ width: "100%", textAlign: "center" }}>
                {listItems}
            </table>
        )
    }
}

export default SongList