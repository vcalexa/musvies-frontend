import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie 1', director: 'Director 1' },
    { id: 2, title: 'Movie 2', director: 'Director 2' },
    { id: 3, title: 'Movie 3', director: 'Director 3' }
  ]);

  return (
    <section id="movies">
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title} by {movie.director}</li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;