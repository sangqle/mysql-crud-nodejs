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
      .map((movie, i) => (
        <Col>
          <Card
            index={i}
            image={movie.image}
            title={movie.title}
            director={movie.director}
            length={movie.length}
          />
        </Col>
      ))
  );
};

export default movieCard;
