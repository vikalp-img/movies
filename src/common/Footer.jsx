import React from 'react'
import footerLogo from '../../public/footerLogo.svg'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-800 max-w-screen m-auto w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50 py-8 sm:py-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
                <div className='col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start'>
                    <img src={footerLogo} alt="img" className='max-h-20 sm:max-h-24 lg:max-h-30 mt-0 sm:mt-4 lg:mt-15 mb-4 sm:mb-6' />
                    <button className='bg-gray-800 text-white border-white border-1 px-6 sm:px-8 lg:px-10 py-2 rounded mt-2 sm:mt-4 lg:mt-8 hover:bg-gray-300 hover:text-blue-700 cursor-pointer mb-6 sm:mb-8 lg:mb-10 object-contain text-sm sm:text-base transition-colors duration-200'>
                        Hi
                    </button>
                </div>
                <div className='mt-0 sm:mt-4 lg:mt-17'>
                    <div className='text-center lg:text-left'>
                        <p className='text-white font-medium text-lg sm:text-xl mb-3 sm:mb-4'>The Basics</p>
                        <div className='space-y-2 sm:space-y-3'>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>About Us</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Contact Us</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Show Support</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Status</p>
                        </div>
                    </div>
                </div>
                <div className='mt-0 sm:mt-4 lg:mt-17'>
                    <div className='text-center lg:text-left'>
                        <p className='text-white font-medium text-lg sm:text-xl mb-3 sm:mb-4'>Contribution</p>
                        <div className='space-y-2 sm:space-y-3'>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Collaborate</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Add Movies</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2'>Add Tv Shows</p>
                        </div>
                    </div>
                </div>
                <div className='mt-0 sm:mt-4 lg:mt-17'>
                    <div className='text-center lg:text-left'>
                        <p className='text-white font-medium text-lg sm:text-xl mb-3 sm:mb-4'>Legal</p>
                        <div className='space-y-2 sm:space-y-3'>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out  hover:translate-x-2 '>Rights & Reserves</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out hover:translate-x-2'>Usage</p>
                            <p className='text-white text-sm sm:text-base hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out hover:translate-x-2'>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer