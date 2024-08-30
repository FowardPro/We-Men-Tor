import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoTUT from '../../Assets/TUT_Logo_Transparent.png';
import background from '../../Assets/Login Background.jpeg'; // Fixed naming convention issue
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        toast.success('Login successful!', {
          position: 'top-right', // Set toast position to top-right
        });
        setTimeout(() => {
          navigate('/aboutPage');
        }, 1500); // Delay navigation by 1.5 seconds to allow the toast to be visible
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Invalid email or password');
        toast.error(errorData.error || 'Invalid email or password', {
          position: 'top-right', // Set toast position to top-right
        });
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An unexpected error occurred. Please try again later.');
      toast.error('An unexpected error occurred. Please try again later.', {
        position: 'top-right', // Set toast position to top-right
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <img src={background} alt="Background" className="background" />
      <header className="header">
        <img src={logoTUT} alt="TUT Logo" className="tut-logo" />
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutPage">About</Link></li>
          </ul>
        </nav>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>WE-MEN-TOR</h2>
          <h3>LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="forward@wemen.tor"
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="* * * * * *"
              required
            />
            {error && <p className="error-message">{error}</p>}
            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <p>Don't have an account yet? <a href="RegisterPage">Sign Up</a></p>
        </div>
      </div>
      <ToastContainer 
        position="top-right" // Set the default position for the ToastContainer
        autoClose={5000} // Automatically close the toast after 5 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default LoginPage;
