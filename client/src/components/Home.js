import React, { Component } from "react";
import Slide from "../container/slide";
import Card from "../container/card";
import { Container, Row, Col } from "reactstrap";

export default class Home extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    fetch("http://localhost:8080/user/get/all/movie")
      .then(data => data.json())
      .then(result => {
        console.log(result);
        this.setState({
          movies: result.movies
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container>
        <Slide />
        <Row>
          {movies &&
            movies.map((movie, i) => (
              <Col sm="4" key={i}>
                <Card
                  image={movie.image}
                  title={movie.title}
                  director={movie.director}
                  length={movie.length}
                  onToggle={this.onToggle}
                  header={movie.title}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
