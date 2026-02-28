"use client";

import "./Footer.css";
import logo from "../../favicon.ico";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo.src} alt="Active Paints Logo" className="footer-logo-img" />
              <div className="footer-company-name">
                <div className="footer-name-top">Active</div>
                <div className="footer-name-bottom">Paints</div>
              </div>
            </div>
            <p className="footer-description">
              Premium quality paints for residential and commercial use. 
              Trusted by professionals worldwide.
            </p>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook" className="social-link">
                  <span>f</span>
                </a>
                <a href="#instagram" aria-label="Instagram" className="social-link">
                  <span>📷</span>
                </a>
                <a href="#twitter" aria-label="Twitter" className="social-link">
                  <span>𝕏</span>
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="social-link">
                  <span>in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Paint Collections</a></li>
              <li><a href="#colours">Colour Palette</a></li>
              <li><a href="#interior">Interior Paints</a></li>
              <li><a href="#exterior">Exterior Paints</a></li>
              <li><a href="#specialty">Specialty Coatings</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#inspiration">Inspiration</a></li>
              <li><a href="#tools">Paint Tools</a></li>
              <li><a href="#blog">Blog & Tips</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support & Info</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#returns">Returns & Warranty</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="footer-contact">
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@activepaints.com">info@activepaints.com</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
              <p>
                <strong>Address:</strong><br />
                123 Paint Street<br />
                Color City, CC 12345
              </p>
            </div>
            <div className="footer-newsletter">
              <h5>Subscribe to our Newsletter</h5>
              <form onSubmit={(e) => { e.preventDefault(); }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Active Paints. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <ul className="footer-bottom-links">
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
