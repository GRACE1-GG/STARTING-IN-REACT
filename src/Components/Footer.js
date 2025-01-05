import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">RISE KENYAN YOUTH</a>
          <p>Empowering the youth for a better future.</p>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
        </div>
        <div className="footer-contact">
          <p>Contact us: <a href="mailto:info@risekenyanyouth.com">info@risekenyanyouth.com</a> | +254 123 456 789</p>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com/risekenyanyouth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/risekenyanyouth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/risekenyanyouth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-newsletter">
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RISE KENYAN YOUTH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
