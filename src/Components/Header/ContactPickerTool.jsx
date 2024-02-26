export const ContactPickerTool = ({ show, isDynamic, isPhone, onClose }) => {
    return (
        <div className={`contact-picker-tool ${show && 'tool-show'} ${isDynamic && 'dynamic'}`}>
            <div className="lawyer-phone">
                <span>ענבר גרידיש</span>
                <a onClick={() => onClose()} className="click-link" href={`${isPhone ? 'tel:': 'https://wa.me/'}+972524664540`} target={`${!isPhone && "_blank"}`}>+972 52-466-4540</a>
            </div>
            <div className="lawyer-phone">
                <span>יפית נהרי</span>
                <a onClick={() => onClose()} className="click-link" href={`${isPhone ? 'tel:': 'https://wa.me/'}+972546825784`} target={`${!isPhone && "_blank"}`}>+972 54-682-5784</a>
            </div>
        </div>
    )
}