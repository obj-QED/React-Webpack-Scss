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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1
        }
      },
    ]
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
