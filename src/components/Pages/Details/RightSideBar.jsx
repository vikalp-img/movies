import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { PiLinkBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';

const RightSideBar = () => {

    const navigate = useNavigate();

  return (
     <div className='block'>
        <div className='flex gap-3 mt-4 sm:mt-8 ml-4 sm:ml-7 text-xl sm:text-2xl justify-center lg:justify-start' > 
            <FaFacebook className='hover:text-gray-600 cursor-pointer' />
            <FaGithub className='hover:text-gray-600 cursor-pointer' /> 
            <FaInstagram className='hover:text-gray-600 cursor-pointer' />
            <div className='border-gray-400 border-l mx-2'></div>
            <PiLinkBold onClick={()=>navigate('/')} className='cursor-pointer hover:text-gray-600' />
        </div>
        <div className='mt-4 sm:mt-5 ml-4 sm:ml-7 text-center lg:text-left'>
            <p className='font-semibold text-sm sm:text-base'>Status</p>
            <p className='text-sm sm:text-base'>Released</p>
        </div>
        <div className='mt-4 sm:mt-5 ml-4 sm:ml-7 text-center lg:text-left'>
            <p className='font-semibold text-sm sm:text-base'>Original Language</p>
            <p className='text-sm sm:text-base'>English</p>
        </div>
        <div className='mt-4 sm:mt-5 ml-4 sm:ml-7 text-center lg:text-left'>
            <p className='font-semibold text-sm sm:text-base'>Budget</p>
            <p className='text-sm sm:text-base'>$2500000</p>
        </div>
        <div className='mt-4 sm:mt-5 ml-4 sm:ml-7 text-center lg:text-left'>
            <p className='font-semibold text-sm sm:text-base'>Revenue</p>
            <p className='text-sm sm:text-base'>$2700000</p>
        </div>
        <div className='border-b border-b-gray-300 mb-5 px-3 mt-4 sm:mt-5'></div>
        <div className='ml-4 sm:ml-7 flex flex-col items-center lg:items-start'>
            <p className='font-semibold text-sm sm:text-base mb-2'>Content Score</p>
            <div className='w-full max-w-xs sm:max-w-none sm:w-60 lg:w-70'>
                <div className='rounded-t-xl bg-red-900 h-fit w-full p-2 text-white font-semibold flex justify-start text-sm sm:text-base'>100</div>
                <div className='rounded-b-xl bg-gray-400 h-fit w-full p-2 text-white text-xs sm:text-sm'>Yes looking good!!</div>
            </div>
        </div>

    </div>
  )
}

export default RightSideBar