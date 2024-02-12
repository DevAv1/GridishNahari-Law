export const Hamburger = ({ onClickCallback, scrolled, isShow }) => {
    return (
        <div className={`hamburger ${(scrolled || isShow) && 'dynamic-hamburger'}`}>
            <label htmlFor="check">
                <input type="checkbox" id="check" onClick={() => onClickCallback()}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}