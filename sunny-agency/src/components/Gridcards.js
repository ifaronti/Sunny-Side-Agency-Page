import React, { useState } from "react";
import Grid from './Gridcomponent'

export default function Cards(){
    let [gridData, setGridData] = useState([])

    React.useEffect(() => {
        fetch('gridData.json')
            .then(response => response.json())
            .then(json => setGridData(json.grid))
    }, [])

    let fourCards = gridData.map(card => {
        return(
            <Grid
                h2 = {card.h1}
                image = {card.img}
                paragraph = {card.description}
                learn = {card.more}
            />
        )
    })
    return(
        <div className="grid-wrap">
            {fourCards}
        </div>
    )
}