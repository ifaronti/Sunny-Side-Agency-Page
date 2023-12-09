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
            <img key={image.img.key} className='flexed-image' src={windowWidth > 450 ? image.img.desktop : image.img.mobile} alt="/" />
        )
    })

    return(
        <section className="flex-cards" key={2}>
            {cards}
        </section>
    )
}