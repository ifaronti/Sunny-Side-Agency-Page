export default function Topnav(){
    return(
        <header className="top-nav-container">
            <img className="header-image" src={`${process.env.PUBLIC_URL}/assets/images/image-header.jpg`} alt="" />
            <nav>
                <img className="sunny-logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Sunnyside agency logo" />
                <div className="links-wrap">
                    <ul>
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