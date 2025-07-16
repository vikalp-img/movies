import { axiosInstance } from '../lib/axios';

export async function getMediaBannerDetails(id, mediaType, suffix = '') {
  if (!id || !mediaType) throw new Error('Missing id or mediaType');

  let base = '';
  if (mediaType === 'movie') {
    base = `movie/${id}`;
  } else if (mediaType === 'tv') {
    base = `tv/${id}`;
  } else {
    throw new Error('Unknown mediaType');
  }

  const res= await axiosInstance.get(`/${base}${suffix}?language=en-US`);
  return res.data;
}

export async function getCredit(id, mediaType, suffix = '') {
  if (!id || !mediaType) throw new Error('Missing id or mediaType');

  console.log(id,mediaType,'gettingIdMEdia')
  let base = '';
  if (mediaType === 'movie') {
    base = `movie/${id}`;
  } else if (mediaType === 'tv') {
    base = `tv/${id}`;
  } else {
    throw new Error('Unknown mediaType');
  }

  const response= await axiosInstance.get(`/${base}${suffix}/credits?language=en-US`);
  return response.data;
}


export const getAPI = async (url) => {
  const response = await axiosInstance.get(url, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  return response.data.results; 
};


export const getReviewApi= async (id,mediaType) => {
   if (!id || !mediaType) throw new Error('Missing id or mediaType');

  // console.log(id,mediaType,'gettingIdMEdia')
  let base = '';
  if (mediaType === 'movie') {
    base = `movie/${id}`;
  } else if (mediaType === 'tv') {
    base = `tv/${id}`;
  } else {
    throw new Error('Unknown mediaType');
  }

  const res = await axiosInstance.get(`/${base}/reviews?language=en-US`);
  return res.data.results
}