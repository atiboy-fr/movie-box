import React from 'react';
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
    <Link to={`/movie/${encodeURIComponent(movie.title)}`} className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
    </div>
  );
};

export default MovieCard;
