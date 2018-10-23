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
          height="60%"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Director: {props.director}</CardSubtitle>
          <CardText>Length: {props.length}</CardText>
          <Button className="btn btn-success">Book now!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
