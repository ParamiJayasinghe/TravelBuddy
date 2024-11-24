import React from "react";
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="welcome-section">
                <h1 className="welcome-message">Welcome to Your Travel and Tour Guide</h1>
            </section>

            <section className="trending-destinations">
                <h2 className="section-title">Trending Destinations</h2>
                <div className="photos">
                    <div className="photo">Destination 1</div>
                    <div className="photo">Destination 2</div>
                    <div className="photo">Destination 3</div>
                </div>
            </section>

            <section className="guest-loved-hotels">
                <h2 className="section-title">Hotels Guests Love</h2>
                <div className="photos">
                    <div className="photo">Hotel 1</div>
                    <div className="photo">Hotel 2</div>
                    <div className="photo">Hotel 3</div>
                </div>
            </section>

            <section className="seasonal-packages">
                <h2 className="section-title">Seasonal Packages</h2>
                <div className="photos">
                    <div className="photo">Package 1</div>
                    <div className="photo">Package 2</div>
                    <div className="photo">Package 3</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
