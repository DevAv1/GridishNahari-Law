import { useState, useRef } from 'react';
import './style.scss';
import FContactF from '../../assets/icons/f-contact-information.png';
import FContact from '../../assets/icons/f-contact-us.png';
import Phone from '../../assets/icons/telephone.png';
import FContactForm from '../../assets/icons/f-contact-form-f.png';
import { GNModal } from '../GNModal';
import emailjs from '@emailjs/browser';

export const FastContact = () => {
    const [showModal, setShowModal] = useState(false);
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

     
         
        emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, { publicKey: PUBLIC_KEY})
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
    };

    return (
        <div className="fast-contact">
            <div className="fast-contact-button" onClick={() => setShowModal(true)}>
                <img src={FContactF}/>
            </div>
            <GNModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}

            >
                <h1>השאר פרטים ונחזור אליך בהקדם...</h1>
                <div className="fast-contact-screen">
                    <form className="contact-form" onSubmit={handleSubmit} ref={form} >
                        <div className="group">
                            <input onChange={(e) => handleChange(e)} value={contactInfo.from_name} name="from_name" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                            <label>שם מלא</label>
                        </div>
                        <div className="group">
                            <input onChange={(e) => handleChange(e)} value={contactInfo.from_phone} name="from_phone" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                            <label>מס' טלפון</label>
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
            </GNModal>
        </div>
    )
}