import React, { useState } from 'react';
import './hotel.css';
import Cinnamon from '../../Images/cinnamon.webp';
import Cabana from '../../Images/cabana.jpg';
import Bunglow from '../../Images/bunglow.jpg';
import Cottage from '../../Images/lake cottages.jpg';
import MountLavinia from '../../Images/mount lavinia.avif';

const Hotel = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [accommodationType, setAccommodationType] = useState('all');

    const [hotels] = useState([
        { id: 1, name: 'Cinnamon Grand Hotel', district: 'Downtown', price: 150, rating: 4, image: Cinnamon, type: 'hotel' },
        { id: 2, name: 'Villa', district: 'Beachfront', price: 200, rating: 5, image: Cabana, type: 'villa' },
        { id: 3, name: 'Bungalow', district: 'City Center', price: 120, rating: 3, image: Bunglow, type: 'bungalow' },
        { id: 4, name: 'Lake Cottages', district: 'Suburbs', price: 180, rating: 4, image: Cottage, type: 'cottage' },
        { id: 5, name: 'Mount Lavinia Hotel', district: 'Uptown', price: 160, rating: 4, image: MountLavinia, type: 'hotel' },
    ]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTypeChange = (e) => {
        setAccommodationType(e.target.value);
    };

    const filteredHotels = hotels.filter((hotel) =>
        hotel.district.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (accommodationType === 'all' || hotel.type === accommodationType)
    );

    return (
        <div className="hotel">
            <div className="hotel-header">
                <h1>Find Your Perfect Accommodation</h1>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by district"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="filters">
                <div className="filter-option">
                    <label>Sort by:</label>
                    <select>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div className="filter-option">
                    <label>Accommodation Type:</label>
                    <select value={accommodationType} onChange={handleTypeChange}>
                        <option value="all">All</option>
                        <option value="hotel">Hotel</option>
                        <option value="villa">Villa</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="cottage">Cottage</option>
                    </select>
                </div>
            </div>

            <div className="hotel-list">
                {filteredHotels.map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} className="hotel-thumbnail" />
                        <div className="hotel-info">
                            <h2>{hotel.name}</h2>
                            <p>District: {hotel.district}</p>
                            <p>Price: ${hotel.price}</p>
                            <p>Rating: {hotel.rating} stars</p>
                            <p>Type: {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotel;
