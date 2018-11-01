// eslint-disable-next-line
import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import "./login.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = () => {
    return fetch("http://localhost:8080/user/login", {
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      credentials: "include" // send cookies, even in CORS
    })
      .then(res => {
        return res.json();
      })

      .then(
        data => {
          console.log(data);
          !data.error && this.props.history.push("/home");
        },

        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <Container>
        <div className="App">
          <h2>Sign In</h2>

          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button onClick={this.onClick}>Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default LoginForm;
