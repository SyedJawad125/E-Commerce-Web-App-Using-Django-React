import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
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
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './context/ProtectedRoute'
import Check from './pages/Check';


function App() {
  return (
    <div>
      {localStorage.getItem('token') ? <Navbar/> : <p></p>}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>}  />
        <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home/>}  />
            <Route path='/services' element={<Services/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/product' element={<Product/>}  />
            <Route path='/Add/Addproduct' element={<Addproduct/>}  />
            <Route path='/Update/Updateproduct' element={<Updateproduct/>}  />
            <Route path='/category' element={<Category/>}  />
            <Route path='/Add/Addcategory' element={<Addcategory/>}  />
            <Route path='/Update/Updatecategory' element={<Updatecategory/>}  />
            <Route path='/check' element={<Check/>}  />

            


            
            <Route path='/contact' element={<Contact/>}  />

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
