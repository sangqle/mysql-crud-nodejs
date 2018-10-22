import React from "react";

import { Container, Row, Col } from "reactstrap";
import Slide from "./container/slide";
import Card from "./container/card";
import "./app.css";

class App extends React.Component {
  state = {
    title: "",
    director: "",
    imgURL: "",
    lenght: null
  };

  componentDidMount() {
    fetch("")
      .then(result => result.json())
      .then(data => {});
  }

  render() {
    return (
      <Container>
        <Slide />
        <Row>
          <Col xs="6" sm="4">
            <Card />
          </Col>
          <Col xs="6" sm="4">
            <Card />
          </Col>
          <Col sm="4">
            <Card />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
