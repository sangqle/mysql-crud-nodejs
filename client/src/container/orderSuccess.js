import React, { Component } from "react";
import { Container } from "reactstrap";
import { QRCode } from "react-qr-svg";

export default class orderSuccess extends Component {
  render() {
    console.log(this.props.id_order);
    const arrId = this.props.id_order.split("-");

    return (
      <Container>
        {arrId.map(id => (
          <React.Fragment>
            <QRCode
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"Q"}
              style={{ width: 256, margin: 10 }}
              value={id}
            />
          </React.Fragment>
        ))}
      </Container>
    );
  }
}
