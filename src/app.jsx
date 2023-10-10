import React, { useState } from "react";
import "./App.css";
import MovieList from "./movielist";
import Filter from "./filter";
import MovieCard from "./moviecard";
import AddMovie from "./addmovie";
export function App() {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Dark October",
      posterURL: "movie1.jpg",
      rating: 4.5,
    },
    {
      title: "Movie 2",
      description: "Passport",
      posterURL: "movie2.jpg",
      rating: 3.8,
    },
    // Add more movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
      );
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: "New Movie",
            description: "Description for New Movie",
            posterURL: "newmovie.jpg",
            rating: 4.2,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
}

export default App;
