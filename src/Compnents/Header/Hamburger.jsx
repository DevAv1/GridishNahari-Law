export const Hamburger = ({ onClickCallback, scrolled }) => {
    return (
        <div className={`hamburger ${scrolled && 'dynamic-hamburger'}`}>
            <label htmlFor="check">
                <input type="checkbox" id="check" onClick={() => onClickCallback()}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}