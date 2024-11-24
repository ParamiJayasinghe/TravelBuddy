import React from 'react';
import Navbar from './components/nav bar/navBar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Destination from './pages/Destinations/destination';
import Hotel from './pages/Hotels/hotel';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Footer /> 
        <Home/>
        <Destination/>
        <Hotel/>
      </div>
  );
}

export default App;