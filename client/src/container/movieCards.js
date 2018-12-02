import React from "react";
import Card from "./card";
import { Col } from "reactstrap";

const movieCard = ({ movies, search }) => {
  return (
    movies &&
    movies
      .filter(movie => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
      .map((movie, i) => {
        // console.table(movie);
        return (
          <Col key={i} sm="4">
            <Card
              index={i}
              image={movie.image}
              title={movie.title}
              director={movie.director}
              length={movie.length}
              id={movie.id_movie}
            />
          </Col>
        );
      })
  );
};

export default movieCard;
