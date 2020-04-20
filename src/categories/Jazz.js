import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Jazz extends Component{
    render() {
        const { songs } = this.props;
        const jazzSongs = songs.filter(item =>
            item.genre == "Jazz").map(item => 
            <CategoryItem 
                key={item.id}
                song={item}
            />
        );

        return(
            <div className="jazz-songs">
                <h3>Jazz:</h3>
            <table className="category-list" style={{ width: "33%", textAlign: "center" }}>
                {jazzSongs}
            </table>
            </div>
        )
    }
}

export default Jazz;