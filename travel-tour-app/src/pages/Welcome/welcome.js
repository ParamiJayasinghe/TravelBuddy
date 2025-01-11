import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = ({ loginUser }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Our Travel and Tour App!</h1>
      <button className="welcome-btn" onClick={handleLoginClick}>Login</button>
      <button className="welcome-btn" onClick={handleRegisterClick}>Register</button>
    </div>
  );
};

export default Welcome;
