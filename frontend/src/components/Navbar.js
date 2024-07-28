import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleClick = () => {
    navigate('/addtocartpage');
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>
      </div>
      <div className="navbar-links">
        <Link
          to="/"
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={activeLink === '/about' ? 'active' : ''}
          onClick={() => handleLinkClick('/about')}
        >
          About
        </Link>
        <Link
          to="/services"
          className={activeLink === '/services' ? 'active' : ''}
          onClick={() => handleLinkClick('/services')}
        >
          Services
        </Link>
        <Link
          to="/publiccategory"
          className={activeLink === '/publiccategory' ? 'active' : ''}
          onClick={() => handleLinkClick('/publiccategory')}
        >
          Categories
        </Link>
        <Link
          to="/allpublicproducts"
          className={activeLink === '/allpublicproducts' ? 'active' : ''}
          onClick={() => handleLinkClick('/allpublicproducts')}
        >
          Products
        </Link>
        <Link
          to="/category_slider"
          className={activeLink === '/category_slider' ? 'active' : ''}
          onClick={() => handleLinkClick('/category_slider')}
        >
          Category_slider
        </Link>
        <Link
          to="/product_vertical_slider"
          className={activeLink === '/product_vertical_slider' ? 'active' : ''}
          onClick={() => handleLinkClick('/product_vertical_slider')}
        >
          prod_vert_slider
        </Link>
        {/* <Link
          to="/check"
          className={activeLink === '/check' ? 'active' : ''}
          onClick={() => handleLinkClick('/check')}
        >
          Check
        </Link> */}
        <Link
          to="/contact"
          className={activeLink === '/contact' ? 'active' : ''}
          onClick={() => handleLinkClick('/contact')}
        >
          Contact
        </Link>
        <div className="navbar-cart">
        <button onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingCart}  size="2x"/></button>
        <span className="cart-count">3</span> {/* Example: showing number of items in the cart */}
      </div>
      </div>
    </nav>
  );
};

export default Navbar; 
