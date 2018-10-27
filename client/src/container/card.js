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
import ModalNewTask from "./order";

const Movie = ({ image, title, director, length, modal, onToggle }) => {
  return (
    <div className="move">
      <Card>
        <CardImg
          top
          width="100%"
          height="60%"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Director: {director}</CardSubtitle>
          <CardText>Length: {length}</CardText>
          <Button className="btn btn-danger" onClick={onToggle}>
            Book now!
          </Button>
        </CardBody>
      </Card>
      <ModalNewTask modal={modal} onToggle={onToggle} />
    </div>
  );
};

export default Movie;