import React from 'react';
import Map from './Map';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Navbar />
      <div>
        Map Area
        <Map />
      </div>
    </div>
  );
};

export default LandingPage;
