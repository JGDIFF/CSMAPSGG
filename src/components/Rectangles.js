// Rectangles.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Rectangles.css'; // Import CSS file for styling

function Rectangles() {
  const backgroundImageUrl = "/media/mirage.jpg"; // Path to the image

  return (
    <div className="rectangle-container">
      <Link to="/mirage" className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></Link>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="rectangle" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
    </div>
  );
}

export default Rectangles;
