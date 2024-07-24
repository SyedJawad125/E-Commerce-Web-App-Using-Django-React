import logo from './logo.svg';
import './App.css';
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
import {Routes, Route, useLocation } from 'react-router-dom'
// import ProtectedRoute from './context/ProtectedRoute'
import Publicproduct from './pages/Publicproduct';
import Publiccategory from './pages/Publiccategory';
import Check from './pages/Check';
import Adminpage from './pages/Adminpage';
import Footer from './components/Footer';
import Category_slider from './pages/Category_slider';
import Category_vertical_slider from './pages/Category_vertical_slider';
import Banner_slider from './pages/Banner_slider';
// import Slider from 'react-slick';


function App() {

  const location = useLocation();
  const adminRoutes = ['/login', '/SignUp','/product','/Add/Addproduct','/Update/Updateproduct','/category',
    '/Add/Addcategory','/Update/Updatecategory', '/adminpage'];
  const publicRoutes = ['/','/about','/services','/publicproduct','/publiccategory','/check','/contact','/category_slider',
    '/category_vertical_slider','/login', '/SignUp'];

  return (
    <div>
    

      {/* {localStorage.getItem('token') ? <Navbar/> : <p></p>} */}
      {/* <Topbar />
      <Navbar/> */}
      {/* <div className="container">
        <h1>Welcome to My Website</h1>
        <p>This is a sample page with a top bar above the navbar.</p>
      </div> */}
      {/* {localStorage.getItem('token') ? <Admin_navbar/> : <p></p>} */}


      
      {!adminRoutes.includes(location.pathname) && <Topbar />}
      {!adminRoutes.includes(location.pathname) && <Navbar />}

      {!publicRoutes.includes(location.pathname) && <Admin_navbar />}


      <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/SignUp' element={<SignUp/>}  />
            <Route path='/' element={<Home/>}  />
            <Route path='/services' element={<Services/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/product' element={<Product/>}  />
            <Route path='/Add/Addproduct' element={<Addproduct/>}  />
            <Route path='/Update/Updateproduct' element={<Updateproduct/>}  />
            <Route path='/publicproduct' element={<Publicproduct/>}  />
            <Route path='/category' element={<Category/>}  />
            <Route path='/Add/Addcategory' element={<Addcategory/>}  />
            <Route path='/Update/Updatecategory' element={<Updatecategory/>}  />
            <Route path='/publiccategory' element={<Publiccategory/>}  />
            <Route path='/adminpage' element={<Adminpage/>}  />
            <Route path='/banner_slider' element={<Banner_slider/>}  />
            <Route path='/category_slider' element={<Category_slider/>}  />
            <Route path='/category_vertical_slider' element={<Category_vertical_slider/>}  />
            <Route path='/footer' element={<Footer/>}  />
            {/* <Route path='/slider' element={<Slider/>}  /> */}        
            <Route path='/check' element={<Check/>}  />
            <Route path='/contact' element={<Contact/>}  />
      </Routes>
      {!adminRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}
export default App;
