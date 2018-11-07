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

  viewOrder = e => {
    e.preventDefault();
    return fetch("http://localhost:8080/admin/get/all/order", {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNSwibmFtZSI6Ik5ndXllbiBQaHVvYyBUaGFuaCIsImVtYWlsIjoidGhhbmhuZ3V5ZW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTQxNDAzNTI1fQ.SaybRll6NXcl0uRZJoYdT23rmXL27PKcEIXxyaqQhz4"
      },

      credentials: "same-origin", // send cookies
      credentials: "include" // send cookies, even in CORS
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  render() {
    const { movies, search } = this.state;
    return (
      <Container>
        <h1>Admin </h1>
        {this.state.auth ? (
          <React.Fragment>
            <Button>{localStorage.getItem("adminName")}</Button>
            <Button onClick={this.viewOrder}>View order</Button>
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
