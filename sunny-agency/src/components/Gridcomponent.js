export default function Grid(props){
    return(
        <div className="card">
            {props.image && <img className="gridImg" src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} alt="" />}
            <div className="description">
                {props.h2 && <h2>{props.h2}</h2>}
                {props.paragraph &&<p className="greybg-paragraph">{props.paragraph}</p>}
                {props.learn && <button className="learn-more">{props.learn}</button>}
            </div>
        </div>
    )
}