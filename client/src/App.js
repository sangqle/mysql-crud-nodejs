import React from "react";

import { Container, Row, Col } from "reactstrap";
import Slide from "./components/slide";
import LoginForm from "./components/Login";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Slide />
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-6 .col-sm-4</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
