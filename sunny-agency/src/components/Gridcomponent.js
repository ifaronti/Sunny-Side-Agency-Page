import React, {useState, useEffect} from "react"

export default function Grid(props){
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
        return window.removeEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
    }, [])

    let detailsDiv = props.class ? `${props.class} description`:'description'

    let description = props.class ? "greybg-paragraph greybg-paragraph2":"greybg-paragraph"

    let learnBtn = props.class ? "learn-more learn-more2":"learn-more"

    let twoHeadings = props.photo ? 'photography':'two-header'

    let twoDetails = props.photo? 'photo-details':'details'

    let headerClass = props.class ? 'fourth-H2':''

    return(
        <div className="card">
            {props.image && <img key={props.image.key} className="gridImg" src={windowWidth > 499 ? props.image.desktop : props.image.mobile} alt="" />}

            <div className={detailsDiv}>
                {props.h2 && <h2 className={headerClass}>{props.h2}</h2>}

                {props.paragraph &&<p className={description}>{props.paragraph}</p>}

                {props.learn && <button className={learnBtn}>{props.learn}</button>}

                <div className="two-cards">
                    {props.heading && <h2 className={twoHeadings}>{props.heading}</h2>}
                    
                    {props.details && <p className={twoDetails}>{props.details}</p>}
                </div>
            </div>
        </div>
    )
}