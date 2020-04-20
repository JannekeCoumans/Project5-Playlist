import React from "react"
import Rock from "../categories/Rock"
import Jazz from "../categories/Jazz"
import Pop from "../categories/Pop"

function Categorize({ songs }){
    return(
        <div className="categories">
            <Rock songs={songs} />
            <Jazz songs={songs} />
            <Pop songs={songs} />
        </div>
    )
}

export default Categorize