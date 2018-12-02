import React, { Component } from "react";
import { Container } from "reactstrap";
import QrReader from "react-qr-reader";
import { navigate } from "@reach/router";

export default class Checkin extends Component {
  handleScan = data => {
    if (data) {
      navigate(`checkin/${data}`);
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{
            background: "#039be5",
            boxShadow:
              "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
            color: "#ffffff"
          }}
        >
          <a class="navbar-brand">Movie App</a>
        </nav>
        <Container style={{ textAlign: "center" }}>
          <h2>Checkin in the cinema</h2>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50
              }}
            >
              <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: 400, height: 400 }}
              />
            </div>
          </div>
        </Container>
      </>
    );
  }
}
