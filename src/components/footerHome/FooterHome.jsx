import React from 'react';
import HomeImages from '../../utils/images/imagesHome';
import './footerHome.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src={HomeImages.logo} alt="Logo" className="logo"/>
        <p className="description">
          These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
        </p>
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-section quick-links">
        <h4>Quic Links</h4>
        <ul>
          <li><a href="#">Prevention</a></li>
          <li><a href="#">Quarantine</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="footer-section about">
        <h4>About</h4>
        <ul>
          <li><a href="#">Hand Wash</a></li>
          <li><a href="#">Social Distance</a></li>
          <li><a href="#">Isolate</a></li>
          <li><a href="#">Difference</a></li>
        </ul>
      </div>
      <div className="footer-section about">
        <h4>About</h4>
        <ul>
          <li><a href="#">Hand Wash</a></li>
          <li><a href="#">Social Distance</a></li>
          <li><a href="#">Isolate</a></li>
          <li><a href="#">Difference</a></li>
        </ul>
      </div>
      <div className="footer-section help">
        <h4>Help</h4>
        <ul>
          <li><a href="#">Hand Wash</a></li>
          <li><a href="#">Social Distance</a></li>
          <li><a href="#">Isolate</a></li>
          <li><a href="#">Difference</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright 2020. All Rights Reserved</p>
        <p>Design by <a href="#">DexignZone</a></p>
      </div>
    </footer>
  );
};

export default Footer;

