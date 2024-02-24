// Modal.js
import { useEffect, useState } from 'react';
import './style.scss'; // Importing CSS for styling

export const GNModal = ({ isOpen, onClose, children }) => {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [animationClass, setAnimationClass] = useState('');
  
    // Effect for opening and closing animations
    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
        setAnimationClass('modal-open');
      } else if (!isOpen && shouldRender) {
        setAnimationClass('modal-close');
        setTimeout(() => setShouldRender(false), 300); // Same duration as the closing animation
      }
    }, [isOpen, shouldRender]);
  
    // Prevent scrolling when the modal is open
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);
  
    if (!shouldRender) return null;
  
    return (
      <div className={`modal-overlay ${animationClass}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>×</button>
          {children}
        </div>
      </div>
    );
};
