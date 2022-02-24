import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// STYLE
import '../../assets/style/index.scss';

// Image & Icon
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollDown from '../../assets/icons/homepage/mouse.svg';

// Component
import InfoHeading from '../../components/InfoHeading';
import ApiHubspotForm from '../../components/ApiHubspotForm';
import Tabs from '../../components/TabItem';
import SlickSlider from '../../components/SlickSlider';
import Cta from '../../components/Cta';

// Data components
import { tabData } from '../../utils/content';
import { tabDataTwo } from '../../utils/content';
import { tabDataThree } from '../../utils/content';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
      /* jshint ignore:start */
    <React.Fragment>
      <section className='hero mt-0 md:mt-12 lg:mt-24'>
        <div className='flex justify-between flex-row items-center flex-wrap overflow-hidden'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-5/12 column relative z-50'>
            <div className='logo mb-4 md:mb-8 w-max'>
              <Link to='/' className='logo__link flex items-center'>
                <img src='../../assets/icons/logo.svg' alt='logo' />
                <p className='ml-3 uppercase'>Smart hub</p>
              </Link>
            </div>
            <div className='hero__content'>
              <h1 className='title pb-5'>
                A feature-rich embedded
                <span className='text-blueCustom-100'> payment portal</span>
              </h1>
              <p className='text'>
                See how SMART Hub works and discover the features that enable
                any business make and receive payments from a single place.
              </p>
            </div>
            <ApiHubspotForm />
            <div className='scroll-down inline-flex items-center justify-center md:justify-start w-full md:w-auto'>
              <span className='text'>SCROLL DOWN FOR FEATURES</span>
              <span>
                <ScrollDown className='icon ml-3' />
              </span>
            </div>
          </div>
          <div className='w-7/12 column'>
          <LazyLoadImage
              src='../../assets/images/hero-video.png'
              className='absolute -top-12 md:top-0 opacity-30 lg:opacity-60 xl:opacity-100 left-2/4 lg:right-auto z-10'
            />
          </div>
        </div>
      </section>
      <section className='demonstration mt-4 md:mt-12 xl:my-21'>
        <InfoHeading
          classWrapper='mb-8 lg:mb-17 text-center'
          badge='Payment Feature'
          title='Making payments'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabData} mode='default' />
      </section>
      <section className='demonstration mt-4 md:mt-12 xl:my-21'>
        <InfoHeading
          classWrapper='mb-8 lg:mb-17 text-center'
          badge='Payment Feature'
          title='Managing payments'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabDataTwo} mode='center-mode' />
      </section>
      <section className='demonstration mt-4 md:mt-12 xl:my-21'>
        <InfoHeading
          classWrapper='mb-8 lg:mb-17 text-center'
          badge='Payment Feature'
          title='Payment flexibility'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabDataThree} mode='center-mode' />
      </section>
      <section className='integration my-4 md:my-12 xl:my-21'>
        <InfoHeading
          title={'Seamless integration and payments connectivity'}
          descrpt={
            'SMART Hub can be embedded in the following ERPs and integrated with accounts from these banks:'
          }
          classWrapper={'mb-4 lg:mb-12 xl:mb-17 w-full md:w-10/12 lg:w-6/12 mx-auto text-center'}
        />
        <SlickSlider />
      </section>
      <section className='cta my-12 xl:my-21'>
        <Cta />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </React.Fragment>
      /* jshint ignore:end */
  );
};
export default HomePage;

