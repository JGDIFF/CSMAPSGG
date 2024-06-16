import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={`${process.env.PUBLIC_URL}/media/github-mark.svg`} alt="GitHub" className="github-icon" />
          <span className="footer-text">CSMAPS.GG</span>
        </div>
        <div className="footer-right">
          &copy; {new Date().getFullYear()} CSMAPS.GG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
