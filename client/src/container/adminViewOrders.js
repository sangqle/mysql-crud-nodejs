import React, { Component } from "react";
import { apiLocalhost } from "../env/api";
import "./adminViewOrders.css";

export default class adminViewOrders extends Component {
  state = {
    ordered: null
  };

  componentDidMount() {
    fetch(`${apiLocalhost}/admin/get/all/order`, {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": localStorage.getItem("token")
      },

      credentials: "include" // send cookies, even in CORS
    })
      .then(res => res.json())
      .then(result => this.setState({ ordered: result.order }))
      .catch(err => console.log(err));
  }
  render() {
    const { ordered } = this.state;
    return (
      <div className="container">
        <div className="grid-container">
          <div className="item">IdOder</div>
          <div className="item">Name</div>
          <div className="item">Movie</div>
          <div className="item">Date</div>
          <div className="item">Time</div>
          <div className="item">Seat</div>
          <div className="item">Price</div>
          <div className="item">Status</div>
          <div className="item">Time Order</div>
        </div>
        <div className="order-container">
          {ordered &&
            ordered.map(val => {
              return (
                <div className="order grid-container">
                  <p className="order col-sm">{val.id_order}</p>
                  <p className="order col-sm">{val.name}</p>
                  <p className="order col-sm">{val.title}</p>
                  <p className="order col-sm">{val.date}</p>
                  <p className="order col-sm">{val.time}</p>
                  <p className="order col-sm">{val.id_seat}</p>
                  <p className="order col-sm">{val.price}</p>
                  <p className="order col-sm">{val.status}</p>
                  <p className="order col-sm">{val.time_order}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
