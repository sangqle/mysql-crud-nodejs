import React from "react";

import { Container } from "reactstrap";

import "./app.scss";
import Loader from "react-loaders";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import signUp from "./components/signUp";
import Home from "./components/Home";

const renderLoader = () => {
  return <Loader type="pacman" active={true} />;
};

class App extends React.Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signUp">SignUp</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={signUp} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
