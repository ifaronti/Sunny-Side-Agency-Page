import React, {useState, useEffect} from 'react'

export default function Topnav(){
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
        <header className="top-nav-container">
            <img className="header-image" src={`${process.env.PUBLIC_URL}/assets/images/${windowWidth > 500 ? 'image-header.jpg' : 'mobile/image-header.jpg'}`} alt="" />
            <nav>
                <img className="sunny-logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Sunnyside agency logo" />
                <div className="links-wrap">
                    <ul className='nav-list'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </nav>
            <div className="arrow-creatives">
                <h1>WE ARE CREATIVES</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/images/icon-arrow-down.svg`} alt="" />
            </div>
        </header>
    )
}