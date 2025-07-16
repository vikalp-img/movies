import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, getCredit } from "../../lib/api";



export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async () => await getAPI('/trending/all/day?language=en-US')
);


export const fetchTvShow = createAsyncThunk(
  "movies/fetchTvShow",
  async () => await getAPI('/trending/tv/day?language=en-US')
);


export const searchQueryApi = createAsyncThunk(
  "movies/searchQueryApi",
  async (query) => {
    const queryToSend = query ? `query=${query}&` : '';
    return await getAPI(`/search/multi?${queryToSend}include_adult=false&language=en-US&page=1`);
  }
);


// export const getMediaById = createAsyncThunk(
//   "movies/getMediaById",
//   async ({ id, mediaType }) => await getAPI(getApiEndpoint(id, mediaType))
// );

// export const getMediaCredits = createAsyncThunk(
//   "movies/getMediaCredits",
//   async ({ id, mediaType }) => await getAPI(getCredit(id, mediaType))
// );


// export const getReviews = createAsyncThunk(
//   "movies/reviews",
//   async ({ id, mediaType }) => await getAPI(getApiEndpoint(id, mediaType, '/reviews&page=1'))
// );

const initialState = {
  movies: [],
  trendingTvShows: [],
  search: [],
  movieDetails: null,
  movieBannerDetails:[],
  movieCredits: [],
  reviews: [],
  leaderboardData:[],
  mediaInfo: null,
  searchQuery: '',
  loading: false,
  error: null
};

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchResults: (state) => {
      state.search = [];
    },
    setMediaInfo: (state, action) => {
      state.mediaInfo = action.payload;
    },
     setMovieBannerDetails: (state, action) => { state.movieBannerDetails = {...state.movieBannerDetails,...action.payload}},
  setMovieCredits: (state, action) => { state.movieCredits ={...state.movieCredits,...action.payload} },
  setReviews: (state, action) => { state.reviews = {...state.reviews,...action.payload} },
  setLeadeboardData:(state,action)=>{state.leaderboardData = action.payload},

  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(fetchTvShow.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTvShow.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingTvShows = action.payload;
      })
      .addCase(fetchTvShow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(searchQueryApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchQueryApi.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(searchQueryApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

     
      // .addCase(getMediaById.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getMediaById.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.movieDetails = action.payload;
      // })
      // .addCase(getMediaById.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })

      
      // .addCase(getMediaCredits.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getMediaCredits.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.movieCredits = action.payload;
      // })
      // .addCase(getMediaCredits.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })

      
      // .addCase(getReviews.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getReviews.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.reviews = action.payload;
      // })
      // .addCase(getReviews.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
  },
});

export const { setSearchQuery, clearSearchResults, setMediaInfo,setMovieBannerDetails, setMovieCredits, setReviews,setLeadeboardData  } = MovieSlice.actions;
export default MovieSlice.reducer;
