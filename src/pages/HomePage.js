import React from "react";
import '../assets//style/app.styles.scss';

import { Layout } from '../components//Layout';

import Tabs from '../components/tabItem';
import { tabData } from '../utils/content';


const HomePage = () => {

  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <Tabs items={tabData} />
      </div>
    </Layout>
  );
}
export default HomePage;