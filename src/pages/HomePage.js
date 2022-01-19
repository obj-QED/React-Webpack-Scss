import React from "react";
import '../assets//style/home.styles.scss';

import { Layout } from '../components//Layout';

import SlickSlider from '../components/SlickSlider';

const HomePage = () => {

  let [classState, setClassState] = React.useState(false);

  const toggle = (e) => {
    classState = !classState
  }

  return (
    <Layout>
      <button onClick={toggle}>
        TOGGLE
      </button>
      <div className={classState && 'is-active'}>
        <SlickSlider />
        <SlickSlider />
      </div>
    </Layout>
  );
}
export default HomePage;
