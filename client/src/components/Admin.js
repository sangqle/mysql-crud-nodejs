import React, { Component } from "react";
import { Container, Button, Row } from "reactstrap";
import { Redirect, navigate, Link } from "@reach/router";
import MovieList from "../container/movieList";
import { apiLocalhost } from "../env/api";

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

  render() {
    const { movies, search } = this.state;
    return (
      <Container>
        <h1>Admin </h1>
        {this.state.auth ? (
          <React.Fragment>
            <Button>{localStorage.getItem("adminName")}</Button>
            <Button onClick={this.viewOrder}>
              <Link to="/admin/view_ordered">View order</Link>
            </Button>
            <Button onClick={this.handleLogout}>Logout</Button>
            <div className="input">
              <input
                type="text"
                placeholder="Search ..."
                className="search-box"
                onChange={this.handleOnChange}
              />
              <Button className="btn btn-success">
                <Link to="/admin/add_movie">
                  <i className="fe fe-plus-circle icon-r" /> ADD MOIVE
                </Link>
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
