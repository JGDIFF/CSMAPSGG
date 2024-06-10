// Rectangles.js
import React from 'react';
import './Rectangles.css'; // Import CSS file for styling

function Rectangles() {
  const backgroundImageUrl = "/public/media/mirage.jpg"; // Path to the image

  return (
    <div className="rectangle-container">
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <div className="rectangle" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
    </div>
  );
}

export default Rectangles;

