import { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Footer from '../../../common/Footer'
import Banner from './Banner'
import CommonComponent from '../../CommonComponent'
import { useDispatch, useSelector } from 'react-redux'
import CreditsSlider from './CreditsSlider'
import { FaArrowRightLong } from "react-icons/fa6";
import ViewAllCast from './ViewAllCast'
import Reviews from './Reviews'
import {   setMovieBannerDetails,  setMovieCredits, setReviews } from '../../../app/Slice/MovieSlice'
import { useParams } from 'react-router'
import { axiosInstance } from '../../../lib/axios'
import { getAPI, getCredit, getMediaBannerDetails, getReviewApi } from '../../../lib/api'

const LandingPage = () => {

  
  const dispatch = useDispatch();
  const {mediaType,id }= useParams();
  console.log(mediaType,id,'params')

  const date= Date.now();
  console.log(date,'date');
  

  const [mediaDetails,setMediaDetails]= useState([]);
  const [creditsData,setCreditsData] = useState([]);
  const cre=`${mediaType}-${id}`;
  // const cre2=`${date}`;

const creditsStoredToLocal = localStorage.getItem('creditsDetails');
const bannerDetailsInLocal = localStorage.getItem('bannerDetails');
const CreditsdataInLocalStorage = JSON.parse(creditsStoredToLocal) || {};
const bannerDetailsInLocalStorage = JSON.parse(bannerDetailsInLocal) || {};
console.log(CreditsdataInLocalStorage[cre],'Cccccccccccccccccc');


 const fetchData= async()=>{
  if(bannerDetails[cre] || bannerDetailsInLocalStorage[cre]) return;

  const now = Date.now()
    const cached = bannerDetailsInLocalStorage[cre];

    if(cached && now- cached?.timestamp <1800000){
      dispatch(setMovieBannerDetails({[cre]:cached.data}));
      return;
    }
  const data = await getMediaBannerDetails(id,mediaType);
 
   dispatch(setMovieBannerDetails({[cre]:data}));
   const previousStored = JSON.parse(bannerDetailsInLocal) ;
const dataToAdd = {...previousStored,[cre]:{data: data,timestamp: Date.now()}};
localStorage.setItem('bannerDetails',JSON.stringify(dataToAdd));

    console.log(data,'dataaaa')
}


// const fetchCredits =async()=>{
// if(mediaCreditsGlobal[cre] || CreditsdataInLocalStorage[cre]) return;
//  const callApi = await getCredit(id,mediaType);



// setCreditsData((prev)=>({...prev,[`${mediaType}-${id}`]:callApi}));
// const addToState= {[cre]:{data:callApi,timestamps:Date.now()}}
// console.log(addToState,'addToState');
// dispatch(setMovieCredits(addToState));
// const previousStored = JSON.parse(creditsStoredToLocal) ;
// const dataToAdd = {...previousStored,[cre]:{data:callApi,timestamps:Date.now()}}
// console.log(dataToAdd,'dataToAdd')
// const dataAddedToLocal = localStorage.setItem('creditsDetails',JSON.stringify(dataToAdd));
// // console.log(JSON.parse(dataAddedToLocal),'dataAddedToLocal');

//  console.log(callApi,'callApi')
 
// }

const fetchCredits = async () => {
  try {
    
    const creditsStoredToLocal = localStorage.getItem('creditsDetails');
    const storedData = JSON.parse(creditsStoredToLocal) || {};

    const now = Date.now()
    const cached = storedData[cre];

    if (cached && now - cached.timestamp < 1800000) {
      
      dispatch(setMovieCredits({ [cre]: cached.data }));
      return;
    }
    const apiData = await getCredit(id, mediaType);

   
    dispatch(setMovieCredits({ [cre]: apiData }));
    const newData = {...storedData, [cre]: { data: apiData, timestamp: Date.now() }};
    localStorage.setItem('creditsDetails', JSON.stringify(newData));

  } catch (error) {
    
  }
};


// remove from local storage if data is more than 30 mins older 
console.log(JSON.parse(creditsStoredToLocal),'dataInstorage');

const cleanOldCreditsFromLocalStorage = () => {
  const creditsStoredToLocal = localStorage.getItem('creditsDetails');
  const bannerDetails = localStorage.getItem('bannerDetails');
  const bannerData = JSON.parse(bannerDetails) || {};
  const storedData = JSON.parse(creditsStoredToLocal) || {};

  let changed = false;

  const objKeys=Object.keys(storedData);
  console.log(objKeys,'objkeysss');
  
  
  const now = Date.now()

  objKeys.forEach(key => {
    const item = storedData[key];
    if ( now - item?.timestamp > 1800000) {
      delete storedData[key];
      changed = true;
    }
  });
// console.log(storedData,'storedData');
const bannerObj = Object.keys(bannerData);
console.log(bannerObj,'bannerObj');

let banner = false;
bannerObj.forEach((key)=>{
  const item = bannerData[key];
  if(item?.timestamp && now- item?.timestamp > 1800000){
    delete bannerData[key];
    banner = true;
  }
})

  if (changed || banner) {
    localStorage.setItem('creditsDetails', JSON.stringify(storedData));
    localStorage.setItem('bannerDetails',JSON.stringify(bannerData));
  }
};



const fetchReview = async () => {
  if(mediaReviews[cre]) return;
 try {
   const data= await getReviewApi(id,mediaType);
   dispatch(setReviews({[cre]:data}));
 } catch (error) {
  
 }
}



useEffect(()=>{

  // console.log('insideUseEffect');
  cleanOldCreditsFromLocalStorage();
  fetchData();
  fetchCredits();
  fetchReview();

},[id])


console.log(cre,'cre');

const mediaCreditsGlobal = useSelector((state)=>state.movieCredits);
const bannerDetails = useSelector((state)=>state.movieBannerDetails);
const mediaReviews = useSelector((state)=>state.reviews);
console.log(bannerDetails,'bannerDetails');
console.log(mediaCreditsGlobal,'mediaCreditsGloabal');



// console.log(CreditsdataInLocalStorage[cre],'asdfghj')

  return (
    <div>
        <Navbar />
    <div>
       <Banner details={ bannerDetails[cre] || bannerDetailsInLocalStorage[cre]?.data} />
       
        <CreditsSlider title={'Top Cast'} credits={mediaCreditsGlobal[cre] || CreditsdataInLocalStorage[cre]?.data}   />
       
       <div className='border-b border-gray-300 mx-20 my-3'></div>

       <Reviews data={mediaReviews[cre]} />
    </div>
    <Footer />
    </div>
  )
}

export default LandingPage