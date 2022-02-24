import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import SlideItems from '../components/Slide'

// Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/style/slick-slider.scss'

// Component
import ToggleButton from './ToggleButton'

// Content
import { integrationSlides } from '../utils/content'

export default function SlickSlider() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const [data, setData] = useState(integrationSlides.banks)

  const toggleData = () => {
    setData(data === integrationSlides.banks ? integrationSlides.erps : integrationSlides.banks)
  }

  return (
    <div className='carousel'>
      <div className='switch-button'>
        <ToggleButton onChange={toggleData} defaultChecked={false} />
      </div>
      <div className='slider my-6 md:my-10 xl:my-15'>
        <Slider ref={sliderRef} {...sliderSettings}>
          {data.map((item, index) => (
            <SlideItems key={index} item={item}></SlideItems>
          ))}
        </Slider>
      </div>
      <div className='carousel__footer'>
        <p className='text-center'>We are adding new ones every week.</p>
      </div>
    </div>
  )
}