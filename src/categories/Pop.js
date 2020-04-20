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
            <div className="pop-songs">
                <h3>Pop:</h3>
            <table className="category-list" style={{ width: "33%", textAlign: "center" }}>
                {popSongs}
            </table>
            </div>
        )
    }
}

export default Pop;