import React from 'react';
import Hero from '../Components/Hero';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div style={{ paddingTop: '64px' }}>
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;