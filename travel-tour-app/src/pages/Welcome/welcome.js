import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Our Travel and Tour App!</h1>
      <div className="welcome-btn-container">
        <button className="welcome-btn" onClick={handleLoginClick}>Login</button>
        <button className="welcome-btn" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default Welcome;
