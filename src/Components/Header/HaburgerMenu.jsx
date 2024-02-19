export const HamburgerMenu = ({isShow, onMenuSelect}) => {
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
        onMenuSelect?.();
    };
    return (
        <div className={`hamburger-menu ${isShow && 'hamburger-menu-active'}`}>
            <ul className="hamburger-menu-items-wrapper">
                <span onClick={() => handleClickScroll('home')}>בית</span>
                <span onClick={() => handleClickScroll('about-section')}>אודות</span>
                <span onClick={() => handleClickScroll('services-section')}>תחומי עיסוק</span>
                <span onClick={() => handleClickScroll('clients-letters-slideshow')}>לקוחות ממליצים</span>
                <span onClick={() => handleClickScroll('contact-section')}>צור קשר</span>
            </ul>
        </div>
    )
}