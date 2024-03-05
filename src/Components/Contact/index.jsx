import './style.scss';
import {useState, useRef} from "react";
import City from '../../assets/icons/city.png';
import Clock from '../../assets/icons/clock.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        from_name: '',
        from_phone: '',
        from_mail: '',
        message: '',
    });
    const [formMessage, setFormMessage] = useState({
        type: '',
        message: ''
    });
    const form = useRef();

    const validateEmail = (email) => {
        return email.match(
            // Regular expression for validating email
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email' && contactInfo.from_mail.length > 0) setFormMessage({});
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const TEMPLATE_KEY = import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY;
        const SERVICE_KEY = import.meta.env.VITE_EMAIL_JS_SERVICE_KEY;
        const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

        if (!validateEmail(contactInfo.from_mail)) {
            setFormMessage({
                type: 'error',
                message: 'כתובת מייל לא תקינה!'
            });
        } else {
            setFormMessage({});
            emailjs
        .sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, {
            publicKey: PUBLIC_KEY,
        })
        .then(() => {
                console.log('SUCCESS!');
                setContactInfo({
                    from_name: '',
                    from_phone: '',
                    from_mail: '',
                    message: '' 
                });
                setFormMessage({
                    type: 'success',
                    message: 'הודעה נשלחה בהצלחה, נחזור אליכם בהקדם!'
                })
                setTimeout(() => {
                    setFormMessage({ type: '', message: '' });
                }, 5000)
            }, (error) => {
                    console.log('FAILED...', error.text);
                    setFormMessage({
                        type: 'error',
                        message: 'התרחשה בעיה, נסה שנית מאוחר יותר.'
                    })
              
                }
        );
        }
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
                    <a className="click-link">office@gn-lawfirm.co.il</a>
                    <div className="activity-time">
                        <img src={Clock}/>
                        <span>08:00 - 20:00</span>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit} ref={form} >
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} value={contactInfo.from_name} name="from_name" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>שם מלא</label>
                    </div>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} value={contactInfo.from_phone} name="from_phone" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>מס' טלפון</label>
                    </div>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} value={contactInfo.from_mail} type="text" name="from_mail" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>אימייל</label>
                    </div>
                    <div className="group message-area">
                        <textarea onChange={(e) => handleChange(e)} value={contactInfo.message} name="message" type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>הודעה</label>
                    </div>
                    <span className={`form-error-message ${contactInfo.type === 'error' ? 'error' : 'success'}`}>{formMessage.message}</span>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">שלח</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
