import React, { Component } from "react";
import { Container, Button, Row } from "reactstrap";
import { Redirect, navigate } from "@reach/router";
import Movie from "../container/movie";

import "./admin.css";
export default class Admin extends Component {
  state = {
    auth: false,
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

  componentWillMount() {
    const isLogin = localStorage.getItem("admin");
    console.log(isLogin);
    this.setState({
      auth: isLogin
    });
  }

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("admin");
    console.log(localStorage.getItem("admin"));
    navigate("/");
  };

  render() {
    const { movies } = this.state;
    return (
      <Container>
        <h1>Admin </h1>
        {this.state.auth ? (
          <React.Fragment>
            <Button onClick={this.handleLogout}>Logout</Button>
            <div className="input">
              <input type="text" placeholder="Search ..." />
              <Button className="btn btn-success">+ ADD MOIVE</Button>
            </div>
            <Row>
              {movies &&
                movies.map((movie, i) => (
                  <Movie
                    image={movie.image}
                    title={movie.title}
                    director={movie.director}
                    length={movie.length}
                  />
                ))}
            </Row>
          </React.Fragment>
        ) : (
          <Redirect to="login" noThrow />
        )}
      </Container>
    );
  }
}
