import React from 'react';
import './packages.css';

const SeasonalPackages = () => {
    const packages = [
        {
            id: 1,
            name: 'Summer Escapade',
            description: 'Experience the best of summer with this all-inclusive package to sunny beaches and exotic islands.',
            price: '$499 per person',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 2,
            name: 'Winter Wonderland',
            description: 'Enjoy the magic of winter with cozy stays, snowy adventures, and unforgettable moments.',
            price: '$599 per person',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 3,
            name: 'Spring Bloom',
            description: 'Rejuvenate with this special spring package featuring lush gardens, vibrant festivals, and serene landscapes.',
            price: '$399 per person',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 4,
            name: 'Autumn Retreat',
            description: 'Savor the beauty of autumn with scenic views, warm retreats, and delightful seasonal flavors.',
            price: '$449 per person',
            image: 'https://via.placeholder.com/300x200',
        },
    ];

    return (
        <div className="seasonal-packages">
            <div className="header">
                <h1>Unforgettable Adventures Await!</h1>
                <p>
                    Explore our exclusive seasonal packages tailored for every traveler. Discover, relax, and create memories
                    to cherish forever.
                </p>
            </div>

            <div className="package-list">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="package-card">
                        <img src={pkg.image} alt={pkg.name} className="package-image" />
                        <div className="package-info">
                            <h2>{pkg.name}</h2>
                            <p>{pkg.description}</p>
                            <p className="package-price">{pkg.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonalPackages;
