// src/components/CreditsSlider.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../Card';
import { FaArrowRightLong } from 'react-icons/fa6';
import ViewAllCast from './ViewAllCast';


function CreditsSlider({ title, credits }) {

  const [viewCast,setViewCast] = useState(false);

  if (!credits || !Array.isArray(credits?.cast)) {
    console.log('Invalid credits data:', credits);
    return null; 

  }

  console.log(credits,'credits')

  return (
     <>
     <div className='max-w-screen m-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-25 py-4 sm:py-6'>
      <div className='flex items-center justify-between mb-3 sm:mb-4'>
        <p className='text-lg sm:text-xl md:text-2xl font-semibold'>{title}</p>
      </div>

      <Swiper 
        spaceBetween={12} 
        slidesPerView={1.5}
        breakpoints={{
          480: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5.2,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          }
        }}
        className='bg-white !pb-2'
      >
        {credits?.cast.map((person) => (
          <SwiperSlide key={person.id} className='!h-auto'>
            <div className='transform transition-transform duration-200 '>
              <Card item={person} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       <button className='mt-3 sm:mt-4 flex items-center justify-center gap-2 font-medium cursor-pointer hover:text-gray-600 text-sm sm:text-base mx-auto sm:mx-0 transition-colors duration-200'  onClick={()=>setViewCast(true)}> 
         View All Cast <FaArrowRightLong className='text-sm sm:text-base' /> 
       </button>

         {viewCast ? <ViewAllCast setViewCast={setViewCast} data={credits} /> : null}

    </div>
    </>
  );
}

export default CreditsSlider;
