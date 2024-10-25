import React, {useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Admin_navbar from './components/Admin_navbar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Product from './pages/Product';
import Addproduct from './pages/Addproduct';
import Updateproduct from './pages/Updateproduct';
import Category from './pages/Category';
import Addcategory from './pages/Addcategory';
import Updatecategory from './pages/Updatecategory';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Publicproduct from './pages/Publicproduct';
import Publiccategory from './pages/Publiccategory';
import Check from './pages/Check';
import Adminpage from './pages/Adminpage';
import Footer from './components/Footer';
import Category_slider from './pages/Category_slider';
import Category_vertical_slider from './pages/Category_vertical_slider';
import Product_vertical_slider from './pages/Product_vertical_slider';
import Banner_slider from './pages/Banner_slider';
import Readmore from './pages/Readmore';
import Allpublicproducts from './pages/Allpublicproducts';
import Productdetailpage from './pages/Productdetailpage';
import AddToCartPage from './pages/AddToCartPage';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/Checkout';
import New_Arrival from './pages/New_Arrival';

import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

function App() {

  const [profile, setProfile] = useState(null)

  const location = useLocation();
  const adminRoutes = [
    '/login', '/SignUp', '/product', '/Add/Addproduct', '/Update/Updateproduct', '/category',
    '/Add/Addcategory', '/Update/Updatecategory', '/adminpage'
  ];
  const publicRoutes = [
    '/', '/about', '/services', '/publicproduct', '/publiccategory', '/check', '/contact',
    '/category_slider', '/category_vertical_slider', '/product_vertical_slider', '/readmore',
    '/allpublicproducts','/addtocartpage', '/login', '/SignUp', '/productdetailpage','/checkout',
    '/new_arrival'];

  return (
    <CartProvider>
      <div>
        {!adminRoutes.includes(location.pathname) && <Topbar />}
        {!adminRoutes.includes(location.pathname) && <Navbar />}
        {!publicRoutes.includes(location.pathname) && <Admin_navbar />}

        {/* <div class='left-body'> 
            {!adminRoutes.includes(location.pathname) && <CardSlider />}

        </div> */}

{!profile ?

<div>
    <LoginSocialGoogle
    client_id='879113945041-3720vpmfo0c3tkhme4nceiijbb8fspbm.apps.googleusercontent.com'
    redirect_uri='https://accounts.google.com/o/oauth2/v2/auth'
    onResolve={(response)=>{
      setProfile(response.data)
      console.log(response)
    }}
    onReject={(error)=>{
      console.log(error)
    }}
    >
    <GoogleLoginButton/>
    </LoginSocialGoogle>  
</div>: ""}

{profile ? 
    <div> 
      <h1>{profile.name}</h1>
      <img src={profile.picture} alt={profile.name}/>
    </div>  : "" }


        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/Add/Addproduct' element={<Addproduct />} />
          <Route path='/Update/Updateproduct' element={<Updateproduct />} />
          <Route path='/publicproduct' element={<Publicproduct />} />
          <Route path='/allpublicproducts' element={<Allpublicproducts />} />
          <Route path='/productdetailpage' element={<Productdetailpage />} />
          <Route path='/category' element={<Category />} />
          <Route path='/Add/Addcategory' element={<Addcategory />} />
          <Route path='/Update/Updatecategory' element={<Updatecategory />} />
          <Route path='/publiccategory' element={<Publiccategory />} />
          <Route path='/adminpage' element={<Adminpage />} />
          <Route path='/banner_slider' element={<Banner_slider />} />
          <Route path='/category_slider' element={<Category_slider />} />
          <Route path='/category_vertical_slider' element={<Category_vertical_slider />} />
          <Route path='/product_vertical_slider' element={<Product_vertical_slider />} />
          <Route path='/readmore' element={<Readmore />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/addtocartpage' element={<AddToCartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/new_arrival' element={<New_Arrival />} />
          <Route path='/check' element={<Check />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {!adminRoutes.includes(location.pathname) && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;








// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Admin_navbar from './components/Admin_navbar';
// import Topbar from './components/Topbar';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import About from './pages/About';
// import Product from './pages/Product';
// import Addproduct from './pages/Addproduct';
// import Updateproduct from './pages/Updateproduct';
// import Category from './pages/Category';
// import Addcategory from './pages/Addcategory';
// import Updatecategory from './pages/Updatecategory';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import Contact from './pages/Contact';
// import {Routes, Route, useLocation } from 'react-router-dom'
// // import ProtectedRoute from './context/ProtectedRoute'
// import Publicproduct from './pages/Publicproduct';
// import Publiccategory from './pages/Publiccategory';
// import Check from './pages/Check';
// import Adminpage from './pages/Adminpage';
// import Footer from './components/Footer';
// import Category_slider from './pages/Category_slider';
// import Category_vertical_slider from './pages/Category_vertical_slider';
// import Product_vertical_slider from './pages/Product_vertical_slider';
// import Banner_slider from './pages/Banner_slider';
// import Readmore from './pages/Readmore';
// import Allpublicproducts from './pages/Allpublicproducts';
// import Productdetailpage from './pages/Productdetailpage';
// import AddToCartPage from './pages/AddToCartPage';
// // import Slider from 'react-slick';


// function App() {

//   const location = useLocation();
//   const adminRoutes = ['/login', '/SignUp','/product','/Add/Addproduct','/Update/Updateproduct','/category',
//     '/Add/Addcategory','/Update/Updatecategory', '/adminpage'];
//   const publicRoutes = ['/','/about','/services','/publicproduct','/publiccategory','/check','/contact','/category_slider',
//     '/category_vertical_slider','/product_vertical_slider','/readmore','/allpublicproducts','/login', 
//     '/SignUp', '/productdetailpage'];

//   return (
//     <div>
    
//       {/* {localStorage.getItem('token') ? <Navbar/> : <p></p>} */}
//       {/* <Topbar />
//       <Navbar/> */}
//       {/* <div className="container">
//         <h1>Welcome to My Website</h1>
//         <p>This is a sample page with a top bar above the navbar.</p>
//       </div> */}
//       {/* {localStorage.getItem('token') ? <Admin_navbar/> : <p></p>} */}


      
//       {!adminRoutes.includes(location.pathname) && <Topbar />}
//       {!adminRoutes.includes(location.pathname) && <Navbar />}

//       {!publicRoutes.includes(location.pathname) && <Admin_navbar />}


//       <Routes>
//             <Route path='/login' element={<Login/>} />
//             <Route path='/SignUp' element={<SignUp/>}  />
//             <Route path='/' element={<Home/>}  />
//             <Route path='/services' element={<Services/>}  />
//             <Route path='/about' element={<About/>}  />
//             <Route path='/product' element={<Product/>}  />
//             <Route path='/Add/Addproduct' element={<Addproduct/>}  />
//             <Route path='/Update/Updateproduct' element={<Updateproduct/>}  />
//             <Route path='/publicproduct' element={<Publicproduct/>}  />
//             <Route path='/allpublicproducts' element={<Allpublicproducts/>}  />
//             <Route path='/productdetailpage' element={<Productdetailpage/>}  />
//             <Route path='/category' element={<Category/>}  />
//             <Route path='/Add/Addcategory' element={<Addcategory/>}  />
//             <Route path='/Update/Updatecategory' element={<Updatecategory/>}  />
//             <Route path='/publiccategory' element={<Publiccategory/>}  />
//             <Route path='/adminpage' element={<Adminpage/>}  />
//             <Route path='/banner_slider' element={<Banner_slider/>}  />
//             <Route path='/category_slider' element={<Category_slider/>}  />
//             <Route path='/category_vertical_slider' element={<Category_vertical_slider/>}  />
//             <Route path='/product_vertical_slider' element={<Product_vertical_slider/>}  />
//             <Route path='/readmore' element={<Readmore/>}  />

//             <Route path='/footer' element={<Footer/>}  />
//             {/* <Route path='/slider' element={<Slider/>}  /> */} 
//             <Route path='/addtocartpage' element={<AddToCartPage/>}  />
//             <Route path='/check' element={<Check/>}  />
//             <Route path='/contact' element={<Contact/>}  />
//       </Routes>
//       {!adminRoutes.includes(location.pathname) && <Footer />}
//     </div>
//   );
// }
// export default App;
