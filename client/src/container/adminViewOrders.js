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
        <div className="nav-bar grid-container">
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
            ordered.sort((a, b) => {
              let nameA = a.name.toUpperCase();
              let nameB = b.name.toUpperCase();
              return nameA < nameB ? -1 : nameA > nameB ? 1 : 0; 
            }).map(val => {
              return (
                <div className="order grid-container">
                  <div className="order col-sm">{val.id_order}</div>
                  <div className="order col-sm">{val.name}</div>
                  <div className="order col-sm">{val.title}</div>
                  <div className="order col-sm">{val.date}</div>
                  <div className="order col-sm">{val.time}</div>
                  <div className="order col-sm">{val.id_seat}</div>
                  <div className="order col-sm">{val.price}</div>
                  <div className="order col-sm">{val.status}</div>
                  <div className="order col-sm">{val.time_order}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
