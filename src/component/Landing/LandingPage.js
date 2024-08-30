// src/component/Landing/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoTUT from '../../Assets/TUT_Logo_Transparent.png';
import background from '../../Assets/Background.jpg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={background} alt="Background" className="background" />
      <img src={logoTUT} alt="TUT Logo" className="tut-logo" />
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutPage">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li className='loginButton'><Link to="/login">Sign In</Link></li>
        </ul>
      </nav>
      <div className="mentor-logo-wrapper">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default LandingPage;
