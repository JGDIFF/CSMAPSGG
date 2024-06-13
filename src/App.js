// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import HomePage component
import Mirage from './components/Mirage'; // Import Mirage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mirage" element={<Mirage />} /> {/* Define the new page route */}
      </Routes>
    </Router>
  );
}

export default App;
