import React, { Component, lazy, Suspense } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, navigate } from "@reach/router";
import MovieCards from "../container/movieCards";
import "./home.css";

const Slide = lazy(() => import("../container/slide"));
export default class Home extends Component {
  state = {
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

  handleOnChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("user");
    console.log(localStorage.getItem("user"));
    navigate("/");
  };

  onToggle = e => {
    e.preventDefault();
    alert(this.state.movies.id);
  };

  render() {
    const { movies, search } = this.state;
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
        <Suspense fallback={<div>Loading...</div>}>
          <Slide />
        </Suspense>
        <input
          type="text"
          placeholder="Search ..."
          onChange={this.handleOnChange}
        />
        <Row>
          <MovieCards
            movies={movies}
            search={search}
            onToggle={this.onToggle}
          />
        </Row>
      </Container>
    );
  }
}
