import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    
  return (
 
   <div>
      <nav className="bg-gray-800 max-w-screen m-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button 
                type="button" 
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" 
                aria-controls="mobile-menu" 
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* Close icon */}
                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Logo and desktop menu */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img 
                  width='154' 
                  height='20' 
                  className="h-8 w-auto" 
                  src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' 
                  alt="TMDB" 
                />
              </div>
              
              {/* Desktop menu */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Movies dropdown */}
                  <div className="flex relative group">
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md">
                      Movies
                    </a>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Popular</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Now Playing</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Upcoming</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Top Rated</a>
                    </div>
                  </div>

                  {/* TV Shows dropdown */}
                  <div className="flex relative group">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">TV Shows</a>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Popular</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Airing Today</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">On TV</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Top Rated</a>
                    </div>
                  </div>

                  {/* People dropdown */}
                  <div className="flex relative group">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">People</a>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Popular People</a>
                    </div>
                  </div>

                  {/* More dropdown */}
                  <div className="flex relative group">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">More</a>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Discussions</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Leaderboard</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Support</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Api Documentation</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Api For Business</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side items */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <FaPlus className='text-white font-extrabold hidden sm:block' />
                <button type="button" className="relative rounded-md bg-gray-800 text-sm px-2 py-1 text-gray-400 hover:bg-white hover:text-black border-2 border-gray-600 hidden sm:block">
                  EN
                </button>
                <a href="#" className="rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</a>
                <a href="#" className="rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hidden sm:block">Join TMDB</a>
                <FaSearch className='text-blue-400 size-4 sm:size-5' />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 border-t border-gray-700">
            {/* Mobile Movies */}
            <div className="block">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">Movies</a>
              <div className="ml-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Popular</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Now Playing</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Upcoming</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Top Rated</a>
              </div>
            </div>

            {/* Mobile TV Shows */}
            <div className="block">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">TV Shows</a>
              <div className="ml-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Popular</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Airing Today</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">On TV</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Top Rated</a>
              </div>
            </div>

            {/* Mobile People */}
            <div className="block">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">People</a>
              <div className="ml-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Popular People</a>
              </div>
            </div>

            {/* Mobile More */}
            <div className="block">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">More</a>
              <div className="ml-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Discussions</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Leaderboard</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Support</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Api Documentation</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Api For Business</a>
              </div>
            </div>

            {/* Mobile additional items */}
            <div className="border-t border-gray-700 pt-4">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">Join TMDB</a>
              <button type="button" className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Language: EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search bar */}
      {/* <div className="max-w-screen m-auto w-full px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-4 h-4 sm:w-5 sm:h-5 top-2.5 left-2.5 text-slate-600">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
          <input
            className="w-full bg-white placeholder:text-slate-400 placeholder:font-semibold text-slate-700 text-sm pl-8 sm:pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
            placeholder="Search for Movies, TV Shows and many more..." 
          />
        </div>
      </div> */}
    </div>

 
  )
}

export default Navbar