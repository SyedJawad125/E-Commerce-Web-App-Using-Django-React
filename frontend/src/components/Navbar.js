import {React, useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthCon } from '../context/AuthContext'
import '../App.css'

const Navbar = () => {
  const {logout} = useContext(AuthCon)
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">
      <Link to="/">BrandName</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/category">Categories</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
        {
                localStorage.getItem('token') ? <Link onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>
            }
        {/* <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#action/3.1">Action</a>
            <a href="#action/3.2">Another action</a>
            <a href="#action/3.3">Something</a>
            <div className="dropdown-divider"></div>
            <a href="#action/3.4">Separated link</a>
          </div>
        </div> */}
      </div>
    </nav>
  //   <div class="sidenav">
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/services">Services</Link>
  //       <Link to="/category">Categories</Link>
  //       <Link to="/product">Products</Link>
  //       <Link to="/contact">Contact</Link>
  //       {
  //           localStorage.getItem('token') ? <Link onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>
  //       }

  //     <div class="main">
  //         {/* <h2>Side Navbar Example</h2>
  //         <p>This is an example of a side navigation bar.</p> */}
  //     </div>
  // </div>
  )
}

export default Navbar