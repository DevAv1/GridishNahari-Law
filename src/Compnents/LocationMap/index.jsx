import './style.scss';

export const LocationMap = () => {
    return (
        <div className="location-map" id="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.0189857900414!2d34.84944655968477!3d32.28446750910297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d408eb388a42b%3A0xe9edea6e429ac8ff!2z15fXkdem15zXqiDXlNeX15XXoyAxMCwg16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1707482159932!5m2!1siw!2sil" style={{ border: '0' }} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}