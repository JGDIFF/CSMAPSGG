// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import HomePage component
import NewPage from './NewPage'; // Import NewPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} /> {/* Define the new page route */}
      </Routes>
    </Router>
  );
}

export default App;
