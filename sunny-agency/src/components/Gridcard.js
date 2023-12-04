export default function Gridcard(props){
    return(
        <div className="card">
            <h2>{props.h2}</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} alt="" />
            <p>{props.paragraphy}</p>
            <p>{props.learn}</p>
            <h3>{props.designphoto}</h3>
            <p>{props.designphotoP}</p>
        </div>
    )
}