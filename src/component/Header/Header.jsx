import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/user.png';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShow, getAllMovieorShow } from '../../feature/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(getAllMovieorShow);
  const isLoading = useSelector((state) => state.movies.loading); // Get loading state from Redux

  const submitHandle = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please Enter Search Data!');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShow(term));
    setTerm('');
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandle}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit" disabled={isLoading}>Search</button> {/* Disable button during loading */}
        </form>
        {isLoading && <p>Loading...</p>} {/* Display a loading message or spinner while isLoading is true */}
      </div>
      <div className="user-image">
        <img src={profile} alt="user" />
      </div>
    </div>
  );
};

export default Header;
