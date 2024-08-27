import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logoTUT from '../../Assets/TUT_Logo_Transparent.png'; // Adjust paths accordingly
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
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Sign In</Link></li>
        </ul>
      </nav>
      <div className="mentor-logo-wrapper">
       
      </div>
    </div>
  );
};

export default LandingPage;
