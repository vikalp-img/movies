import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2Q1ZDVmNGYzMzhlZjI2ZGYxNjhlZWE1YjA0YTgxYyIsIm5iZiI6MTc1MTM1NTg0OS43NjYsInN1YiI6IjY4NjM5MWM5ZDY1NjM1ZDBjMTUyMGQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIVzUrZUGhXWzioyYBeSvx95jphWSSMPkPU11iA7MGA'
  }
});

export {axiosInstance};
