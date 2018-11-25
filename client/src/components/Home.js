import React, { Component, lazy, Suspense } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, navigate } from "@reach/router";
import MovieCards from "../container/movieCards";
import "./home.css";
import {apiLocalhost} from "../env/api"
//import { userBooking } from "../../../server/src/controller/user";

const Slide = lazy(() => import("../container/slide"));
export default class Home extends Component {
  state = {
    movies: null,
    search: ""
  };

  componentDidMount() {
    
    //fetch(`${apiLocalhost}/user/get/all/movie`)\
    fetch(`https://mntdl35w9i.execute-api.us-east-1.amazonaws.com/dev/get/movies`)
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
    localStorage.removeItem("token");
    navigate("/");
  };

  render() {
    const { movies, search } = this.state;
    const isAuth = localStorage.getItem("user");
    console.log(isAuth);
    return (
      <Container>
        {isAuth ? (
          <div>
            <Button>{localStorage.getItem("userName")}</Button>
            <Button onClick={this.handleLogout}>LOG OUT</Button>
          </div>
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
          <MovieCards movies={movies} search={search} />
        </Row>
      </Container>
    );
  }
}
