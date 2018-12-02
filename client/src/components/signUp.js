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
import { Link, navigate } from "@reach/router";
import { apiLocalhost } from "../env/api";

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

  onClick = e => {
    e.preventDefault();
    fetch(
      `https://us-central1-liuliu-d7864.cloudfunctions.net/app/user/create/account`,
      {
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
        }
      }
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        navigate("/login");
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-primary">
          <Link to="/">
            <i class="fe fe-arrow-left mr-2" />
            Back
          </Link>
        </button>
        <div>
          <Form onSubmit={this.onClick}>
            <div class="container">
              <div class="row">
                <div class="col col-login mx-auto">
                  <form class="card" action="" method="post">
                    <div class="card-body p-6">
                      <div class="card-title">Sign Up</div>
                      <div class="form-group">
                        <label class="form-label">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Enter name"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input
                          type="text"
                          class="form-control"
                          name="sdt"
                          aria-describedby="emailHelp"
                          placeholder="Enter phone"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          onChange={this.handleInputChange}
                          type="password"
                          name="password"
                          placeholder="password"
                        />
                      </div>

                      <div class="form-footer">
                        <button type="submit" class="btn btn-primary btn-block">
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
