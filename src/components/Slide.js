import React from 'react';

const Slide = ({ item }) => {
  return (
    <div className="block-integration my-0 mx-2.5 flex flex-col flex-nowrap justify-center items-center">
          <div className="block-integration__block w-full flex justify-center items-center border border-gray-800 rounded-xlg">
            <img className="block-integration__image m-auto object-contain" src={`../assets/images/logos/${item.logo}.svg`} alt="Oracle"/></div>
          <div className="block-integration__title">{item.title}</div>
        </div>
  )
}
export default Slide
