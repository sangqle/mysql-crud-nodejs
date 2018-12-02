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
import { navigate, Link } from "@reach/router";
import "./login.css";

import { apiLocalhost } from "../env/api";
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

  componentWillMount() {
    localStorage.getItem("user") && navigate("/");
    localStorage.getItem("admin") && navigate("/admin");
  }

  handleSubmit = e => {
    e.preventDefault();
    const payload = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    fetch(`http://localhost:8080/user/login`, {
      method: "post",
      body: payload,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })

      .then(user => {
        console.log(user);
        if (!user.error) {
          localStorage.setItem("token", user.token);
          if (user.role === "admin") {
            localStorage.setItem("adminName", user.name);
            localStorage.setItem("admin", true);
            navigate("/admin");
          } else {
            localStorage.setItem("user", true);
            localStorage.setItem("userName", user.name);
            navigate("/");
          }
        } else {
          console.log("Handle Error Login Here");
          navigate("/login");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <button className="btn btn-primary">
          <Link className="btn-back" to="/">
            <i class="fe fe-arrow-left mr-2" />
            Back
          </Link>
        </button>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <div class="container">
              <div class="row">
                <div class="col col-login mx-auto">
                  <form class="card" action="" method="post">
                    <div class="card-body p-6">
                      <div class="card-title">Login to your account</div>
                      <div class="form-group">
                        <label class="form-label">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          onChange={this.handleChange}
                          type="password"
                          name="password"
                          placeholder="password"
                        />
                      </div>

                      <div class="form-footer">
                        <button type="submit" class="btn btn-primary btn-block">
                          Sign in
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
