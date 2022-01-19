import React from "react";
import { Layout } from '../components//Layout';

import SubscibeFrom from '../components/SubcribeForm';

import Tabs from '../components/TabItem';
import { tabData } from '../utils/content';


const HomePage = () => {
  
  return (
    <Layout>
      <div className='w-full'>
        <SubscibeFrom />
        {/* <Tabs items={tabData} /> */}
      </div>
    </Layout>
  );
}
export default HomePage;