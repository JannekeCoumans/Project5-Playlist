import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Pop extends Component{
    render() {
        const { songs } = this.props;
        const popSongs = songs.filter(item =>
            item.genre == "Pop").map(item => 
            <CategoryItem 
                key={item.id}
                song={item}
            />
        );

        return(
            <div className="category">
                <h3>Pop:</h3>
                <div className="category-list">{popSongs}</div>
            </div>
        )
    }
}

export default Pop;