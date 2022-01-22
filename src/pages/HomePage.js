import React from "react";

import '../assets/style/common.scss';
import '../assets//style/home.styles.scss';

import { Layout } from '../components//Layout';

import SlickSlider from '../components/SlickSlider';
import { integrationSlides } from '../utils/content';

const HomePage = () => {

  let [classState, setState] = React.useState(false);

  const toggle = (e) => {
    classState = !classState
  }

  return (
    <Layout>
      <button onClick={toggle}>
        TOGGLE
      </button>
      <div className={classState && 'is-active'}>
        <SlickSlider slides={integrationSlides.erps} />
        <SlickSlider slides={integrationSlides.banks} />
      </div>
    </Layout>
  );
}
export default HomePage;
