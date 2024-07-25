import React, { useState } from 'react';

function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <p>
        <button className="button" onClick={togglePopup}>Contact</button>
      </p>
      {isPopupOpen && <ContactPopup closePopup={togglePopup} />}
    </div>
  );
}

function ContactPopup({ closePopup }) {
  return (
    <div style={popupStyles}>
      <div style={popupContentStyles}>
        <h2>Contact Us</h2>
        <p>This is the contact form or contact information.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

const popupStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

export default Popup;
