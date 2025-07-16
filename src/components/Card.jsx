import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {  setMediaInfo } from '../app/Slice/MovieSlice';
import { useNavigate } from 'react-router';

function Card({ item }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();


//   const clickHandler = useCallback(()=>async(id,mediaType)=>{
//     console.log(id,mediaType,'idOfMedia');
//     await dispatch(getMediaById({ id, mediaType })).unwrap();
//     await dispatch(getMediaCredits({ id, mediaType })).unwrap();
//      setMediaInfo({id:id,mediaType:mediaType})
//     navigate('/details');
//   },
// [item?.id])


  const clickHandler= async(id,mediaType)=>{
    console.log(id,mediaType,'idOfMedia');
   
  //  await dispatch(getMediaById({ id, mediaType })).unwrap();
  //   await dispatch(getMediaCredits({ id, mediaType })).unwrap();
    dispatch( setMediaInfo({id,mediaType}));
    navigate(`/details/${mediaType}/${id}`);
  }

  // useCallback(()=>clickHandler(),[item?.id])

  // useMemo(()=> clickHandler =async(id,mediaType)=>{
  //   console.log(id,mediaType,'idOfMedia');
  //   await dispatch(getMediaById({ id, mediaType })).unwrap();
  //   await dispatch(getMediaCredits({ id, mediaType })).unwrap();
  //    setMediaInfo({id:id,mediaType:mediaType})
  //   navigate('/details');
  // },[item?.id]);

  return (
    <div className='bg-white my-2 mx-4 shadow-md rounded cursor-pointer overflow-hidden h-[370px] w-52 flex flex-col relative' onClick={()=>clickHandler(item?.id,item?.media_type)}>
      <div className='h-[290px] w-full overflow-hidden'>
        <img
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path || item.profile_path}`}
          alt={item.title}
          className='h-full w-full object-cover'
        />
      </div>
      {item.cast_id ? <div></div> : <button className='rounded-full bg-black text-white py-2 px-2 w-10 absolute bottom-15 left-2'>
        {Math.ceil(item.vote_average * 10)}<span className='text-xs'>%</span>
      </button> }
      
      <div className='p-2 flex-grow flex flex-col justify-between'>
        <h2 className='mt-4 text-sm font-semibold line-clamp-2'>
          {item.title || item.name}
        </h2>
       {item.cast_id ? <p className='text-xs text-gray-500 mt-1'>{item.character}</p> :  <p className='text-xs text-gray-500 mt-1'>
          {item.release_date || item.first_air_date || item.character}
        </p>}
      </div>
    </div>
  );
}

export default Card;
