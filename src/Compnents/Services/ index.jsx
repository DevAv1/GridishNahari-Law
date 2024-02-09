import './style.scss';
import Family from '../../assets/icons/studying-desk-svgrepo-com.svg';
import Damage from '../../assets/icons/classic-column-svgrepo-com.svg';
import Ground from '../../assets/icons/legal-hammer-svgrepo-com.svg';
import Power from '../../assets/icons/law-scales-svgrepo-com.svg';

export const Services = () => {
    return (
        <div className="services" id="services-section">
            <div className="section-header">תחומי עיסוק</div>

            <div className="services-items-wrapper">
                <div className="service-item">
                    <div className="service-header">
                        <img src={Family} alt="family"/>
                        <span>דיני משפחה</span>
                    </div>
                    <span>
                        פה יכתב בכמה מילים תמצות של הכותרת
                    </span>
                </div>
                <div className="service-item">
                    <div className="service-header">
                        <img src={Damage} alt="family"/>
                        <span>נזיקין</span>
                    </div>
                    <span>
                        פה יכתב בכמה מילים תמצות של הכותרת
                    </span>
                </div>
                <div className="service-item">
                    <div className="service-header">
                        <img src={Ground} alt="family"/>
                        <span>מקרקעין</span>
                    </div>
                    <div className="service-description">
                         <span>
                            פה יכתב בכמה מילים תמצות של הכותרת
                        </span>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-header">
                        <img src={Power} alt="family"/>
                        <span>ייפוי כח מתמשך</span>
                    </div>
                    <div className="service-description">
                        <span>
                            פה יכתב בכמה מילים תמצות של הכותרת
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}