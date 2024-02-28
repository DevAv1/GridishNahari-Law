import './style.scss';
import Logo from '../../assets/icons/GN-logo-primary.svg';

export const Footer = () => {
    const handleClickScroll = (section) => {
        const isHome = section === 'home';
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: !isHome ? "center" : "start",
                inline: !isHome ? "center" : "start"
            });
        }
    };
    return (
        <div className="footer">
            <div className="footer-content-wrapper">
                <div className="right-footer">
                    <span className="office-name">גרידיש נהרי משרד עורכי דין</span>
                </div>
                <nav className="nav-items">
                    <span onClick={() => handleClickScroll('home')}>בית</span>
                    <span onClick={() => handleClickScroll('about-section')}>אודות</span>
                    <span onClick={() => handleClickScroll('services-section')}>תחומי עיסוק</span>
                    <span onClick={() => handleClickScroll('clients-letters-slideshow')}>לקוחות ממליצים</span>
                    <span onClick={() => handleClickScroll('contact-section')}>צור קשר</span>
                </nav>
                <div className="left-footer">
                    <div className="logo" onClick={() => handleClickScroll('home')}>
                        <img src={Logo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}