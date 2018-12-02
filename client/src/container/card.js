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
import swal from "sweetalert";

const onToggle = e => {
  e.preventDefault();
  swal({
    title: "You're not logined!",
    icon: "warning"
  });
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
            <button className="btn btn-info">
              <Link className="btn-order" to={`/order/${id}`}>
                Book now!
              </Link>
            </button>
          ) : (
            <button className="btn btn-info" onClick={onToggle}>
              Book now!
            </button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
