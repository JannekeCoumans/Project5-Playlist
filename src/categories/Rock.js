import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Rock extends Component{
    render() {
        const { songs } = this.props;
        const rockSongs = songs.filter(item =>
            item.genre == "Rock").map(item => 
            <CategoryItem 
                key={item.id}
                song={item}
            />
        );

        return(
            <div className="rock-songs">
                <h3>Rock:</h3>
                <table className="category-list" style={{ width: "33%", textAlign: "center" }}>
                    {rockSongs}
                </table>
            </div>
        )
    }
}

export default Rock;