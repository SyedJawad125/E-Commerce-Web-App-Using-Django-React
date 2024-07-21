// src/components/Footer.js
import React from 'react';
import logo from '../images/logo5.jpg'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section-logo">
                    <a href="/">
                       <img src={logo} alt="Logo" className="navbar-logo" />
                    </a>
                </div>
                <div className="footer-section">
                    <h2>SUPPORT</h2>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/returns">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Our Services</h2>
                    <ul>
                        <li><a href="/publicproduct">Products</a></li>
                        <li><a href="/publiccategory">Categories</a></li>
                        <li><a href="/publiccategory">Categories</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contct Us</h2>
                    <ul>
                        <li><a href="/faq">DHA 2, Islamabad Pakistan.</a></li>
                        <li><a href="/contact">(+92) 333 1906382</a></li>
                        <li><a href="/returns">nicenick1992@gmail.com</a></li>
                    </ul>
                </div>
                {/* <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div> */}
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
