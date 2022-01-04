import React, { useState } from "react";
import '../assets//style/app.styles.scss';

import { Layout } from '../components//Layout';

import AccordionItem from '../components/Accordion';
import { accordionData } from '../utils/content';



const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className="accordion">
          {accordionData.map(({ item }, index ) => (
            <AccordionItem
              item={item}
              index={index}
              onClick={() => {
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default HomePage;