import {useRef} from 'react';
import './style.scss';
import { useInView } from "framer-motion";

export const About = () => {
    const refLawyerOne = useRef(null);
    const refLawyerTwo = useRef(null);
    const isInViewFirst = useInView(refLawyerOne, { once: true });
    const isInViewSecond = useInView(refLawyerTwo, { once: true });

    return (
        <div className="about" id="about-section">
            <span className="section-header">אודות</span>
            <div className="about-content">
                <div className="about-lawyer" ref={refLawyerOne}
                     style={{
                        transform: isInViewFirst ? "none" : "translateX(-200px)",
                        opacity: isInViewFirst ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                >
                    <p>
                    עורכת דין יפית נהרי, הינה עו"ד עצמאית מזה כ- 16 שנה. עו"ד נהרי מתמחה בתחום דיני המשפחה(גירושין), התרת נישואין צוואות ירושות, חוק הנוער, הגירה, ידועים בציבור וליטיגציה אזרחית ומטפלת גם בלקוחות דוברי אנגלית שאחד מהם לעיתים שוהה מחוץ לארץ. לעו"ד נהרי נסיון רב בניהול תיקים מגוונים ומורכבים בתחום דיני המשפחה ובהופעות בערכאות השיפוט השונות. צוות המשרד מלווה את לקוחותיו החל משלב ההחלטה הראשונית, בונה אסרטגיה מנצחת מדריך הלקוח על בסיס יום יומי, ומלווה אותו עד לסיום הטיפול בתיק, במקצועיות ובנחישות ועובד עם מיטב המומחים בתחום.
                        <br/>
                        <br/>
                        האני מאמין שלי, עו"ד יפית נהרי דוגלת בגישה לפיה יש לנסות ולסיים את המחלוקות במינימום סבל, מתח וכאב של בני הזוג והן של הילדים, שהינם לרוב קורבן תמים להליכי הגירושין מה שנוצר בין הוריהם. משרדינו עובד עם אנשי מקצוע ומומחים בתחום המשפחה כגון- פסיכולוגים, יועצים זוגיים, חוקרים, מאבחנים ועוד.
                    </p>
                    <span className="lawyer-name">יפית נהרי</span>
                </div>
                <div className="about-lawyer" ref={refLawyerTwo}
                         style={{
                            transform: isInViewSecond ? "none" : "translateX(-200px)",
                            opacity: isInViewSecond ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                >
                    <p>
                        עורכת דין ענבר גרידיש בוגרת אוניברסיטת רייכמן ובוגרת אוניברסיטת חיפה. LL.B, M.B.A מוסמכת בניהול
                        נדל"ן ושמאות ועורכת דין מוסמכת לענייני מקרקעין.
                        את ההתמחות בשנת 2019 עשתה ענבר במשרד עוה"ד חג'ג', בוכניק ויינשטיין בין משרדי עוה"ד המוכרים בארץ
                        בתחומי הנדל"ן וקבוצות הרכישה.
                        ענבר מומחית לעסקאות מכר, שכירות, רישומים בטאבו, מיסוי מקרקעין ויפויי כח מתמשך.
                        <br/>
                        <br/>
                        האני מאמין שלי, עו"ד ענבר גרידיש דוגלת גם היא בהקשבה, שימת לב לפרטים, התייעצויות עם מומחים רלוונטיים בענייני מיסוי, משרדי ממשלה ועוד על מנת למקסם את התועלת שבכל תיק.
                    </p>
                    <span className="lawyer-name">ענבר גרידיש</span>
                </div>
            </div>
        </div>
    )
}