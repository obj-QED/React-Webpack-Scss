import React, { Component } from 'react'
import InfoHeading from './InfoHeading'
import { Button } from './Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// style
import '../assets/style/cta.scss'

import HeroImage from '../assets/images/cta-image.png'

export default class Cta extends React.Component {
  render() {
    return (
      <div className='cta bg-cta rounded-1.5xl p-6 xl:p-0 md:w-10/12 xl:w-full mx-auto'>
        <div className='flex justify-between flex-row items-center w-full xl:w-10/12 mx-auto flex-wrap relative overflow-hidden'>
          <div className='xl:w-5/12 z-10'>
            <InfoHeading
              badge='SMART Hub'
              title='A smarter way to make and receive payments'
              descrpt='Make or request payments with a single click from within your ERP.'
            />
            <div className='flex items-center flex-wrap md:flex-nowrap mt-4 md:mt-13 text-center md:text-left'>
              <Button className='w-full md:w-auto mb-1 md:mb-0 md:mr-3 hover:bg-opacity-80' variant='dark' size='default' to='https://www.transcard.com/contact'>
                Request full demo
              </Button>
              <Button className='w-full md:w-auto' variant='light-border' size='default' to='https://www.transcard.com/embedded-payments/smart-hub'>
                Discover SMART Hub
              </Button>
            </div>
          </div>
          <div className='absolute -top-12 -right-4 opacity-10 xl:opacity-100 xl:relative xl:rigth-auto xl:top-auto xl:w-6/12'>
            <LazyLoadImage src={HeroImage} alt='smart hub' effect="blur"/>
          </div>
        </div>
      </div>
    )
  }
}