import React from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
    </div>
  );
}

export default App;
