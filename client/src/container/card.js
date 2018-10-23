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
<<<<<<< HEAD
        <CardImg top width="100%" src="https://lottecinemavn.com/Lotte/files/44/4427ab16-6b3e-45c8-9dee-58c8ad84304b.png" alt="Card image cap" />
=======
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
>>>>>>> e5d5a3b3b41222339e4579216b44ee77f1bfb579
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
