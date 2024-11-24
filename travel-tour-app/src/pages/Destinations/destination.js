import React, { useState } from 'react';
import './destination.css';

const Destination = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="destination">
            <div className="destination-header">
                <h1 className="destination-title">Explore Your Next Adventure</h1>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for a destination..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="filters">
                <div className="filter-option">
                    <label>Filter by:</label>
                    <select>
                        <option value="all">All</option>
                        <option value="beaches">Beaches</option>
                        <option value="mountains">Mountains</option>
                    </select>
                </div>
                <div className="sort-option">
                    <label>Sort by:</label>
                    <select>
                        <option value="popularity">Popularity</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>

            <div className="destination-details">
                <p className="destination-description">
                    Discover the most beautiful destinations around the world. Whether you're looking for a relaxing beach vacation, an adventurous mountain getaway, or a cultural city tour, we have it all.
                </p>
            </div>

            <div className="media">
                <div className="destination-photos">
                    <div className="photo-gallery">
                        <img src="https://via.placeholder.com/300" alt="Destination 1" />
                        <img src="https://via.placeholder.com/300" alt="Destination 2" />
                    </div>
                </div>
                <div className="destination-video">
                    <video controls>
                        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="top-attractions">
                <h2>Top Attractions</h2>
                <ul>
                    <li>Great Wall of China</li>
                    <li>Eiffel Tower</li>
                    <li>Statue of Liberty</li>
                </ul>
            </div>

            <div className="travel-info">
                <div className="weather-info">
                    <h3>Weather</h3>
                    <p>Sunny, 25°C</p>
                </div>
                <div className="tips">
                    <h3>Travel Tips</h3>
                    <ul>
                        <li>Best time to visit: March - June</li>
                        <li>Pack light and bring sunscreen</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Destination;
