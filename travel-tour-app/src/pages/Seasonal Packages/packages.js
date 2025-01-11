import React from 'react';
import './packages.css';
import Package01 from '../../Images/package 1.jpg';
import Package02 from '../../Images/package 2.jpg';
import Package03 from '../../Images/package 3.jpg';
import Package04 from '../../Images/package 4.jpg';
import Package05 from '../../Images/package 5.jpg';
import Package06 from '../../Images/package 6.jpg';


const SeasonalPackages = () => {
    const packages = [
        {
            id: 1,
            image: Package01,
        },
        {
            id: 2,
            image: Package02, 
        },
        {
            id: 3,
            image: Package03, 
        },
        {
            id: 4,
            image: Package04, 
        },
        {
            id: 5,
            image: Package05, 
        },

        {
            id: 6,
            image: Package06, 
        },
    ];

    return (
        <div className="seasonal-packages">
            <div className="header">
                <h1>Unforgettable Experiences Await!</h1>
                <p>
                    Explore our exclusive seasonal packages tailored for every traveler. Discover, relax, and create memories
                    to cherish forever.
                </p>
            </div>

            <div className="package-list">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="package-card">
                        <img src={pkg.image} alt={pkg.name} className="package-image" />
                    </div>
                ))}
            </div>
            <div className="footer-spacing"></div>
        </div> 
    );
};

export default SeasonalPackages;
