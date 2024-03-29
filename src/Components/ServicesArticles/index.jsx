import { useRef } from 'react';
import GroundBg from '../../assets/backgrounds/ground-article-bg.jpg';
import PowerBg from '../../assets/backgrounds/power-article-bg.jpg';
import FamilyBg from '../../assets/backgrounds/family-article-bg.jpg';
import DamageBg from '../../assets/backgrounds/damage-article-bg.jpg';
import './style.scss';
import { motion, useInView } from 'framer-motion';

export const ServicesArticles = () => {
    const familyRef = useRef(null)
    const isFamilyInView = useInView(familyRef)
    const groundRef = useRef(null);
    const isGroundInView = useInView(groundRef);
    const powerRef = useRef(null);
    const isPowerInView = useInView(powerRef);
    const damageRef = useRef(null);
    const isDamageInView = useInView(damageRef);

    return (
        <div className="services-articles">
            <div className="article">
                <div className="service-image-bg" >
                    <motion.img
                        src={FamilyBg}
                        initial={{ scale: 1 }}
                        animate={{ scale: isFamilyInView ? 1.04 : 1 }} // Scale up when in view
                        transition={{ duration: 0.2 }} // Adjust duration as needed
                    />
                </div>
                <div className="service-article-info" ref={familyRef}>
                    <h1>משפחה</h1>
                    <p>
                    משרדינו הינו משרד עורכי דין , המוסמך גם לגישור בין בני זוג, ובעל ניסיון רב בתחום זה ומיומנות רבה להבאת הצדדים לידי פשרות והבנות משותפות, המגבשות את הסכם הגירושין, בזמן המנימלי ככל האפשר. 
                    </p>
                    <p>
                    הסכם גירושין הוא כלי משפטי חשוב שמסייע לזוגות המתגרשים לנהל את הפרידה שלהם בצורה מכובדת, מסודרת וברורה. זהו פתרון שמקדם הסכמה ושיתוף פעולה, מונע סכסוכים ומגן על האינטרסים של שני הצדדים ובמיוחד את אינטרסים הילדים, אם ישנם. ההסכם כולל הסדרים בנוגע לנושאים כמו חלוקת רכוש, מזונות, משמורת על הילדים, זכויות ביקור ועוד. מטרת ההסכם היא לסדר את הפרידה באופן שיתאים לשני הצדדים תוך מניעת סכסוכים עתידיים.
                    </p>
                    <p>
                    משרדנו , הינו בקיא בעריכת וניסוח הסכם ממון בין בני זוג. הסכם ממון הוא מסמך משפטי בו בני זוג (נשואים או בדרך לנישואים) המסדירים ביניהם את חלוקת הרכוש והכלכלה המשותפת, לפני או לאחר הנישואין. הסכם זה כולל הוראות לגבי חלוקת הרכוש במקרה של פירוק הזוגיות, ולעיתים גם הסדרים נוספים כגון מזונות, משמורת ילדים ועוד. המטרה היא ליצור בהירות והסכמה מראש לגבי נושאים אלו, כדי למנוע סכסוכים ולהקל על תהליך הפרידה, אם יתרחש. ניתן לעשות הסכם ממון לפני הנישואין כדי לסדר את היחסים הכלכליים מראש ולמנוע סכסוכים עתידיים, במהלך הנישואין או בעת קבלת ירושה או מתנה גדולה: כדי לקבוע את מעמדם של נכסים אלו בחלוקה עתידית.
גם זוגות שנישאים בשנית, במיוחד כאשר יש להם רכוש או ילדים מנישואין קודמים.
                    </p>
                </div>
            </div>
            <div className="article">
                <div className="service-image-bg">
                    <motion.img
                        src={GroundBg}
                        initial={{ scale: 1 }}
                        animate={{ scale: isGroundInView ? 1.04 : 1 }} // Scale up when in view
                        transition={{ duration: 0.2 }} // Adjust duration as needed
                    />
                </div>
                <div className="service-article-info" ref={groundRef}>
                    <h1>מקרקעין</h1>
                 <p>
            עורך דין המייצג רוכש/מוכר בעסקת מקרקעין צריך לבצע סדרה של בדיקות קפדניות לפני החתימה על הסכם המכר המחייב, כדי להבטיח את האינטרסים של הלקוח ולמנוע בעיות עתידיות. לנוחיותכם רשימה של הבדיקות העיקריות:

            </p>
            <ul>
                <li>
                 בדיקת בעלות הנכס: יש לוודא שהמוכר הוא בעל הזכויות המלאות על הנכס ושאין מחלוקות או טענות של צדדים שלישיים.

                </li>
                <li>
                בדיקת עיקולים ומשכנתאות: יש לבדוק אם על הנכס חלים עיקולים, משכנתאות, או הגבלות אחרות שעלולות להשפיע על העברת הבעלות או על השימוש בנכס.

                </li>
                <li>
                בדיקת היתרי בנייה ושימוש: יש לוודא שכל ההיתרים הדרושים קיימים ותקפים, ושהנכס עומד בכל הדרישות התכנוניות והחוקיות. בדיקת זכויות גישה ושימוש: יש לוודא שיש גישה נוחה וחוקית לנכס ושאין הגבלות שימוש שעלולות להפריע לך (כגון הערות בטאבו).

                </li>
                <li>
                בדיקת תוכניות עתידיות: יש לבדוק אם יש תוכניות עתידיות שעלולות להשפיע על הנכס, כגון פיתוחים חדשים, שדרוגי תשתיות או שינויי ייעוד.

                </li>
                <li>
                בדיקת חובות ותשלומים: יש לוודא שכל החובות הקשורים לנכס, כולל ארנונה, מס שבח, וחובות נוספים שולמו.

                </li>
                <li>
                 עיון בהסכמים קיימים: יש לבדוק ולעיין בכל הסכמי שכירות או הסכמים אחרים שעלולים להשפיע על השימוש בנכס.

                </li>
                <li>
                בדיקת אישורים ודוחות: יש לוודא קבלת אישורים מתאימים מעורך דין המוכר ביחס לנכס.
                </li>
                <li>
                ניתוח הסכם המכר: יש להגיע לתנאי הסכם מכר מוסכמים על הצדדים, תיך ווידוא שהם משקפים את ההסכמות שנעשו ומגנים בראש ובראשונה על זכויות הרוכש.
                </li>
                <li>
                תכנון מס- בדיקת מס הרכישה/ השבח שיחול על הרוכש/ המוכר, בהתאמה (ככל שאין לו פטור).

                </li>
            </ul>
            <div className="article-tools">
                <span>
                    לנוחיותכם, <a href="https://www.misim.gov.il/svsimurechisha/FrmFirstPage.aspx#nbb" target="_blank">סימולטור מס רכישה</a> של רשות המיסים.
                </span>
                <span>
                    לנוחיותכם, <a href="https://www.misim.gov.il/svtsvazmitnew/FrmHadrachaRashit.aspx" target="_blank">סימולטור מס שבח</a> של רשות המיסים.
                </span>
                </div>
            </div>
            </div>
            <div className="article">
                <div className="service-image-bg">
                    <motion.img
                        src={PowerBg}
                        initial={{ scale: 1 }}
                        animate={{ scale: isPowerInView ? 1.04 : 1 }} // Scale up when in view
                        transition={{ duration: 0.2 }} // Adjust duration as needed
                    />
                </div>
                <div className="service-article-info" ref={powerRef}>
                    <h1>ייפוי כח מתמשך</h1>
                    <p>
                    יפוי כח מתמשך הוא מסמך משפטי שבו אדם (הממנה) מסמיך אדם אחר (המוסמך) לפעול בשמו בעודו בחיים, תחת תנאים מסוימים, לרוב כאשר הממנה לא יוכל לטפל בענייניו בעצמו, לדוגמה בשל ירידה בכושר הנפשי ו/או הגופני. להבדיל מיפוי כח רגיל שתקף כל עוד הממנה בעל כושר פעולה משפטי אך מתבטל ברגע שהממנה אינו יכול עוד להביע רצון משפטי באופן תקין (למשל, בשל דמנציה). ללא יפוי כח מתמשך, במקרה של אובדן כושר התפקוד, ייתכן מאד שתהליך משפטי מורכב יתחיל כדי למנות אפוטרופוס שיטפל בעניינים האישיים והכלכליים של האדם ובניגודלרצונותיו. יפוי כח מתמשך מונע זאת ומאפשר טיפול רציף וחלק בעניינים אלו. ומכאן חשיבותו הרבה. יפוי כח מתמשך הוא כלי משפטי חשוב שמאפשר לאנשים לשמור על שליטה על חייהם ורכושם במקרה של אובדן כושר התפקוד. הוא מבטיח כי ההחלטות שיתקבלו בשמם יהיו על פי רצונם ובהתאם להוראות שקבעו מראש, וכך מסייע בשמירה על כבודם ואוטונומיה בפרט בתקופות מורכבות.
                    </p>
                </div>
            </div>
            <div className="article">
                <div className="service-image-bg">
                     <motion.img
                        src={DamageBg}
                        initial={{ scale: 1 }}
                        animate={{ scale: isDamageInView ? 1.04 : 1 }} // Scale up when in view
                        transition={{ duration: 0.2 }} // Adjust duration as needed
                    />
                </div>
                <div className="service-article-info" ref={damageRef}>
                    <h1>נזיקין</h1>
                    <p>
                    למשרדנו נסיון מול חברות הביטוח השונות ובתי המשפט באם נפגעת בתאונת דרכים, משרדנו ידריך אותך לצורך קבלת התיעוד המתאים על מנת לקבל פיצוי הולם מחברות הביטוח / קרנית / צד ג עצמו (אם לא היה ביטוח). חשוב לתעד את הפגיעות שבוצעו גם בתמונות ולדווח לעו"ד מהר ככל הניתן.
                    </p>
                </div>
            </div>
        </div>
    )
}