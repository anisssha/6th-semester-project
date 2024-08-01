import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx'; // Ensure this path is correct
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx';

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
    
    <div>
    <HomeSectionCarousel/>
    </div>
    </div>
  );
};

export default Homepage;
