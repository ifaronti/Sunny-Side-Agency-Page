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


    return(
        <div className="card">
            {props.image && <img key={props.image.key} className="gridImg" src={windowWidth > 500 ? props.image.desktop : props.image.mobile} alt="" />}
            <div className={props.class ? `${props.class} description`:'description'}>
                {props.h2 && <h2>{props.h2}</h2>}
                {props.paragraph &&<p className={props.class ? "greybg-paragraph greybg-paragraph2":"greybg-paragraph"}>{props.paragraph}</p>}
                {props.learn && <button className={props.class ? "learn-more learn-more2":"learn-more"}>{props.learn}</button>}
                <div className="two-cards">
                    {props.heading && <h2 className={props.photo ? 'photography':'two-header'}>{props.heading}</h2>}
                    {props.details && <p className={props.photo? 'photo-details':'details'}>{props.details}</p>}
                </div>
            </div>
        </div>
    )
}