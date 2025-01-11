import React from "react";
import './home.css';
import NALLUR from '../../Images/nallur.jpg'
import ANURADHAPURA from '../../Images/temple.jpg'
import MOSQUE from '../../Images/red mosque.jpg'
import NAGADEEPA from '../../Images/nagadeepa.jpg'
import CABANA from '../../Images/cabana.jpg'
import CINNAMON from '../../Images/cinnamon.webp'
import TEA from '../../Images/tea.jpg'
import GALLE from '../../Images/galle fort.jpg'
import BUNGLOW from '../../Images/bunglow.jpg'
import LAKE from '../../Images/lake cottages.jpg'
import LAVINIA from '../../Images/mount lavinia.avif'
import POOL from '../../Images/pool villa.jpg'
import PACKAGE01 from '../../Images/package 1.jpg'
import PACKAGE02 from '../../Images/package 2.jpg'
import PACKAGE03 from '../../Images/package 3.jpg'
import PACKAGE04 from '../../Images/package 4.jpg'
import PACKAGE05 from '../../Images/package 5.jpg'
import PACKAGE06 from '../../Images/package 6.jpg'

const Home = () => {
    return (
        <div className="home">
            <section className="welcome-section">
                <h1 className="welcome-message">Welcome to Your Travel and Tour Guide</h1>
            </section>

            <section className="trending-destinations">
                <h2 className="section-title">Trending Destinations</h2>
                <div className="photos">
                    <div className="photo">
                    <img src={NALLUR} alt="nallur" className="photo" />
                    <p>Nallur</p>
                    </div>
                    <div className="photo">
                    <img src={ANURADHAPURA} alt="anuradhapura" className="photo" />
                    <p>Anuradhapura</p>
                    </div>
                    <div className="photo">
                    <img src={MOSQUE} alt="mosque" className="photo" />
                    <p>Pettah Red Mosque</p>
                    </div>
                    <div className="photo">
                    <img src={NAGADEEPA} alt="nagadeepa" className="photo" />
                    <p>Nagadeepa</p>
                    </div>
                    <div className="photo">
                    <img src={TEA} alt="tea" className="photo" />
                    <p>Wewassa</p>
                    </div>
                    <div className="photo">
                    <img src={GALLE} alt="galle" className="photo" />
                    <p>Galle Fort</p>
                    </div>
                </div>
            </section>

            <section className="guest-loved-hotels">
                <h2 className="section-title">Hotels Guests Love</h2>
                <div className="photos">
                <div className="photo">
                    <img src={CABANA} alt="cabana" className="photo" />
                    <p>Cabana</p>
                    </div>
                    <div className="photo">
                    <img src={CINNAMON} alt="cinnamon" className="photo" />
                    <p>Cinnoman Grand Hotel</p>
                    </div>
                    <div className="photo">
                    <img src={BUNGLOW} alt="bunglow" className="photo" />
                    <p>Victorian Bunglow,Bandarawela</p>
                    </div>
                    <div className="photo">
                    <img src={LAKE} alt="cottage" className="photo" />
                    <p>Udawalawa Lake Cottages</p>
                    </div>
                    <div className="photo">
                    <img src={LAVINIA} alt="lavinia" className="photo" />
                    <p>Mount Lavinia</p>
                    </div>
                    <div className="photo">
                    <img src={POOL} alt="pool" className="photo" />
                    <p>Villas in Negambo</p>
                    </div>
                </div>
            </section>

            <section className="seasonal-packages">
                <h2 className="section-title">Seasonal Packages</h2>
                <div className="photos">
                    <div className="photo">
                    <img src={PACKAGE01} alt="package01" className="photo" />
                    </div>
                    <div className="photo">
                    <img src={PACKAGE02} alt="package02" className="photo" />
                    </div>
                    <div className="photo">
                    <img src={PACKAGE03} alt="package03" className="photo" />
                    </div>
                    <div className="photo">
                    <img src={PACKAGE04} alt="package04" className="photo" />
                    </div>
                    <div className="photo">
                    <img src={PACKAGE05} alt="package05" className="photo" />
                    </div>
                    <div className="photo">
                    <img src={PACKAGE06} alt="package06" className="photo" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
