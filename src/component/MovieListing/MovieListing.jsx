import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovie, getAllShows } from '../../feature/movies/movieSlice'
import MovieCard from  '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies= useSelector(getAllMovie);
  const shows= useSelector(getAllShows);
  
  let rendermovie= movies.Response==="True"?(movies.Search.map((movie, index)=>(
    <MovieCard key={index} data={movie}/>
  ))) : (<div><h3>{movies.err}</h3></div>);

  let rendershows= shows.Response==="True"?(shows.Search.map((movie, index)=>(
    <MovieCard key={index} data={movie}/>
  ))) : (<div><h3>{shows.err}</h3></div>);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{rendermovie}</div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{rendershows}</div>
      </div>
    </div>
  )
}

export default MovieListing