import './style.scss';
import {useEffect, useState} from "react";
import {Hamburger} from "./Hamburger.jsx";

export const Header = () => {
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
    }
    return (
        <div className={`header ${scrolled && 'dynamic-header'}`}>
            <div className="header-content">
                <Hamburger onClickCallback={onClickCallback} scrolled={scrolled}/>
                <div className="logo">GN</div>
                <nav className="nav-items">
                    <span onClick={() => handleClickScroll('home')}>בית</span>
                    <span onClick={() => handleClickScroll('about-section')}>אודות</span>
                    <span onClick={() => handleClickScroll('services-section')}>תחומי עיסוק</span>
                    <span onClick={() => handleClickScroll('client-recommend-section')}>לקוחות ממליצים</span>
                    <span onClick={() => handleClickScroll('contact-section')}>צור קשר</span>
                </nav>
            </div>
        </div>
    )
}