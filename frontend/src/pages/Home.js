import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import '../App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// npm install react-slick slick-carousel

const Home = () => {
  const settings = {
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
    
      <Slider {...settings} className="full-page-slider">
        <div className="slide" style={{ backgroundColor: '#1abc9c' }}>
        <img src={img1}  className="slider-image" alt="..."/>
          {/* <h1>Slide 1</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#3498db' }}>
          <img src={img2} className="slider-image" alt="..." />
          {/* <h1>Slide 2</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#9b59b6' }}>
          <img src={img3} className="slider-image"  alt="..." />
          {/* <h1>Slide 3</h1> */}
        </div>
        <div className="slide" style={{ backgroundColor: '#e74c3c' }}>
           <img src={img3} className="slider-image"  alt="..." />
          {/* <h1>Slide 4</h1> */}
        </div>
      </Slider>


  )
}

// <div class='container' >
    //     <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
    //       <div class="carousel-indicators">
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //       </div>
    //       <div class="carousel-inner" >
    //         <div class="carousel-item active" >
    //           <img src={img1} class="d-block w-70" style={{height: '83vh'}} alt="..." />
    //           <div class="carousel-caption d-none d-md-block">
    //             <h5>First slide label</h5>
    //             <p>Some representative placeholder content for the first slide.</p>
    //           </div>
    //         </div>
    //         <div class="carousel-item">
    //           <img src={img2} class="d-block w-100" style={{height: '83vh'}} alt="..." />
    //           <div class="carousel-caption d-none d-md-block">
    //             <h5>Second slide label</h5>
    //             <p>Some representative placeholder content for the second slide.</p>
    //           </div>
    //         </div>
    //         <div class="carousel-item">
    //           <img src={img3} class="d-block w-100" style={{height: '83vh'}} alt="..." />
    //           <div class="carousel-caption d-none d-md-block">
    //             <h5>Third slide label</h5>
    //             <p>Some representative placeholder content for the third slide.</p>
    //           </div>
    //         </div>
    //       </div>
    //       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Previous</span>
    //       </button>
    //       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Next</span>
    //       </button>
    //     </div>

                
    //     <div class="about-section" style={{ marginTop: '45px'}}>
    //         <h1>Please Login Here</h1>
    //         <p>Please Login Here for using the Management Sysyem</p>
    //         {/* <p>Resize the browser window to see that this page is responsive by the way.</p> */}
    //     </div>
   
    // </div>
      
export default Home