import React from "react";
import './navBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="pages">
                <span className="nav-option">Home</span>
                <span className="nav-option">Destinations</span>
                <span className="nav-option">Hotels</span>
                <span className="nav-option">Seasonal Offers</span>
                <span className="nav-option">Cart</span>
                <span className="nav-option">Contact Us</span>
            </div>
        </nav>
    );
};

export default Navbar;
