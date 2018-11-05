import React, { Component } from "react";
import { Container, Button, Row } from "reactstrap";
import { Redirect, navigate } from "@reach/router";
import MovieList from "../container/movieList";

import "./admin.css";
export default class Admin extends Component {
  state = {
    auth: false,
    movies: null,
    search: ""
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

  handleOnChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
    console.log(this.state.search);
  };

  render() {
    const { movies, search } = this.state;
    return (
      <Container>
        <h1>Admin </h1>
        {this.state.auth ? (
          <React.Fragment>
            <Button onClick={this.handleLogout}>Logout</Button>
            <div className="input">
              <input
                type="text"
                placeholder="Search ..."
                onChange={this.handleOnChange}
              />
              <Button className="btn btn-success">+ ADD MOIVE</Button>
            </div>
            <Row>
              <MovieList movies={movies} search={search} />
            </Row>
          </React.Fragment>
        ) : (
          <Redirect to="login" noThrow />
        )}
      </Container>
    );
  }
}
