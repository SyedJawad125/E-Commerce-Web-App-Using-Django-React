import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner_slider from './Banner_slider'
import Category_slider from './Category_slider';
import Category_vertical_slider from './Category_vertical_slider';
// import Footer from './components/Footer';
import '../App.css'

// npm install react-slick slick-carousel

const Home = () => {

  return (
    <div>
        <Banner_slider/>
      <div style={{ marginTop: '65px', marginBottom: '100px'}}>
        <Category_slider />
      </div>
        <Category_vertical_slider/>
    </div>

      
    // <div className="main-layout">
    //     <Banner_slider />
    //     <div className="content-with-sidebar">
    //         <Category_vertical_slider />
    //         <div className="main-content">
    //             {/* Your main content goes here */}
    //         </div>
    //     </div>
    //     <Footer />
    // </div>
  )
}
      
export default Home