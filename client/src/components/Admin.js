import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Redirect, navigate } from "@reach/router";

export default class Admin extends Component {
  state = {
    auth: false
  };

  componentWillMount() {
    const isLogin = localStorage.getItem("admin");
    console.log(isLogin);
    this.setState({
      auth: isLogin
    });
  }

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("admin");
    console.log(localStorage.getItem("admin"));
    navigate("/");
  };

  render() {
    return (
      <Container>
        <h1>Admin</h1>
        {this.state.auth ? (
          <React.Fragment>
            <h1>Da dang nhap</h1>
            <Button onClick={this.handleLogout}>Logout</Button>
          </React.Fragment>
        ) : (
          <Redirect to="login" noThrow />
        )}
      </Container>
    );
  }
}
