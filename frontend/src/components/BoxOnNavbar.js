import React, { useState } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';

const NavbarWithHover = () => {
  const [showSmallScreen, setShowSmallScreen] = useState(false);

  const handleMouseEnter = () => {
    setShowSmallScreen(true);
  };

  const handleMouseLeave = () => {
    setShowSmallScreen(false);
  };

  console.log('Image 1 path:', img1);
  console.log('Image 2 path:', img2);

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        Navbar Button
      </button>
      
      {showSmallScreen && (
        <div 
          style={{
            position: 'absolute', 
            top: '100%', 
            left: '0', 
            backgroundColor: 'white', 
            border: '1px solid #ccc', 
            padding: '10px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1
          }}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={img1} alt="Product 1" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <span>Product Name 1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <img src={img2} alt="Product 2" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <span>Product Name 2</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarWithHover;

