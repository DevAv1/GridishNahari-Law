import {useRef, useState} from 'react';
import { useInView } from "framer-motion";
import './style.scss';
import Family from '../../assets/icons/family.png';
import Damage from '../../assets/icons/damage.png';
import Ground from '../../assets/icons/ground.png';
import Power from '../../assets/icons/power.png';
import ListBullet from '../../assets/icons/categories.png';
import { motion } from "framer-motion";

export const Services = () => {
    const [servicesIndex, setServicesIndex] = useState(1);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="services" id="services-section">
            <div className="section-header">תחומי עיסוק</div>
            <div className="services-content">
                <div className="services-items-wrapper" ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <motion.div
                        className="services-nav"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <div className={`service-pick ${servicesIndex === 1 && 'active-service'}`} onClick={() => setServicesIndex(1)}>
                            <img src={Family} alt="family"/>
                            <span>דיני משפחה</span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="services-nav"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <div className={`service-pick ${servicesIndex === 2 && 'active-service'}`} onClick={() => setServicesIndex(2)}>
                            <img src={Ground} alt="family"/>
                            <span>מקרקעין</span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="services-nav"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <div className={`service-pick ${servicesIndex === 3 && 'active-service'}`} onClick={() => setServicesIndex(3)}>
                            <img src={Power} alt="family"/>
                            <span>ייפוי כח מתמשך</span>
                        </div>
                    </motion.div>
                    <div className="services-nav">
                        <div className={`service-pick ${servicesIndex === 4 && 'active-service'}`} onClick={() => setServicesIndex(4)}>
                            <img src={Damage} alt="family"/>
                            <span>נזיקין</span>
                        </div>
                    </div>
                </div>
                <div className="service-descriptions-wrapper">
                    <div className={`service-description ${servicesIndex === 1 && 'show'}`}>
                        <ul>
                            <li><img src={ListBullet} alt="service-list"/>  גירושין</li>
                            <li><img src={ListBullet} alt="service-list"/>  מזונות</li>
                            <li><img src={ListBullet} alt="service-list"/>  משמורת</li>
                            <li><img src={ListBullet} alt="service-list"/>  כתובה</li>
                            <li><img src={ListBullet} alt="service-list"/>  הסכם ממון</li>
                            <li><img src={ListBullet} alt="service-list"/>  הסכם שלום בית</li>
                            <li><img src={ListBullet} alt="service-list"/>  הגירה</li>
                            <li><img src={ListBullet} alt="service-list"/>  אמנת האג</li>
                            <li><img src={ListBullet} alt="service-list"/>  חוק הנוער</li>
                            <li><img src={ListBullet} alt="service-list"/>  צו הרחקה / הטרדה מאיימת</li>
                            <li><img src={ListBullet} alt="service-list"/>  ייצוג בבית הדין ובבתי המשפט השונים</li>
                            <li><img src={ListBullet} alt="service-list"/>  התרת נישואין</li>
                            <li><img src={ListBullet} alt="service-list"/>  דוברת עברית ואנגלית</li>
                            <li><img src={ListBullet} alt="service-list"/>  צוואות</li>
                            <li><img src={ListBullet} alt="service-list"/>  ירושות</li>
                            <li><img src={ListBullet} alt="service-list"/>  התנגדות לצוואה</li>
                        </ul>
                        {/* <span className="read-more" onClick={() => onReadMoreClick('FAMILY')}>קרא עוד</span> */}
                    </div>
                    <div className={`service-description ${servicesIndex === 2 && 'show'}`}>
                        <ul>
                            <li><img src={ListBullet} alt="service-list"/> עסקאות מכר</li>
                            <li><img src={ListBullet} alt="service-list"/>  שכירות</li>
                            <li><img src={ListBullet} alt="service-list"/>  רישום הערות</li>
                            <li><img src={ListBullet} alt="service-list"/>  בתים משותפים</li>
                            <li><img src={ListBullet} alt="service-list"/>  מכתבי אזהרה</li>
                            <li><img src={ListBullet} alt="service-list"/>  מיסוי מקרקעין</li>
                            <li><img src={ListBullet} alt="service-list"/>  פינוי בינוי/תמ"א</li>
                        </ul>
                        {/* <span className="read-more" onClick={() => onReadMoreClick('GROUND')}>קרא עוד</span> */}
                    </div>
                    <div className={`service-description ${servicesIndex === 3 && 'show'}`}>
                        <ul>
                            <li><img src={ListBullet} alt="service-list"/>  מינוי ממוני</li>
                            <li><img src={ListBullet} alt="service-list"/>  מינוי רפואי</li>
                            <li><img src={ListBullet} alt="service-list"/>  מינוי מנהלי</li>
                            <li><img src={ListBullet} alt="service-list"/>  בני זוג ויחידים</li>
                        </ul>
                        {/* <span className="read-more" onClick={() => onReadMoreClick('POWER')}>קרא עוד</span> */}
                    </div>
                    <div className={`service-description ${servicesIndex === 4 && 'show'}`}>
                        <ul>
                            <li><img src={ListBullet} alt="service-list"/>  תביעת רשלנות</li>
                            <li><img src={ListBullet} alt="service-list"/>  תביעה בגין תאונות דרכים</li>
                            <li><img src={ListBullet} alt="service-list"/>  תביעה בגין תאונות עבודה</li>
                        </ul>
                        {/* <span className="read-more" onClick={() => onReadMoreClick('DAMAGE')}>קרא עוד</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
