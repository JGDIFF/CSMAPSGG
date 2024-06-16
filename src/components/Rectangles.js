// Rectangles.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Rectangles.css'; // Import CSS file for styling

function Rectangles() {
  const backgroundImageUrl1 = "/media/mirage.jpg"; // Path to the image
  const backgroundImageUrl2 = "/media/Inferno.jpeg"; // Path to the image
  const backgroundImageUrl3 = "/media/dust.png"; // Path to the image
  const backgroundImageUrl4 = "/media/nuke.jpg"; // Path to the image
  const backgroundImageUrl5 = "/media/vertigo.png"; // Path to the image
  const backgroundImageUrl6 = "/media/ancient.jpg"; // Path to the image
  const backgroundImageUrl7 = "/media/anubis.jpg"; // Path to the image
  const logoUrl1 = "/media/logos/mirage-logo.png"; // Path to the logo image

  return (
    <div className="rectangle-container">
      <Link to="/mirage" className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl1})` }}></Link>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl2})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl3})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl4})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl5})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl6})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl7})` }}></div>
    </div>
  );
}

export default Rectangles;
