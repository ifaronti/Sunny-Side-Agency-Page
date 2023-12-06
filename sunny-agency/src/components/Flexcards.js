import React,{useState, useEffect} from 'react'

export default function FlexCards(){
    let [flexImg, setFlexImg] = useState([])

    useEffect(() => {
        fetch('gridData.json')
            .then(response => response.json())
            .then(json => setFlexImg(json.flexImg))
    }, [])

    let cards = flexImg.map(image => {
        return (
            <img className='flexed-image' src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`} alt="" />
        )
    })

    return(
        <div className="flex-cards">
            {cards}
        </div>
    )
}