import React from "react";
import Movie from "./movie";

const MovieList = ({ movies, search }) => {
  return (
    movies &&
    movies
      .filter(movie => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
      .map((movie, i) => (
        <Movie
          index={i}
          image={movie.image}
          title={movie.title}
          director={movie.director}
          length={movie.length}
          released={movie.released}
          price={movie.price}
          description={movie.discription}
          id={movie.id_movie}
        />
      ))
  );
};

export default MovieList;
