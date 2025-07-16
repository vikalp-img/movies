import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const ViewAllCast = ({setViewCast, data}) => {
  return (

  <div>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4 mx-4 sm:mx-6 lg:ml-8'>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div> */}
        {data?.cast?.map((item)=>(
            <div className='flex mx-2 sm:mx-3' key={item?.id}>
                <div className='rounded flex justify-center items-center h-16 w-16 sm:h-20 sm:w-20 bg-gray-300 overflow-hidden flex-shrink-0' > 
                    <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path || item.profile_path}`} alt="img" className='h-full w-full object-cover' />
                </div>
               <div className='flex-col ml-2 sm:ml-3 min-w-0 flex-1'>
                 <p className='font-semibold text-xs sm:text-sm truncate'>{item.name}</p>
                <p className='text-xs sm:text-sm text-gray-500 truncate'>{item.character}</p>
               </div>
            </div>
        ))}

     </div>

     <div className='flex justify-center mt-4'>
         <button className='cursor-pointer rounded-full w-7 h-7 bg-gray-300 flex justify-center items-center text-gray-700 hover:text-gray-900' onClick={()=>setViewCast(false)}> <FaArrowUp /> </button>
     </div>
   </div>
  )
}


// const array =[{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'},{name:'name',character:'char',img:'img'}]

export default ViewAllCast