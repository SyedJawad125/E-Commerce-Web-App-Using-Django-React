import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import Product_vertical_slider from './Category_vertical_slider';
import Readmore from './Readmore';
import '../App.css'


const Services = () => {
  const text1 = `Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options 
                to suit your needs.`;
  const text2 = `Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options 
  to suit your needs.`;
  const text3 = `Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options 
                to suit your needs.`;
  const text4 = `Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options 
  to suit your needs.`;


  // const buttonStyles = {
  //   padding: '8px 16px',
  //   fontSize: '16px',
  //   borderRadius: '8px'
  // };
  return (
    <div class='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px',marginRight: '20px' }}>
                
      <div class="about-section">
          <h1>Our Services</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <div class="container mt-5">
        <h1 class="text-center mb-4">Our Services</h1>
        <div class="row">
          
          <div class="col-md-3 mb-3">
            <div class="card h-100">
              <img src={img1} class="card-img-top" alt="Service 1" />
              <div class="card-body">
                <h5 class="card-title">E-Commerce</h5>
                {/* <p class="card-text">Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options to suit your needs.</p> */}
                {/* <button class="btn"></button> */}
                <Readmore  text={text1} maxLength={100}  />
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-3">
            <div class="card h-100">
              <img src={img2} class="card-img-top" alt="Service 2" />
              <div class="card-body">
                <h5 class="card-title">Categories</h5>
                {/* <p class="card-text">Our expert technicians provide top-notch maintenance services to keep your vehicle running smoothly.</p> */}
                {/* <button class="btn">Read More</button> */}
                <Readmore  text={text2} maxLength={100} />
              </div>
            </div>
          </div>
        
          <div class="col-md-3 mb-3">
            <div class="card h-100">
              <img src={img1} class="card-img-top" alt="Service 3" /> 
              <div class="card-body">
                <h5 class="card-title">Products</h5>
                {/* <p class="card-text">We offer 24/7 customer support to assist you with any inquiries and ensure a seamless experience.</p> */}
                {/* <button class="btn">Read More</button> */}
                <Readmore  text={text3} maxLength={100} />
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card h-100">
              <img src={img2} class="card-img-top" alt="Service 3" /> 
              <div class="card-body">
                <h5 class="card-title">Explore New Arrival</h5>
                {/* <p class="card-text">We offer 24/7 customer support to assist you with any inquiries and ensure a seamless experience.</p> */}
                {/* <button class="btn">Read More</button> */}
                <Readmore  text={text4} maxLength={100} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
   <Product_vertical_slider/>
   </div>
  )
}

export default Services

