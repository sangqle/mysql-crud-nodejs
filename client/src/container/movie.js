import React from "react";
import { Button, Media, Col, Form } from "reactstrap";
import "./movie.css";
import { apiLocalhost } from "../env/api";
import { Link } from "@reach/router";
class Moives extends React.Component {
  onDelete = e => {
    e.preventDefault();
    fetch(`${apiLocalhost}/admin/delete/movie/${this.props.id}`, {
      method: "delete",

      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token")
      },

      credentials: "include" // send cookies, even in CORS
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  onEdit = e => {
    e.preventDefault();
  };

  render() {
    const {
      title,
      image,
      length,
      director,
      price,
      released,
      description
    } = this.props;
    return (
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
                {price}
                ,000 VND
              </p>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
            </Media>
          </Media>
        </Col>
        <Col xs="2">
          <Button className="btn btn-danger" onClick={this.onDelete}>
            Delete
          </Button>
          <Button className="btn btn-info" onClick={this.onEdit}>
            <Link
              className="link-btn"
              to={`/admin/edit_movie/${this.props.id}`}
            >
              Edit
            </Link>
          </Button>
        </Col>
      </React.Fragment>
    );
  }
}

export default Moives;
