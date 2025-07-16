import React from 'react'
import { FaList } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const Banner = ({details}) => {

// console.log(details.poster_path,'poster')
const hours = Math.floor(details?.runtime / 60);
const minutes = details?.runtime % 60;
const backdropUrl = `https://image.tmdb.org/t/p/original${details?.backdrop_path}`;

  return (
    
//     <div className="relative max-w-screen m-auto w-full">
 
//   <div
//     className="absolute inset-0 bg-cover bg-center blur-xs "
//     style={{ backgroundImage:`url(${backdropUrl})` }}
//   ></div>
  
//   <div className="absolute inset-0 bg-black/0"></div>

 
//   <div className="relative z-10 px-30 py-6">
//     <div className='flex gap-5'>
//       <div className='h-90 w-70 rounded '>
//         <img src={`https://image.tmdb.org/t/p/w200${details?.poster_path}`} alt="banner" className='h-full w-full object-contain rounded'  />
//       </div>
//       <div className='flex1 mt-7'>
      
//         <div>
//           <p className=' text-xl font-medium text-white'>{details?.title}</p>
//           <div className='flex'>
//             <div className=' text-gray-400 rounded border-gray-400 border-1 px-1 py-1 w-fit h-fit text-sm '>UA 1/3+</div>
//             <div className='ml-2 text-white'>{details?.release_date} | {details?.genres?.map(g => g?.name).join(', ')}  {details?.runtime ? <span> | {hours}h {minutes}m</span> :<span></span> } </div>
//           </div>
//           <div className='flex mt-4 gap-4'>
//             <div className='rounded-full w-11 h-11 bg-gray-800 flex items-center justify-center'><FaList className='text-white' /> </div>
//             <div className='rounded-full w-11 h-11 bg-gray-800 flex items-center justify-center'><MdFavorite className='text-white' /></div>
//             <div className='rounded-full w-11 h-11 bg-gray-800 flex items-center justify-center'><MdWatchLater className='text-white' /></div>
//             <div className='cursor-pointer flex items-center text-white hover:text-gray-400 gap-1'> <FaPlay />  Play Trailer</div>
//           </div>
//           <p className='text-gray-400 italic mt-5'>{details?.tagline}</p>
//           <p className='text-white font-semibold mt-2'>Overview</p>
//           <p className='mt-2 text-white'>{details?.overview}</p>
//           <div className="grid grid-cols-3 gap-4 mt-4 text-white">
//             {details?.production_companies?.map((company) => (
//               <div key={company?.id} className="flex flex-col items-center">
//                 {company?.logo_path && (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w200${company?.logo_path}`}
//                     alt={company?.name}
//                     className="h-12 mb-2 object-contain" />
//                 )}
//                 <p className="font-semibold text-center">{company?.name}</p>
//                 <p className="text-xs text-gray-500">{company?.origin_country}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

<div className="relative max-w-screen m-auto w-full">
 
  <div
    className="absolute inset-0 bg-cover bg-center blur-xs"
    style={{ backgroundImage:`url(${backdropUrl})` }}
  ></div>
  
  <div className="absolute inset-0 bg-black/0"></div>

 
  <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-30 py-6">
    <div className='flex flex-col md:flex-row gap-4 md:gap-5'>
      <div className='h-80 w-56 sm:h-90 sm:w-70 rounded mx-auto md:mx-0 flex-shrink-0'>
        <img src={`https://image.tmdb.org/t/p/w200${details?.poster_path}`} alt="banner" className='h-full w-full object-contain rounded'  />
      </div>
      <div className='flex-1 mt-4 md:mt-7'>
      
        <div>
          <p className='text-lg sm:text-xl font-medium text-white text-center md:text-left'>{details?.title}</p>
          <div className='flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2 sm:gap-0 mt-2'>
            <div className='text-gray-400 rounded border-gray-400 border-1 px-1 py-1 w-fit h-fit text-sm'>UA 1/3+</div>
            <div className='sm:ml-2 text-white text-center md:text-left text-sm sm:text-base'>
              {details?.release_date} | {details?.genres?.map(g => g?.name).join(', ')}  
              {details?.runtime ? <span> | {hours}h {minutes}m</span> :<span></span> } 
            </div>
          </div>
          <div className='flex mt-4 gap-3 sm:gap-4 justify-center md:justify-start flex-wrap'>
            <div className='rounded-full w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 flex items-center justify-center'><FaList className='text-white text-sm sm:text-base' /> </div>
            <div className='rounded-full w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 flex items-center justify-center'><MdFavorite className='text-white text-sm sm:text-base' /></div>
            <div className='rounded-full w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 flex items-center justify-center'><MdWatchLater className='text-white text-sm sm:text-base' /></div>
            <div className='cursor-pointer flex items-center text-white hover:text-gray-400 gap-1 text-sm sm:text-base'> <FaPlay />  Play Trailer</div>
          </div>
          <p className='text-gray-400 italic mt-5 text-center md:text-left text-sm sm:text-base'>{details?.tagline}</p>
          <p className='text-white font-semibold mt-2 text-center md:text-left'>Overview</p>
          <p className='mt-2 text-white text-center md:text-left text-sm sm:text-base leading-relaxed'>{details?.overview}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-white">
            {details?.production_companies?.map((company) => (
              <div key={company?.id} className="flex flex-col items-center">
                {company?.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${company?.logo_path}`}
                    alt={company?.name}
                    className="h-10 sm:h-12 mb-2 object-contain" />
                )}
                <p className="font-semibold text-center text-sm sm:text-base">{company?.name}</p>
                <p className="text-xs text-gray-500">{company?.origin_country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default Banner