import React from "react";
import { Button, Media, Col } from "reactstrap";
import "./movie.css";

const Moives = ({ title, image, length, director, price, released, description }) => (
  <React.Fragment>
    <Col xs="10">
      <Media>
        <Media left href="#">
          <img src={image} alt={title} />
        </Media>
        <Media body>
          <Media heading>{title}</Media>
          <p>
            <strong>Director: </strong> {director}
          </p>
          <p>
            <strong>Length: </strong>
            {length} minutes
          </p>
          <p>
            <strong>Reased: </strong>
            {released}
          </p>
          <p>
            <strong>Price: </strong>
            {price},000 VND
          </p>
          <p><strong>Description: </strong>{description}</p>
        </Media>
      </Media>
    </Col>
    <Col xs="2">
      <Button className="btn btn-danger">Delete</Button>
    </Col>
  </React.Fragment>
);

export default Moives;
