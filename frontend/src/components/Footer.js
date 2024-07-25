// src/components/Footer.js
import React from 'react';
import logo from '../images/logo5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube    } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section-logo">
                    <a href="/">
                       <img src={logo} alt="Logo" className="footer-logo" />
                    </a>
                </div>
                <div className="footer-section">
                    <h2 >SUPPORT</h2>
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
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />DHA 2, Islamabad Pakistan.</li>
                        <li><FontAwesomeIcon icon={faPhone} style={styles.icon} />(+92) 333 1906382</li>
                        <li><FontAwesomeIcon icon={faPhone} style={styles.icon} />(+92) 51 0000000</li>
                        <li><FontAwesomeIcon icon={faEnvelope} style={styles.icon} />nicenick1992@gmail.com</li>
                    </ul>
                    <div style={styles.iconContainer}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaInstagram />
                        </a>
                        <a href="https://wa.me/923331906382" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaWhatsapp />
                        </a>
                        <a href="https://www.linkedin.com/in/syed-jawad-ali-080286b9/" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaLinkedinIn />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={styles.iconStyle}>
                        <FaYoutube />
                        </a>
                    </div>
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
const styles = {
   
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },

    iconStyle : {
        color: '#fff',
        fontSize: '28px',
        textDecoration: 'none',
      },
      
    icon: {
      marginRight: '10px',
      fontSize: '18px',

    },
  };
export default Footer;
