import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
