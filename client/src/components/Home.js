import React, { Component } from "react";
import Slide from "../container/slide";
import Card from "../container/card";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "@reach/router";

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

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("user");
  };

  render() {
    const { movies } = this.state;
    const isAuth = localStorage.getItem("user");
    console.log(isAuth);
    return (
      <Container>
        {isAuth ? (
          <Button onClick={this.handleLogout}>LOG OUT</Button>
        ) : (
          <React.Fragment>
            <nav>
              |<Link to="signUp">SIGN UP</Link> |<Link to="login">LOG IN</Link>
            </nav>
          </React.Fragment>
        )}

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
