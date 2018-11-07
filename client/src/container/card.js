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
import { Link } from "@reach/router";

const onToggle = e => {
  e.preventDefault();
  alert("You are not login yet !!!");
};

const Movie = ({ image, title, director, length, id }) => {
  const isLoged = localStorage.getItem("token");

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
          {isLoged !== null ? (
            <Button className="bnt btn-info">
              <Link className="link-btn" to={`/order/${id}`}>
                Book now
              </Link>
            </Button>
          ) : (
            <Button className="btn btn-info" onClick={onToggle}>
              Book now!
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
