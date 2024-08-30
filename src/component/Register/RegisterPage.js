import React, { useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import logoTUT from '../../Assets/TUT_Logo_Transparent.png'; // Ensure the path to your logo is correct
import background from '../../Assets/Login Background.jpeg'; // Ensure the path to your background is correct

const RegisterPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentEmail: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert('Registration successful');
        navigate('/Login');
        // Redirect or reset form if necessary
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="register-page">
      <img src={background} alt="Background" className="register-page-background" />
      <header className="register-page-header">
        <img src={logoTUT} alt="TUT Logo" className="register-page-tut-logo" />
        <nav className="register-page-navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <div className="register-page-container">
        <div className="register-page-box">
          <h2 className="register-page-title">WE-MEN-TOR</h2>
          <div className="register-page-form-section register-page-form-section-left">
            <h3>SIGN UP</h3>
            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="first name"
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="last name"
                required
              />
              <label>Student Email:</label>
              <input
                type="email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
                placeholder="studentemail@tut4life.ac.za"
                required
              />
              <label>Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="contact number"
                required
              />
            </form>
          </div>
          <div className="register-page-form-section register-page-form-section-right">
            <h3>CREATE PASSWORD</h3>
            <form onSubmit={handleSubmit}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
