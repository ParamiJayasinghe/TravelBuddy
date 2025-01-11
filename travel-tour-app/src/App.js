import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav bar/navBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Destination from './pages/Destinations/destination';
import Hotel from './pages/Hotels/hotel';
import SeasonalPackages from './pages/Seasonal Packages/packages';
import Cart from './pages/Cart/cart';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Welcome from './pages/Welcome/welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
        <Routes>
          <Route path="/" element={<Welcome loginUser={loginUser} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Welcome loginUser={loginUser} />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/seasonal-packages" element={<SeasonalPackages />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
