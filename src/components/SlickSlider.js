import React from 'react';
import Slider from 'react-slick';
import Slide from '../components/Slide';

import '../assets/style/components/slider-integrations.scss'

const SlickSlider = ({ slides }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    // variableWidth: true,
  }

  return (
    <Slider {...settings} className='slider-integrations'>
      {slides.map(item => (
        <Slide options={{...item}} />
      ))}
    </Slider>
  );
}

export default SlickSlider
