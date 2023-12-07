import React,{useState, useEffect} from 'react'

export default function FlexCards(){
    let [flexImg, setFlexImg] = useState([])
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
        return window.removeEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
    }, [])


    useEffect(() => {
        fetch('gridData.json')
            .then(response => response.json())
            .then(json => setFlexImg(json.flexImg))
    }, [])

    let cards = flexImg.map(image => {
        return (
            <img className='flexed-image' src={windowWidth > 500 ? image.img.desktop : image.img.mobile} alt="/" />
        )
    })

    return(
        <div className="flex-cards">
            {cards}
        </div>
    )
}