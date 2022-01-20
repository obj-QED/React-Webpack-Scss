import React from 'react';
import Slider from 'react-slick';
import Slide from '../components/Slide';

const SlickSlider = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {slides.map(item => (
        <Slide options={{...item}} />
      ))}
    </Slider>
  );
}

export default SlickSlider
