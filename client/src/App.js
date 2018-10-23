import React from "react";

import { Container, Row, Col } from "reactstrap";
import Slide from "./container/slide";
import Card from "./container/card";
import "./app.scss";
import Loader from "react-loaders";
const renderLoader = () => {
  return <Loader type="pacman" active={true} />;
};

class App extends React.Component {
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
          {movies /* this is  gonna checked first */ &&
            movies.map((movie, i) => (
              <Col sm="4" key={i}>
                <Card
                  image={movie.image}
                  title={movie.title}
                  director={movie.director}
                  length={movie.length}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default App;
