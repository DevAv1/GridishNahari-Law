import './style.scss';
import {useEffect, useState} from "react";
import {Hamburger} from "./Hamburger.jsx";
import Phone from '../../assets/icons/phone.svg';
import Email from '../../assets/icons/email.svg';
import Location from '../../assets/icons/location.svg';
import Logo from '../../assets/icons/GN-logo-primary.svg';
import Whatsapp from '../../assets/icons/whatsapp.png';
import {HamburgerMenu} from "./HaburgerMenu.jsx";
import { ContactPickerTool } from './ContactPickerTool.jsx';
import { FastContact } from '../FastContact/index.jsx';

export const Header = ({onMenuOpen}) => {
    const [scrolled, setScrolled] = useState(false);
    const [isContactToolShow, setIsContactToolShow] = useState(false);
    const [isPhone, setIsPhone] = useState(true);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 79;
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

    const handleContactClick = (type) => {
        setIsPhone(type === 'phone');
        setIsContactToolShow(p => !p);
    }

    const onClickCallback = () => {
        setHamburgerMenu((prevState) => (!prevState));
        onMenuOpen();
    }
    return (
        <div className={`header ${scrolled && 'dynamic-header prevent-select'}`}>
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
                    <img src={Location} alt='location' onClick={() => handleClickScroll('location-map')}/>
                    <img src={Email} alt='email' onClick={() => handleClickScroll('contact-section')} />
                    <img src={Phone} alt='phone' onClick={() => handleContactClick('phone')}/>
                    <img src={Whatsapp} alt='whatsapp' onClick={() => handleContactClick('whatsapp')} />
                    <ContactPickerTool
                        isDynamic={scrolled}
                        show={isContactToolShow}
                        isPhone={isPhone}
                        onClose={() => setIsContactToolShow(false)}
                    />
                </div>
                <FastContact/>
            </div>
        </div>
    )
}