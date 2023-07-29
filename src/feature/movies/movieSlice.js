import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieapi";
import {APIKey} from "../../common/api/movieApiKey";

export const fetchAsyncMovies=createAsyncThunk('movie/fetchAsyncMovies',async(term)=>{
  
    const response= await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      .catch((err)=>{
        console.log(err)
      })
      // console.log("This response from API", response)
      return response.data
    }
)

export const fetchAsyncShow=createAsyncThunk('movie/fetchAsyncShow',async(term)=>{
    
    const response= await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
      .catch((err)=>{
        console.log(err)
      })
      // console.log("This response from API", response)
      return response.data
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );
const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetch Successfully")
            return{...state, movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");
        },
        [fetchAsyncShow.fulfilled]:(state,{payload})=>{
            console.log("Fetch Successfully")
            return{...state, shows:payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fetch Successfully")
            return{...state, selectMovieOrShow:payload};
        },

    }
});

export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovie=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getAllMovieorShow=(state)=>state.movies.selectMovieOrShow;
export default movieSlice.reducer;