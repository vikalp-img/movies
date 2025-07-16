import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import RightSideBar from './RightSideBar';
import { FaArrowRightLong } from 'react-icons/fa6';
import SeeAllReviews from './SeeAllReviews';
import { useDispatch, useSelector } from 'react-redux';

const Reviews = ({data}) => {

    const [seeReviews,setSeeReviews] = useState(false);
    const dispatch = useDispatch();
    const mediaInfo = useSelector((state)=>state.mediaInfo);
console.log(mediaInfo,'mediaInfo');

const reviewData = data || [];
console.log(data,'reviewData');
// https://image.tmdb.org/t/p/original${data[0]?.author_details?.avatar_path}

  return (
    <div className='max-w-screen m-auto w-full px-4 sm:px-8 md:px-16 lg:px-25 mb-5'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0'>
            <div className='flex-[3] lg:mr-5'>
                <p className='font-semibold text-lg sm:text-xl mb-4'>Social</p>
                <div className='border border-gray-300 rounded shadow drop-shadow-white'>
                    <div className='flex flex-col sm:flex-row p-3 gap-3 sm:gap-0'>
                        <div className='rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-gray-400 mx-auto sm:mx-0 flex-shrink-0'>
                            <img src={`https://image.tmdb.org/t/p/original${reviewData[0]?.author_details?.avatar_path}`} alt="profile" className='h-full w-full object-contain rounded-full' />
                        </div>
                        <div className='flex-col sm:ml-3 text-center sm:text-left'> 
                            <p className='font-bold text-sm sm:text-base'>A review by {reviewData[0]?.author}</p> 
                           <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-2'> 
                            <div className='rounded h-fit w-fit bg-gray-700 text-white text-xs sm:text-sm font-semibold px-2 py-1 flex items-center justify-center gap-1'> 
                                <FaStar className='text-xs' /> {((reviewData[0]?.author_details?.rating)/10)*100}% 
                            </div>
                            <p className='text-xs sm:text-sm text-gray-600'>Written by {reviewData[0]?.author} on {(reviewData[0]?.created_at)}</p>
                           </div>
                        </div>
                    </div>
                    <div className='p-3 sm:p-4'>
                        <p className='text-sm sm:text-base leading-relaxed'>{reviewData[0]?.content}</p>
                    </div>
                   
                </div>
                 <button className='mt-4 flex items-center justify-center gap-2 font-medium cursor-pointer hover:text-gray-600 mb-4 text-sm sm:text-base mx-auto sm:mx-0' onClick={()=>setSeeReviews(true)}>See All Reviews <FaArrowRightLong /></button>
                 {seeReviews ? <SeeAllReviews setSeeReviews={setSeeReviews} reviewData={reviewData} /> : null}
            </div>
            <div className='flex-[1] mt-5 lg:mt-0'>
                <RightSideBar />
            </div>
        </div>
    </div>
  )
}

export default Reviews