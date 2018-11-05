import React from "react";
import Card from "./card";
import { Col } from "reactstrap";

const movieCard = ({ movies, search, onToggle }) => {
  return (
    movies &&
    movies
      .filter(movie => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
      .map((movie, i) => {
        console.table(movie);
        return (
          <Col sm="4">
            <Card
              index={i}
              image={movie.image}
              title={movie.title}
              director={movie.director}
              length={movie.length}
              onToggle={onToggle}
              id={movie.id_movie}
            />
          </Col>
        );
      })
  );
};

export default movieCard;
