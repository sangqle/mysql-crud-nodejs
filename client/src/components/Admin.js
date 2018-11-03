import React, { Component } from "react";
import { Container } from "reactstrap";

export default class Admin extends Component {
  logOut = () => {
    auth.logout(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <Container>
        <Button onClick={this.logOut}>Log Out</Button>
        <h1>Admin</h1>
      </Container>
    );
  }
}
