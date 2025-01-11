import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const Navbar = ({ isLoggedIn, logoutUser }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isLoggedIn ? (
          <>
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/destinations" className="nav-link">Destinations</NavLink>
            <NavLink to="/hotels" className="nav-link">Hotels</NavLink>
            <NavLink to="/seasonal-packages" className="nav-link">Seasonal Packages</NavLink>
            <NavLink to="/cart" className="nav-link">Cart</NavLink>
            <button onClick={logoutUser} className="nav-link logout-btn">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/" className="nav-link">Welcome</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
