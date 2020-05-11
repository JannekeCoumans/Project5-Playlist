import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Rnb extends Component{
    render() {
        const { songs } = this.props;
        const rnbSongs = songs.filter(item =>
            item.genre == "R&B").map(item => 
            <CategoryItem 
                key={item.id}
                song={item}
            />
        );

        return(
            <div className="category">
                <h3>R&B:</h3>
                <div className="category-list">{rnbSongs}</div>
            </div>
        )
    }
}

export default Rnb;