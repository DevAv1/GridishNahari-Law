import './style.scss';
import {useEffect} from "react";

export const Parallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.parallax');
            const scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = 0 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-wrapper">
            <div className="parallax">
            </div>
            <div className="parallax-office-title">
                <span className="title-main">גרידיש נהרי</span>
                <span className="title-secondary">משרד עורכי דין</span>
                <div className="title-services">
                    <ul>
                        <li>נזיקין</li>
                        <li>דיני משפחה</li>
                        <li>ייפוי כח מתמשך</li>
                        <li>מקרקעין</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}