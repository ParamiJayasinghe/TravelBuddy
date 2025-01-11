import React, { useState } from 'react';
import './destination.css';
import DEST01 from '../../Images/GallDesti01.jpg'
import DEST02 from '../../Images/GallDesti02.jpg'
import DEST03 from '../../Images/GallDesti03.jpg'

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
                    <div className="photo-View">
                    <img src={DEST01} alt="destination01" className="photo" />
                    <p>Above Vieew</p>
                    </div>
                    <div className="photo-View">
                    <img src={DEST02} alt="destination02" className="photo" />
                    <p>Above Vieew</p>
                    </div>
                    <div className="photo-View">
                    <img src={DEST03} alt="destination03" className="photo" />
                    <p>Above Vieew</p>
                    </div>
                    </div>
                </div>
                <section className="destination-video">
                <h2 className="section-title">Watch Our Travel Highlights</h2>
                <div className="video-container">
                    <iframe 
                        src="https://www.youtube.com/watch?v=AG-Lu8gqIXE" 
                        title="Travel Highlights"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
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
