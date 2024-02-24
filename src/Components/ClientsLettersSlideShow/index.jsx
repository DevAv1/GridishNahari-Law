import {useState, useEffect} from 'react';
import RightArrow from '../../assets/icons/right-arrow.png';
import LeftArrow from '../../assets/icons/left-arrow.png';
import './style.scss';

const articles = [
    {
        date: '10/12/2012',
        content: '      "  יפית שלום\n' +
            '                        שהחלטתי שאני חייבת לקום ולעזוב את הבית שלי ,לא ידעתי מהן  הזכיות שלי   , לא תיארתי לעצמי שיש לי את הכוחות לבצע את התהליך שניקרא גירושים והייתי מבולבלת . ופה הגיעו הצמד המנצח יפית וגל נהרי הם היו זמינים תמיד לכל שאלה.תמיד היו לי כאוזן קשבת .ובעיקר נתנו לי תקווה שהכל יהיה בסדר שאין לי מה לדאוג מבחינה כלכלית , ובעיקר לזכיות של הילדים שלי .\n' +
            '                        ניתנו החלטות טובות בטיפולם המסור , ובסיועם הגענו להסכמות ברוח טובה ולסיום ההליכים בצורה טובה.\n' +
            '                        תודה רבה, מאלינור."'
    }
    ,
    {
        date: '10/12/2012',
        content: '"ענבר היקרה ,תודה על הייצוג בעסקת מקרקעין מורכבת, אין ספק שאת האדם המתאים ליצוג בעסקאות מקרקעין.בזכותך החוזה מול החברה הקבלנית שופר , טיפלת במקצועיות במו"מ וגם ברישום ובסוגית המיסוי. בברכה,בניאל י\'. פתח תקווה\n' +
            '"'
    },
    {
        date: '10/12/2012',
        content: '    " יפית היקרה\n' +
            '                        שמעתי את ההודעה המשמחת\n' +
            '                        אכן , נעשה פה צדק איתי\n' +
            '                        אני מודה לך שהייתם השליחים שלי , תודה רבה על הכל."'
    },
    {
        date: '10/12/2012',
        content: '"                        ענבר היקרה , תודה על המיומנות והמקצועיות ביצוג בעסקאות מכר של קניה ומכירה שביצעת עבורנו.יצגת אותנו ביסודיות,מסירות ומקצועיות אין קץ,פתרת לנו בעיות סבוכות בסוגיית המיסוי.מקווים שנהנת מהמתנה הצנועה ששלחנו לך ,את ראויה להרבה יותר מזה .תודה רבה,עדנה ויוסי יצחק.\n' +
            '"       '
    },
    {
        date: '10/12/2012',
        content: '      "  יפית,\n' +
            '                        ברצוננו להודות לך מקרב הלב על הנכונות, האכפתיות והעזרה הרבה שנתת לנו ולמשפחתנו במשך תקופה ארוכה.\n' +
            '                        היית קשובה לבעיותינו וגילית מעורבות בנושא רגיש וכאוב ובכל עת שפנינו אליך לבקשת עצה ועזרה התפנית לענות לנו, לייעץ ולעזור, בסבלנות, ברגישות ובמקצועיות, דבר שהקל עלינו מאוד ביודענו שתעשי כל שביכולתך על מנת למצוא דרך לפתור את הבעיה הקשה בה היינו.\n' +
            '                        את כל זאת נזכור בעתיד ונשמח להמליץ עליך בפני כל אחד שיהיה בצרה או מצוקה ויזדקק לעזרתך המקצועית והאישית.\n' +
            '                        בתודה ובכבוד רב,\n' +
            '                        משפחת שמואלי"'
    },
    {
        date: '10/12/2012',
        content: '    " לענבר עורכת הדין המקסימה,\n' +
            '                        תודה לך על העזרה\n' +
            '                        תודה על המקצועיות שלך בתור עורכת דין והידע המשפטי,\n' +
            '                        ובכך פתרת לי בעיה עם לקוח קשה,\n' +
            '                        תודה לך על יחס חם אכפתיות ואדיבות מכל הלב בכל זמן ושעה,\n' +
            '                        אין עליך תודה לך \n' +
            '                        מעריכה מאוד  מלי, ראש העין."'
    }
];

const ArticleSlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCurrentSlide((prevSlide) =>
    //             prevSlide === articles.length - 1 ? 0 : prevSlide + 1
    //         );
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, [currentSlide]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const onArrowClick = (side) => {
        if (side === 'right') {
            setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? articles.length - 1 : prevSlide - 1
        );
        }
        if (side === 'left') {
            setCurrentSlide((prevSlide) =>
                prevSlide === articles.length - 1 ? 0 : prevSlide + 1
            );
        }
    }

    return (
        <div className="clients-letters-slideshow" id="clients-letters-slideshow">
            <div className="section-header">לקוחות ממליצים</div>

            <div className="slideshow-container">
                    <div className="articles-wrapper">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className={`slide fade ${index === currentSlide ? 'show' : ''}`}
                            >
                                <div className="article-content">
                                    <p className="article-p">{article.content}</p>
                                    <span className="article-title">{article.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                <div className="arrow-container">
                    <div className="arrow a-right" onClick={() => onArrowClick('right')}><img src={RightArrow}/></div>
                    <div className="arrow a-left" onClick={() => onArrowClick('left')}><img src={LeftArrow}/></div>
                </div>
                <div className="dot-container">
                    {articles.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleSlideShow;
