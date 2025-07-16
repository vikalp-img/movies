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

  const [mediaDetails,setMediaDetails]= useState([]);
  const [creditsData,setCreditsData] = useState([]);
  const cre=`${mediaType}-${id}`;

const creditsStoredToLocal = localStorage.getItem('creditsDetails');
const bannerDetailsInLocal = localStorage.getItem('bannerDetails');
const CreditsdataInLocalStorage = JSON.parse(creditsStoredToLocal) || {};
const bannerDetailsInLocalStorage = JSON.parse(bannerDetailsInLocal) || {};

 const fetchData= async()=>{
  if(bannerDetails[cre] || bannerDetailsInLocalStorage[cre]) return;

  const data = await getMediaBannerDetails(id,mediaType);
 
   dispatch(setMovieBannerDetails({[cre]:data}));
   const previousStored = JSON.parse(bannerDetailsInLocal) ;
const dataToAdd = {...previousStored,[cre]:data};
localStorage.setItem('bannerDetails',JSON.stringify(dataToAdd));

    console.log(data,'dataaaa')
}

const fetchCredits =async()=>{
if(mediaCreditsGlobal[cre] || CreditsdataInLocalStorage[cre]) return;
 const callApi = await getCredit(id,mediaType);
setCreditsData((prev)=>({...prev,[`${mediaType}-${id}`]:callApi}));
dispatch(setMovieCredits({[cre]:callApi}));
const previousStored = JSON.parse(creditsStoredToLocal) ;
const dataToAdd = {...previousStored,[cre]:callApi}
console.log(dataToAdd,'dataToAdd')
const dataAddedToLocal = localStorage.setItem('creditsDetails',JSON.stringify(dataToAdd));
// console.log(JSON.parse(dataAddedToLocal),'dataAddedToLocal');

 console.log(callApi,'callApi')
 
}

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
       <Banner details={ bannerDetails[cre] || bannerDetailsInLocalStorage[cre]} />
       
        <CreditsSlider title={'Top Cast'} credits={mediaCreditsGlobal[cre] || CreditsdataInLocalStorage[cre]}  />
       
       <div className='border-b border-gray-300 mx-20 my-3'></div>

       <Reviews data={mediaReviews[cre]} />
    </div>
    <Footer />
    </div>
  )
}

export default LandingPage