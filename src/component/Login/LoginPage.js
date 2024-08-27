import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoTUT from '../../Assets/TUT_Logo_Transparent.png'; // Adjust paths accordingly
import background from '../../Assets/Login Background.jpeg'; // Adjust paths accordingly
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <img src={background} alt="Background" className="background" />
      <header className="header">
        <img src={logoTUT} alt="TUT Logo" className="tut-logo" />
       
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li> {/* Update this line */}
            <li><Link to="/about">About</Link></li> {/* Update this line if needed */}
          </ul>
        </nav>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>WE-MEN-TOR</h2>
          <h3>LOGIN</h3>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="foward@wemen.tor" />
            <label>Password:</label>
            <input type="password" placeholder="* * * * * *" />
            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            <button type="submit">Sign In</button>
          </form>
          <p>Don't have an account yet? <a href="#sign-up">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
