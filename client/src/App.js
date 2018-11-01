import React from "react";

import { Container } from "reactstrap";

import "./app.scss";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>Moive Theater</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </Container>
    );
  }
}

export default App;
