import {React, useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthCon } from '../context/AuthContext'
import '../App.css'

const Admin_navbar = () => {
    const {logout} = useContext(AuthCon)
  return (
    <div class="sidenav">
        <Link to="/adminpage">Adminpage</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/services">Services</Link> */}
        <Link to="/product">AdminProducts</Link>
        <Link to="/category">AdminCategories</Link>
        {/* <Link to="/contact">Contact</Link> */}
        {
            localStorage.getItem('token') ? <Link onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>
        }

      <div class="main">
          <h2>Admin Page</h2>
          <p>This page is only used for Admin of the Site.</p>
      </div>
  </div>
  )
}

export default Admin_navbar