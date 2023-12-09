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
                h2 = {card.h2}
                image = {card.img}
                paragraph = {card.description}
                learn = {card.more}
                class = {card.class}
                heading = {card.heading}
                details = {card.details}
                photo = {card.photo}
                flexImg = {card.flexImg}
            />
        )
    })
    
    return(
        <section className="grid-wrap">
            {fourCards}
        </section>
    )
}