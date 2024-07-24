import React from 'react'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import banner5 from '../images/banner5.jpg'
import '../App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// npm install react-slick slick-carousel             For Banner Intall packages

const Banner_slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
      };
  return (
    <div>
      <Slider {...settings} className="full-page-slider">
        <div className="slide" >
        <img src={banner1}  className="slider-image" alt="..."/>
          {/* <h1>Slide 1</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#3498db' }}>
          <img src={banner2} className="slider-image" alt="..." />
          {/* <h1>Slide 2</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#9b59b6' }}>
          <img src={banner3} className="slider-image"  alt="..." />
          {/* <h1>Slide 3</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#e74c3c' }}>
           <img src={banner4} className="slider-image"  alt="..." />
          {/* <h1>Slide 4</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#e74c3c' }}>
           <img src={banner5} className="slider-image"  alt="..." />
          {/* <h1>Slide 5</h1> */}
        </div>
      </Slider>
    </div>
  )
}

export default Banner_slider