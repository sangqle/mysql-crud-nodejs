import React from "react";

import { Container, Row, Col } from "reactstrap";
import Slide from "./container/slide";
import Card from "./container/card";
import "./app.css";

class App extends React.Component {
  state = {
    movies: null
  };

  componentDidMount() {
    fetch("http://localhost:8080/user/get/all/movie")
      .then(data => data.json())
      .then(result =>
        this.setState({
          movies: result.data
        })
      );
  }

  render() {
    const { movies } = this.state;
    return (
      <Container>
        <Slide />
        <Row>
          {movies.map((movie, i) => {
            <Col xs="6" sm="4" key={i}>
              <Card
                imageURL={movie.imageURL}
                title={movie.title}
                director={movie.director}
                length={movie.length}
              />
            </Col>;
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
