// HomePage.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Rectangles from './Rectangles'; // Import Rectangles component

function HomePage() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Rectangles /> {/* Include the Rectangles component */}
    </div>
  );
}

export default HomePage;
