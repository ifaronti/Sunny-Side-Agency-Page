export default function Grid(props){
    return(
        <div className="card">
            {props.image && <img className="gridImg" src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} alt="" />}
            <div className={props.class ? `${props.class} description`:'description'}>
                {props.h2 && <h2>{props.h2}</h2>}
                {props.paragraph &&<p className={props.class ? "greybg-paragraph greybg-paragraph2":"greybg-paragraph"}>{props.paragraph}</p>}
                {props.learn && <button className={props.class ? "learn-more learn-more2":"learn-more"}>{props.learn}</button>}
            </div>
        </div>
    )
}