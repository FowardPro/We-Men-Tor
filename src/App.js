// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/Landing/LandingPage.js';
import LoginPage from './component/Login/LoginPage.js';
import AboutPage from './component/about/AboutPage.js'; // Import AboutPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutPage" element={<AboutPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
