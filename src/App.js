import React from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
    </div>
  );
}

export default App;
