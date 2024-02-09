import './style.scss';
export const Parallax = () => {
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