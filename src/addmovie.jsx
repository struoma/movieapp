//start
import React, { useState } from "react";
import "./App.css";

function AddMovie() {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  // Handle adding a new movie
  const handleAddMovie = () => {
    // Validate that all fields are filled
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);
      // Clear the form after adding the movie
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
      });
    } else {
      alert("Please fill in all fields to add a new movie.");
    }
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />

      {/* Add a form to input details of the new movie */}
      <div className="add-movie-form">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
}

export default AddMovie;

//end
