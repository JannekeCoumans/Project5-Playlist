import React, { Component } from "react"
import ListItem from "./ListItem"

class SongList extends Component{
    render() {
        const { songs } = this.props;
        const listItems = songs.map(item => (
            <ListItem 
                key={item.id}
                song={item}
            />
        ))

        return(
            <table className="song-list">
                {listItems}
            </table>
        )
    }
}

export default SongList