// src/components/Footer.js
import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h2>Give Logo Here</h2>
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
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/returns">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Our Services</h2>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/returns">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contct Us</h2>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/returns">Returns</a></li>
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
