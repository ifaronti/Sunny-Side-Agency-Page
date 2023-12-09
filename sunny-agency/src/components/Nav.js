import React, {useState, useEffect} from 'react'

export default function Topnav(){
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [activeLink, setActiveLink] = useState('Contact')
    let [showlink, setShowLink] = useState(false)

    useEffect(()=> {
        window.addEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
        return window.removeEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
    }, [])

    let imageSRC = windowWidth > 1439 ? 'image-header.jpg' : 'mobile/image-header.jpg'
    let wrapClass = showlink ? "mobile-links-wrap":'links-wrap'
    let linksClass = showlink ? 'btn-span link-bars':'btn-span'

    return(
        <header className="top-nav-container">
            <img className="header-image" src={`${process.env.PUBLIC_URL}/assets/images/${imageSRC}`} alt="" />
            <nav>
                <img className="sunny-logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Sunnyside agency logo" />
                <section className={wrapClass}>
                    <ul className='nav-list four-links'>
                        <li onClick={()=> setActiveLink('About')} 

                            className={activeLink === 'About' ? 'activeLink':''}
                        >
                            {activeLink === 'About'? 'ABOUT':'About'}

                        </li>
                        {/* **************** */}

                        <li onClick={()=> setActiveLink('Services')} 

                            className={activeLink === 'Services' ? 'activeLink':''}
                        >
                            {activeLink === 'Services'? 'SERVICES':'Services'}
                        </li>

                        {/* ***************** */}

                        <li onClick={()=> setActiveLink('Projects')} 
                            className={activeLink === 'Projects' ? 'activeLink':''}
                        >
                            {activeLink === 'Projects'? 'PROJECTS':'Projects'}

                        </li>
                        {/* ***************** */}

                        <li onClick={()=> setActiveLink('Contact')}
                            className={activeLink === 'Contact' ? 'activeLink':''}
                        >   
                        {activeLink === 'Contact'? 'CONTACT':'Contact'}
                        </li>
                    </ul>
                </section>
                <section className='mobile-menu' onClick={()=> setShowLink(prevShowLink => !prevShowLink)}>
                    <div className={linksClass}></div>
                    <div className={linksClass}></div>
                    <div className={linksClass}></div>
                </section>
            </nav>
            <article className="arrow-creatives">
                <h1>WE ARE CREATIVES</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/images/icon-arrow-down.svg`} alt="" />
            </article>
        </header>
    )
}