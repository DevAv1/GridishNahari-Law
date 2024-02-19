import './style.scss';

export const LocationMap = () => {
    return (
        <div className="location-map" id="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.358428041187!2d34.96985205969123!3d32.08659721905714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d311e27f8092f%3A0xc71238c99b7053ba!2z4oCr15DXnNeR16jXmCDXkNeZ15nXoNep15jXmdeZ158gMTQsINeo15DXqSDXlNei15nXnw!5e0!3m2!1siw!2sil!4v1707753895043!5m2!1siw!2sil" style={{ border: '0' }} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}