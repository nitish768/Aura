import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h3 className="footer-logo">AURA BEAUTY</h3>
            <p className="footer-description">
              Curating luxury organic cosmetics designed to elevate your everyday ritual. Reveal your inner glow with sustainably sourced, premium ingredients.
            </p>
            <a href="/" aria-label="Instagram">...</a>
            <a href="/" aria-label="Facebook">...</a>
            <a href="/" aria-label="Twitter">...</a>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Best Sellers</Link></li>
              <li><Link to="/">Skincare</Link></li>
              <li><Link to="/">Makeup</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Brand</h4>
            <ul className="footer-links">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Sustainability</Link></li>
            </ul>
          </div>

          <<div className="footer-bottom">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Aura Beauty Inc. All rights reserved.
            </p>

         <div className="footer-bottom-links">
           <Link to="/privacy">Privacy Policy</Link>
           <Link to="/terms">Terms of Service</Link>
        </div>
        </div>
      </div>
    </footer>
  )
}
