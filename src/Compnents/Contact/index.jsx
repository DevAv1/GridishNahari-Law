import './style.scss';
import {useState} from "react";

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
        alert('Form submitted. Thank you!');
    };
    return (

        <div className="contact" id="contact-section">
            <div className="section-header">יצירת קשר</div>
            <div className="contact-us-wrapper">
                <div className="address-container">
                    <span>שדרות בנימין 130, נתניה, ישראל</span>
                    <span>קומה 3, בניין B</span>

                    <a className="click-link">+972-02-333333</a>
                    <a className="click-link">+972-02-333333</a>
                    <a className="click-link">+972-02-333333</a>
                    <a className="click-link">law@gmail.com</a>
                    <span>08:00 - 20:00</span>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} name="firstName" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>שם פרטי</label>
                    </div>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} name="lastName" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>שם משפחה</label>
                    </div>
                    <div className="group">
                        <textarea onChange={(e) => handleChange(e)} name="message" type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>הודעה</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">שלח</button>
                        <button className="btn btn-cancel" type="button">איפוס</button>
                        <h5>מחכים לשמוע מכם...<span className="emoji">&#x1F609;</span></h5>
                    </div>
                </form>
            </div>
        </div>
    )
}
