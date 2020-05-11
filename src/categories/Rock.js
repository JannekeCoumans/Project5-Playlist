import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Rock extends Component {
    render() {
        const { songs } = this.props;
        const rockSongs = songs.filter(item =>
            item.genre == "Rock").map(item =>
                <CategoryItem
                    key={item.id}
                    song={item}
                />
            );

        return (
            <div className="category">
                <h3>Rock:</h3>
                <div className="category-list">{rockSongs}</div>
            </div>
        )
    }
}

export default Rock;