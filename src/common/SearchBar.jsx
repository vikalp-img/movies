import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/Debounce';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchResults, searchQueryApi, setSearchQuery } from '../app/Slice/MovieSlice';
import { useNavigate } from 'react-router';

function SearchBar() {

  const dispatch = useDispatch();
  const searchedQuery = useSelector((state)=>state.search);
  const navigate = useNavigate();
    // need to do de bouncing for search
    const [query,setQuery]=useState('');
    // const [debounceQuery,setDebounceQuery] = useState(query);
    //used debouncing or search made common component and used it as a hook 
    const {debouncedValue} =  useDebounce(query,500);

    // useEffect(()=>{

    //     const handler = setTimeout(()=>{
    //         setDebounceQuery(query);
    //     },400)

    //     return () => {
    //   clearTimeout(handler);
    //     };

    // },[query]);

 
 
    useEffect(()=>{
      if (!debouncedValue){ 
        dispatch(clearSearchResults());
         return
        };
        
        console.log('search example debounce query',debouncedValue);
        // api call need to make here 
        // dispatch(setSearchQuery(debouncedValue));

        dispatch(searchQueryApi(debouncedValue))
        
      
    },[debouncedValue]);

   const clickHandler = async(id,mediaType)=>{
  //  await dispatch(getMediaById({ id, mediaType })).unwrap();
      //  await dispatch(getMediaCredits({ id, mediaType })).unwrap();
       navigate('/details');
    }

console.log(searchedQuery,'searachQuery');
  return (
    <>
    <div className="w-full block mt-13 ">
     <div className="relative">
      <input
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      className="w-full h-11 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Search for a movie, tv show, person...." 
    
    />
    <button
      className="absolute top-0 bottom-0 right-0 flex items-center rounded-full bg-linear-to-r from-green-400 to-cyan-500   px-6 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Search
    </button>
      {/* Dropdown */}
        {searchedQuery && searchedQuery.length > 0 && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
            {searchedQuery.slice(0, 4).map((item, idx) => (
              <div
                key={item.id || idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                onClick={()=>clickHandler(item?.id,item?.media_type)}
              >
                {item.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w45${item.poster_path}`}
                    alt={item.title || item.name}
                    className="h-8 w-6 rounded"
                  />
                )}
                <span className="text-sm text-gray-700">{item.title || item.name}</span>
              </div>
            ))}
          </div>
        )}
  </div>
  
    </div>
    </>
  )
}

export default SearchBar