import React from "react";
import '../assets//style/app.styles.scss';

import { Layout } from '../components//Layout';

import Accordion from '../components/Accordion';
import { accordionData } from '../utils/content';



const HomePage = () => {

  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      {/* <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 w-8/12'>
      
      </div> */}
    </Layout>
  );
}
export default HomePage;