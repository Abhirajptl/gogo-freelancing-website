import React from 'react';
import '../styles/Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaApple,
  FaAndroid,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>For Clients</h4>
          <ul>
            <li><a href="#">How to hire</a></li>
            <li><a href="#">Talent Marketplace</a></li>
            <li><a href="#">Project Catalog</a></li>
            <li><a href="#">Hire an agency</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Business Plus</a></li>
            <li><a href="#">Any Hire</a></li>
            <li><a href="#">Contract-to-hire</a></li>
            <li><a href="#">Direct Contracts</a></li>
            <li><a href="#">Hire worldwide</a></li>
            <li><a href="#">Hire in the USA</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>For Talent</h4>
          <ul>
            <li><a href="#">How to find work</a></li>
            <li><a href="#">Direct Contracts</a></li>
            <li><a href="#">Find freelance jobs worldwide</a></li>
            <li><a href="#">Find freelance jobs in the USA</a></li>
            <li><a href="#">Win work with ads</a></li>
            <li><a href="#">Freelancer Plus</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help & support</a></li>
            <li><a href="#">Success stories</a></li>
            <li><a href="#">Upwork reviews</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Affiliate programme</a></li>
            <li><a href="#">Free Business Tools</a></li>
            <li><a href="#">Release notes</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Investor relations</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Our impact</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Trust & Security</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <span>Follow us</span>
          <FaFacebook className="footer-icon" />
          <FaLinkedin className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <FaYoutube className="footer-icon" />
          <FaInstagram className="footer-icon" />
        </div>
        <div className="footer-mobile">
          <span>Mobile app</span>
          <FaApple className="footer-icon" />
          <FaAndroid className="footer-icon" />
        </div>
      </div>

      <div className="footer-legal">
        <span>© 2015 - 2025 Upwork® Global Inc.</span>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">CA Notice</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Accessibility</a>
      </div>
    </footer>
  );
};

export default Footer;
