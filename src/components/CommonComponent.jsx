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
   <div className='max-w-screen m-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-25 py-4 sm:py-6'>
  <div className='flex flex-col sm:flex-row items-center justify-between mb-4 gap-3 sm:gap-0'>
    <p className='text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left'>{title}</p>

    {useTabs && (
      <div className='flex flex-wrap justify-center sm:justify-end gap-2 sm:space-x-2'>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelected(tab.value)}
            className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              selected === tab.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    )}
  </div>

  <Swiper 
    spaceBetween={15}
    slidesPerView={1.5} 
    breakpoints={{
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 25,
      },
      1280: {
        slidesPerView: 5.5,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 6,
        spaceBetween: 30,
      }
    }}
    className='bg-gradient-to-t from-cyan-400 to-blue-800 !pb-2'
  >
    {(filteredData || []).map((item) => (
      <SwiperSlide key={item.id} className='!h-auto'>
        {console.log(item.cast,'item')}
        <div className='transform transition-transform duration-200 '>
          <Card item={item} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
}

export default CommonComponent;
