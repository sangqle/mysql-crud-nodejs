import React, { Component } from "react";
import { Container } from "reactstrap";
import { QRCode } from "react-qr-svg";

export default class orderSuccess extends Component {
  render() {
    const arrId = this.props.id_order.split("-");

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

          <div>
            <span style={{ marginRight: 10 }}>
              {localStorage.getItem("userName")}
            </span>
          </div>
        </nav>
        <Container style={{ textAlign: "center" }}>
          {arrId.map(id => (
            <>
              <h3>Ordered Success</h3>
              <QRCode
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"Q"}
                style={{
                  padding: 10,
                  background: "#ffffff",
                  width: 256,
                  margin: 10,
                  boxShadow:
                    "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)"
                }}
                value={id}
              />
              <p>* Use this QR Code to verify in the cinema</p>
              <h4>Thank you!</h4>
            </>
          ))}
        </Container>
      </>
    );
  }
}
