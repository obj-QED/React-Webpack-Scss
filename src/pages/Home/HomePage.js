import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';

// STYLE
import '../../assets/style/index.scss';

// Image & Icon
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

import useContentful from '../../hooks/useContentfull';

const HomePage = () => {
  const [isBanner, setBanner] = useState([]);
  const [isTab1, setTab1] = useState([]);

  const { getBanner, getDemonstration1 } = useContentful();

  useEffect(() => {
    getBanner().then((response) => response && setBanner(response));
    getDemonstration1().then((response) => response && setTab1(response));
  });
  
  return (
    <React.Fragment>
      <section className='hero mt-24'>
        {isBanner.map((item, index) => (
          <div
            className='flex justify-between flex-row items-center'
            key={index}
          >
            <div className='w-5/12 column relative'>
              <div className='logo mb-8 w-max'>
                <Link to='/' className='logo__link flex items-center'>
                  <img src={item.logoUrl} alt={item.logoImage.fields.title} />
                  <p className='ml-3 uppercase'>Smart hub</p>
                </Link>
              </div>
              <div className='hero__content'>
                <h1 className='title pb-5'>
                  {item.title}
                  <span className='text-blueCustom-100'>
                    {' '}
                    {item.titleColor}
                  </span>
                </h1>
                <p className='text'>{item.description}</p>
              </div>
              <ApiHubspotForm />
              <div className='scroll-down inline-flex items-center'>
                <span className='text'>{item.scrollText}</span>
                <span>
                  <ScrollDown className='icon ml-3' />
                </span>
              </div>
            </div>
            <div className='w-7/12 column'>
              <img
                src={item.bannerImage}
                // alt={ item.bannerImage.fields.title }
                style={{ position: 'absolute', top: 0, right: 'auto' }}
              />
            </div>
          </div>
        ))}
      </section>
      <section className='demonstration my-21'>
        <InfoHeading
          // 'Payment Feature'
          classWrapper='mb-17 text-center'
          badge='Payment Feature'
          title='Making payments'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabData} mode='default' />
      </section>
      <section className='demonstration my-21'>
        <InfoHeading
          classWrapper='mb-17 text-center'
          badge='Payment Feature'
          title='Managing payments'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabDataTwo} mode='default' />
      </section>
      <section className='demonstration my-21'>
        <InfoHeading
          classWrapper='mb-17 text-center'
          badge='Payment Feature'
          title='Payment flexibility'
          descrpt='Make or request payments with a single click from within your ERP.'
        />
        <Tabs items={tabDataThree} mode='center-mode' />
      </section>
      <section className='integration my-21'>
        <InfoHeading
          title={'Seamless integration and payments connectivity'}
          descrpt={
            'SMART Hub can be embedded in the following ERPs and integrated with accounts from these banks:'
          }
          classWrapper={'mb-17 w-6/12 mx-auto text-center'}
        />
        <SlickSlider />
      </section>
      <section className='cta my-21'>
        <Cta />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default HomePage;
