import React, { Component } from "react";
import { Container, Button, Row } from "reactstrap";
import { Redirect, navigate, Link } from "@reach/router";
import MovieList from "../container/movieList";
import {apiLocalhost} from "../env/api";

import "./admin.css";
export default class Admin extends Component {
  state = {
    auth: false,
    movies: null,
    search: ""
  };

  componentDidMount() {
    fetch(`${apiLocalhost}/user/get/all/movie`)
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
    localStorage.removeItem("token");
    navigate("/");
  };

  handleOnChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
    console.log(this.state.search);
  };

  viewOrder = e => {
    e.preventDefault();
    return fetch(`${apiLocalhost}/admin/get/all/order`, {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": localStorage.getItem("token")
      },

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
              <Button className="btn btn-success">
                <Link to="/admin/add_movie">+ ADD MOIVE</Link>
              </Button>
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
