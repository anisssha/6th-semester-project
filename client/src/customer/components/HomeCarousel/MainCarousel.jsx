import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData'; // Ensure this path is correct


const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      key={item.id} // Make sure each item has a unique key
      className='cursor-pointer z-10 w-screen h-screen object-cover '
      role='presentation'
      src={item.image}
      alt={item.alt || 'carousel image'} // Use a descriptive alt text if available
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
