import './style.scss';
import {useState} from "react";
import City from '../../assets/icons/city.png';
import Clock from '../../assets/icons/clock.png';

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        fullName: '',
        email: '',
        message: '',
    });
    const [formMessage, setFormMessage] = useState('');

    const validateEmail = (email) => {
        return email.match(
            // Regular expression for validating email
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email' && contactInfo.email.length > 0) setFormMessage('');
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(contactInfo.email)) {
            setFormMessage('כתובת מייל לא תקינה!');
        } else {
            setFormMessage('');
        }
        console.log(contactInfo);
    };
    return (

        <div className="contact" id="contact-section">
            <div className="section-header">יצירת קשר</div>
            <div className="contact-us-wrapper">
                <div className="address-container">
                    <div className="address">
                        <img src={City}/>
                        אלברט אינשטיין 14, ראש העין
                    </div>
                    <div className="lawyer-phone">
                        <span>ענבר גרידיש</span>
                        <a className="click-link" href="tel:+972524664540">+972 52-466-4540</a>
                    </div>
                    <div className="lawyer-phone">
                        <span>יפית נהרי</span>
                        <a className="click-link" href="tel:+972546825784">+972 54-682-5784</a>
                    </div>
                    <a className="click-link">gn-lawfirm@gmail.com</a>
                    <div className="activity-time">
                        <img src={Clock}/>
                        <span>08:00 - 20:00</span>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} name="fullName" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>שם מלא</label>
                    </div>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} type="text" name="email" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>אימייל</label>
                    </div>
                    <div className="group message-area">
                        <textarea onChange={(e) => handleChange(e)} name="message" type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>הודעה</label>
                    </div>
                    <span className="form-error-message">{formMessage}</span>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">שלח</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
