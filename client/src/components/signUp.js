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
import "./signUp.css";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      sdt: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClick = () => {
    fetch("http://localhost:8080/user/create/account", {
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        sdt: this.state.sdt
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
      .then(data => console.log(data));
  };

  render() {
    return (
      <Container>
        <div className="button">
          <Button className="btn btn-success">
            <Link to="/login">Login</Link>
          </Button>
        </div>

        <div className="App">
          <h2>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  onChange={this.handleInputChange}
                  type="email"
                  name="name"
                  placeholder="Your name ..."
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  onChange={this.handleInputChange}
                  type="text"
                  name="sdt"
                  placeholder="........."
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  onChange={this.handleInputChange}
                  type="email"
                  name="email"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  onChange={this.handleInputChange}
                  type="password"
                  name="password"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button
              onClick={this.onClick}
              className="btn btn-block btn-outline-danger"
            >
              Sign up
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default LoginForm;
