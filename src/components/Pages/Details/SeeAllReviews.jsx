import React from 'react'
import { FaArrowUp, FaStar } from 'react-icons/fa'

const SeeAllReviews = ({setSeeReviews,reviewData}) => {
  return (
    <div>
        <div>
         
                               
                                {reviewData?.map((item)=>(
                                    <div className='border border-gray-300 rounded shadow drop-shadow-white mb-5' key={item?.id}>
                                  <div className='flex p-3'>
                                  <div className='rounded-full h-14 w-14 flex items-center justify-center bg-gray-400'><img src={`https://image.tmdb.org/t/p/original${item?.author_details?.avatar_path}`} alt="profile" className='h-full w-full object-contain rounded-full' /></div>
                                   <div className='flex-col ml-3'> <p className='font-bold '>A review by {item?.author}</p> 
                                      <div className='flex items-center justify-center gap-2'> 
                                       <div className='rounded h-fit w-fit bg-gray-700 text-white text-sm font-semibold px-2 flex items-center justify-center gap-1'> <FaStar /> {((item?.author_details?.rating)/10)*100}% </div>
                                       <p>Written by {item?.author} on {(item?.created_at)}</p>{console.log(new Date(item?.created_at),'date')}
                                      </div>
                                   </div>
                               </div>
                               <div className='p-4'>
                                   <p>{item?.content}</p>
                               </div>
                               </div>
                                ))}
                                   
                              
                           
        </div>
        
        <button className='cursor-pointer rounded-full w-7 h-7 bg-gray-300 flex justify-center items-center text-gray-700 hover:text-gray-900' onClick={()=>setSeeReviews(false)}> <FaArrowUp /> </button>
         
    </div>
  )
}

export default SeeAllReviews