import React from 'react';
import { ReactComponent as GitHubIcon } from '/public/media/github-mark.svg'; // Assuming you have an SVG file for GitHub icon
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <GitHubIcon className="github-icon" />
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
