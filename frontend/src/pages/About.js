import React from 'react'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import Product_vertical_slider from './Category_vertical_slider';
import Readmore from './Readmore';
import '../App.css'


const Services = () => {
  


  // const buttonStyles = {
  //   padding: '8px 16px',
  //   fontSize: '16px',
  //   borderRadius: '8px'
  // };
  return (
    <div class='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px',marginRight: '20px' }}>
                
      <div class="about-section">
          <h1>About Us</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <div class="container mt-5">
        <h1 class="text-center mb-4">Our Team</h1>
        <div class="row">

          <div class="col-md-3 mb-3">
              <div class="card h-100">
                <img src={img6} class="card-img-top" alt="Service 1" />
                <div class="card-body">
                  <h2>John Doe</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
          </div>
            
            <div class="col-md-3 mb-3">
              <div class="card h-100">
                <img src={img6} class="card-img-top" alt="Service 1" />
                <div class="card-body">
                  <h2>John Doe</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>
          
            <div class="col-md-3 mb-3">
              <div class="card h-100">
                <img src={img6} class="card-img-top" alt="Service 1" />
                <div class="card-body">
                  <h2>John Doe</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>

            <div class="col-md-3 mb-3">
              <div class="card h-100">
                <img src={img6} class="card-img-top" alt="Service 1" />
                <div class="card-body">
                  <h2>John Doe</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button class="button">Contact</button></p>
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