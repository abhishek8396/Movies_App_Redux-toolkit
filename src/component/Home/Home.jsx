import { useEffect, } from 'react';
import {useDispatch} from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {fetchAsyncMovies, fetchAsyncShow} from '../../feature/movies/movieSlice';

const Home = () => {
 
    const disaptch= useDispatch()
    const movieText='harry';
    const showText= 'friends';
  useEffect(()=>{
    disaptch(fetchAsyncMovies(movieText));
    disaptch(fetchAsyncShow(showText))
  },[disaptch])
  return (
    <div>
       <div className="banner-img"></div>
       <MovieListing/>
    </div>
   
  )
}

export default Home;