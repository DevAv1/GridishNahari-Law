import './style.scss';
import {useEffect, useState} from "react";
import {Hamburger} from "./Hamburger.jsx";
import Phone from '../../assets/icons/phone.svg';
import Email from '../../assets/icons/email.svg';
import Location from '../../assets/icons/location.svg';
import Logo from '../../assets/icons/logo-trans.png';
import {HamburgerMenu} from "./HaburgerMenu.jsx";
export const Header = ({onMenuOpen}) => {
    const [scrolled, setScrolled] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

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

    const onClickCallback = () => {
        setHamburgerMenu((prevState) => (!prevState));
        onMenuOpen();
    }
    return (
        <div className={`header ${scrolled && 'dynamic-header'}`}>
            <div className="header-content">
                <Hamburger isShow={hamburgerMenu} onClickCallback={onClickCallback} scrolled={scrolled}/>
                <HamburgerMenu isShow={hamburgerMenu} onMenuSelect={() => setHamburgerMenu(false)}/>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <nav className="nav-items">
                    <span onClick={() => handleClickScroll('home')}>בית</span>
                    <span onClick={() => handleClickScroll('about-section')}>אודות</span>
                    <span onClick={() => handleClickScroll('services-section')}>תחומי עיסוק</span>
                    <span onClick={() => handleClickScroll('clients-letters-slideshow')}>לקוחות ממליצים</span>
                    <span onClick={() => handleClickScroll('contact-section')}>צור קשר</span>
                </nav>
                <div className="contact-tools">
                    <img src={Location} alt='phone' />
                    <img src={Email} alt='email' />
                    <img src={Phone} alt='location' />
                </div>
            </div>
        </div>
    )
}