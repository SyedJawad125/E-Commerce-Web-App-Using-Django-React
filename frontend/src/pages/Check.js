import React from 'react'
import Cloth_Image from '../images/Cloth_Image.jpg'


const Check = () => {
  return (
   

  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
        <img src={Cloth_Image} class="card-img-top" alt="Cloth_Image" />
          {/* <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image 1" /> */}
          <div class="card-body">
            <h5 class="card-title">Card title 1</h5>
            <h5 class="card-text">Name :Name</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary mt-3">Button 1</a>
            <a href="#" class="btn btn-secondary mt-3 ml-4" style={{ marginLeft: '10px' }}>Button 2</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
        <img src={Cloth_Image} class="card-img-top" alt="Cloth_Image" />
          <div class="card-body">
            <h5 class="card-title">Card title 2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary mt-3">Button 1</a>
            <a href="#" class="btn btn-secondary mt-3 ml-4" style={{ marginLeft: '10px' }}>Button 2</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
        <img src={Cloth_Image} class="card-img-top" alt="Cloth_Image" />
          <div class="card-body">
            <h5 class="card-title">Card title 3</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary mt-3">Button 1</a>
            <a href="#" class="btn btn-secondary mt-3 ml-4" style={{ marginLeft: '10px' }}>Button 2</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
        <img src={Cloth_Image} class="card-img-top" alt="Cloth_Image" />
          <div class="card-body">
            <h5 class="card-title">Card title 4</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary mt-3">Button 1</a>
            <a href="#" class="btn btn-secondary mt-3 ml-4" style={{ marginLeft: '10px' }}>Button 2</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  )
}

export default Check