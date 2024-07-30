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
      <div style={{ width: '218.5vh', height: "100%"  }}>
        <Banner_slider />
      </div>
      <div style={{ width: "100%", height: "100%", display: "flex", marginTop: '25px' }}>
        <div style={{ width: "20%", height: "100%" }}>
          <Category_vertical_slider />
        </div>
        <div >
          <Category_slider />
        </div>
    </div>
    </div>
  )
}
      
export default Home

{/* <div style={{
width:"100%".
height:"100%".
}}>

<div style={{
width:"100%".
height:"100%".
}}>
navebar 1
</div>

<div style={{
width:"100%".
height:"100%".
}}>
navebar 2
</div>
//Body +side bar
<div style={{
width:"100%".
height:"100%".
display:"flex"
}}>
<div style={{
width:"25%".
height:"100%".
}}>
sidebar
</div >
<div  style={{
width:"75%".
height:"100%".

}}>
item display body
</div>

</div>

<div style={{
width:"100%".
height:"100%".
}}>
fotter
</div>

</div> */}