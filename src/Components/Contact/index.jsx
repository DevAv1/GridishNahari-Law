import './style.scss';
import {useState} from "react";
import City from '../../assets/icons/city.png';
import Clock from '../../assets/icons/clock.png';

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
    };
    return (

        <div className="contact" id="contact-section">
            <div className="section-header">יצירת קשר</div>
            <div className="contact-us-wrapper">
                <div className="address-container">
                    <div className="address">
                        אלברט אינשטיין 14, ראש העין
                        <img src={City}/>
                    </div>
                    <div className="lawyer-phone">
                        <span>ענבר גרידיש</span>
                        <a className="click-link">+972 52-466-4540</a>
                    </div>
                    <div className="lawyer-phone">
                        <span>יפית נהרי</span>
                        <a className="click-link">+972 54-682-5784</a>
                    </div>
                    <a className="click-link">gn-lawfirm@gmail.com</a>
                    <span>08:00 - 20:00  <img src={Clock}/></span>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} name="firstName" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>שם מלא</label>
                    </div>
                    <div className="group">
                        <input onChange={(e) => handleChange(e)} name="lastName" type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
                        <label>אימייל</label>
                    </div>
                    <div className="group">
                        <textarea onChange={(e) => handleChange(e)} name="message" type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>הודעה</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">שלח</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
