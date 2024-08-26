import React from 'react';
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#sign-in">Sign In</a></li>
        </ul>
      </nav>
      <div className="mentor-logo-wrapper">
       <div className="mentor-text">
          <p>WE-MEN-TOR</p>
          <p>YOUR SUCCESS, OUR COMMITMENT</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
