import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./card.css";

const Movie = props => {
  return (
    <div className="move">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.director}</CardSubtitle>
          <CardText>{props.length}</CardText>
          <Button>Book !</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
