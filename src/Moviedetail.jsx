// MovieDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail">
      <Link to="/">Back to Home</Link>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <iframe
        title="trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetail;
