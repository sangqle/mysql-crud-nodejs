import React, { Component, lazy, Suspense } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, navigate } from "@reach/router";
import MovieCards from "../container/movieCards";
import Loading from "../container/loading";
import "./home.css";
import { apiLocalhost } from "../env/api";
//import { userBooking } from "../../../server/src/controller/user";

const Slide = lazy(() => import("../container/slide"));
export default class Home extends Component {
  state = {
    movies: null,
    search: ""
  };

  componentDidMount() {
    fetch(`${apiLocalhost}/user/get/all/movie`)
      //fetch(`https://us-central1-liuliu-d7864.cloudfunctions.net/app/movies`)
      .then(data => data.json())
      .then(result => {
        // console.log(result);
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
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{
            background: "#039be5",
            boxShadow:
              "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
            color: "#ffffff"
          }}
        >
          <a class="navbar-brand">Movie App</a>

          <div>
            {isAuth ? (
              <>
                <span style={{ marginRight: 10 }}>
                  <Link className="user" to="/user">
                    {localStorage.getItem("userName")}
                  </Link>
                </span>
                <Button size="sm" onClick={this.handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <button className="btn btn-pill btn-success">
                  <Link className="btn-home" to="signUp">
                    Sign up
                  </Link>
                </button>{" "}
                <button className="btn btn-pill btn-danger">
                  <Link className="btn-home" to="login">
                    Log in
                  </Link>
                </button>
              </>
            )}
          </div>
        </nav>
        <Container>
          <div className="input-icon" style={{ marginBottom: 20 }}>
            <span className="input-icon-addon">
              <i className="fe fe-search" />
            </span>
            <input
              type="text"
              onChange={this.handleOnChange}
              className="form-control"
              placeholder="Search movie..."
            />
          </div>

          <Row>
            <MovieCards movies={movies} search={search} />
          </Row>
        </Container>
      </>
    );
  }
}
