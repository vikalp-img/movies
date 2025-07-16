import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card'

function CommonComponent({ title, data, tabs = [], useTabs = false }) {
  const [selected, setSelected] = useState(tabs[0]?.value || '');

  console.log(data,'data');

  // const dataToFilter = data.sort((a,b)=>b.popularity - a.popularity);
  
  const dataArray = Array.isArray(data) ? data : [data];

const hasImdb = dataArray.some(item => item.imdb_id);

  const getFilteredData = () => {
    if(!useTabs) return dataArray;

    switch(selected){
      
    }
    if (!useTabs || selected === 'today' || selected === 'latest') return data;
    return [...data].sort((a, b) => b.popularity - a.popularity);
  };

  const filteredData = hasImdb ? dataArray : getFilteredData();


  console.log(filteredData,'filtered Data');
  

  return (
    <div className='max-w-screen m-auto w-full px-25 py-6 '>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-2xl font-semibold'>{title}</p>

        {useTabs && (
          <div className='space-x-2'>
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelected(tab.value)}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  selected === tab.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <Swiper spaceBetween={30} slidesPerView={6} className=' bg-gradient-to-t from-cyan-400 to-blue-800'>
        {(filteredData || []).map((item) => (
          <SwiperSlide key={item.id}>
            {console.log(item.cast,'item')}
            <Card item={item } />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CommonComponent;
