import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import Product_vertical_slider from './Category_vertical_slider';
import Readmore from './Readmore';
import './About_Services_CSS.css';



const Services = () => {
  const text1 = `E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the
   internet. It encompasses a wide range of online business activities, including:
    1. Online Retail: This is the most common form of e-commerce, where businesses sell products directly to consumers
    through online platforms. Examples include Amazon, eBay, and Shopify-based stores.
    2. Online Marketplaces: Platforms like eBay, Etsy, and Alibaba facilitate transactions between buyers and sellers.
    These marketplaces provide a space for multiple vendors to sell their products to a large audience.`;

  const text2 = `Categories in e-commerce play a crucial role in organizing products and enhancing the shopping 
  experience for customers. They help in:
   1. Simplified Navigation: Categories allow customers to easily navigate through an online store, quickly finding the 
   products they are looking for. This reduces the time and effort needed to locate items, leading to a more pleasant shopping experience.
   2. Improved Search Functionality: By categorizing products, the search functionality becomes more efficient and accurate. 
   Customers can filter search results based on categories, which helps them find specific products more quickly.`;

  const text3 = `products are the cornerstone of any online retail business. They represent the goods or services that 
  are being offered to customers through a digital platform. Here are some key points about products in the realm of
   e-commerce:
   1. Physical Products: Tangible items that require shipping, such as clothing, electronics, and household goods.
   2. Digital Products: Intangible goods like e-books, software, music, and online courses.`;

  const text4 = `Discovering the latest additions to your favorite online store is always an exciting experience. 
   Explore New Arrivals is all about diving into the freshest trends, the newest products, and the most innovative items
   that have just hit the shelves. Whether you’re looking for the latest fashion pieces, cutting-edge electronics, 
   or unique home decor, the new arrivals section is your gateway to staying ahead of the curve and keeping 
   your lifestyle up-to-date.`;


  // const buttonStyles = {
  //   padding: '8px 16px',
  //   fontSize: '16px',
  //   borderRadius: '8px'
  // };
  return (
    <div class='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px',marginRight: '20px' }}>
                
      <div class="about-service-section">
          <h1>Our Services</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <div class="container mt-5">
        <h1 class="text-center mb-4">Our Services</h1>
        <div class="row">
          
          <div class="col-md-3 mb-3">
            <div class="card-about-service h-100">
              <img src={img1} class="card-img-top-about-services"  alt="Service 1" />
              <div className="card-body-about-service" style={{ height: '170px' }}>
              
                <h5 class="card-title">E-Commerce</h5>
                {/* <p class="card-text">Explore our wide range of vehicles. From family cars to luxury sedans, we offer the best options to suit your needs.</p> */}
                {/* <button class="btn"></button> */}
                <Readmore  text={text1} maxLength={100}  />
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-3">
            <div class="card-about-service h-100">
              <img src={img2} class="card-img-top-about-services"  alt="Service 2" />
              <div class="card-body-about-service" style={{ height: '170px' }}>
                <h5 class="card-title">Categories</h5>
                {/* <p class="card-text">Our expert technicians provide top-notch maintenance services to keep your vehicle running smoothly.</p> */}
                {/* <button class="btn">Read More</button> */}
                <Readmore  text={text2} maxLength={100} />
              </div>
            </div>
          </div>
        
          <div class="col-md-3 mb-3">
            <div class="card-about-service h-100">
              <img src={img1} class="card-img-top-about-services"  alt="Service 3" /> 
              <div class="card-body-about-service" style={{ height: '170px' }}>
                <h5 class="card-title">Products</h5>
                {/* <p class="card-text">We offer 24/7 customer support to assist you with any inquiries and ensure a seamless experience.</p> */}
                {/* <button class="btn">Read More</button> */}
                <Readmore  text={text3} maxLength={100} />
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card-about-service h-100">
              <img src={img2} class="card-img-top-about-services" alt="Service 3" /> 
              <div class="card-body-about-service" style={{ height: '170px' }}>
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

