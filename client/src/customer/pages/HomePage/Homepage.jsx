import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx'; // Ensure this path is correct
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx';
import { mens_kurta } from '../../../Data/mens_kurta.js';

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
    
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
    <HomeSectionCarousel data={mens_kurta} sectionName={"RECOMENDED FOR YOU"} />
    {/* <HomeSectionCarousel data={mens_kurta} />
    <HomeSectionCarousel data={mens_kurta} /> */}
 
    </div>
    </div>
  );
};

export default Homepage;
