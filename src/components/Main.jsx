import React, { lazy, useEffect } from 'react'
import Navbar from './Navbar'
import CommonComponent from './CommonComponent'
import LatestTraillers from './LatestTraillers'

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, fetchTvShow } from '../app/Slice/MovieSlice';
import SearchBar from '../common/SearchBar';
import LeaderBoard from './LeaderBoard';
// import { useSelect } from '@material-tailwind/react';
const Footer = lazy(()=>import('../common/Footer'))


function Main() {

  // const details = useSelector((state)=>state.movieDetails);
  // console.log(details,'detailsInMian');
  
   const dispatch = useDispatch();
   const allMovies= useSelector((state)=>state.movies);

   const tvShows = useSelector((state)=>state.trendingTvShows);
   const movieCredits = useSelector((state)=>state.movieCredits);
   const allMedia = allMovies.concat(tvShows);

   console.log(allMedia,'all media ');
   console.log(movieCredits,'movieCredits InHome');
   

   console.log(tvShows,'tvshows');
   
     useEffect(()=>{
    dispatch(fetchAllMovies())
    dispatch(fetchTvShow())
   },[dispatch]);

     const tabOptions = [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'week' },
  ];



  return (
    <>
    <Navbar />
    <div className='bg-[url(/image.png)] bg-cover bg-center bg-no-repeat'>
        <div className='max-w-screen m-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 h-60 sm:h-72 md:h-80'>
            <div className='px-4 sm:px-8 md:px-15 flex flex-wrap mb-12 sm:mb-16 md:mb-20'>
                <div className='text-white pt-8 sm:pt-12 md:pt-15 block w-full'>
                    <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3'>Welcome.</p>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight'>Millions of movies, TV shows and people to discover. Explore now.</p>
                </div>
                
                <SearchBar />
               {/* <div className="w-full block mt-8 sm:mt-10 md:mt-13 ">
         <div className="relative">
          <input
          className="w-full h-10 sm:h-11 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-3 pr-20 sm:pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search for a movie, tv show, person...." 
        />
        <button
          className="absolute top-0 bottom-0 right-0 flex items-center rounded-full bg-linear-to-r from-green-400 to-cyan-500 px-4 sm:px-6 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Search
        </button> 
      </div>
               </div> */}
            </div>
        </div>
    </div>

    <CommonComponent title={'Trending'} data={allMovies} tabs={tabOptions} useTabs={true} />
    <LatestTraillers title={'Latest Traillers'} tabs={[{label:'Movie',value:'movie'},{label:'tv',value:'tv'},{label:'popular',value:'popular'}]} />
    <CommonComponent title={'Tv Shows'} data={tvShows} tabs={[{label:'Latest',value:'latest'},{label:'Popular',value:'popular'}]} useTabs={true} />
    <LeaderBoard />
    <Footer />
</>
    
  )
}

export default Main