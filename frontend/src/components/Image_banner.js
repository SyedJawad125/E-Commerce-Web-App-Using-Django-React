import React from 'react';
import imagebanner from '../images/Imagebanner.jpg'


const Image_banner = () => {
  return (
    <div className="image-banner">
      <img src={imagebanner} alt="Banner" className="banner-img" />
    </div>
  );
};

export default Image_banner;
