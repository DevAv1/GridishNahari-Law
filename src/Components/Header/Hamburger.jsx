import { useEffect, useState } from 'react';
export const Hamburger = ({ onClickCallback, scrolled, isShow }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (!isShow) {
            setIsChecked(false)
        }
    }, [isShow])

    return (
        <div className={`hamburger ${(scrolled || isShow) && 'dynamic-hamburger'}`}>
            <label htmlFor="check">
                <input type="checkbox" id="check" checked={isChecked} onChange={() => setIsChecked(!isChecked)} onClick={() => onClickCallback()}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}