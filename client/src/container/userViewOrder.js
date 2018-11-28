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
        {ordered &&
          ordered.map(val => {
            return (
              <div className="infOder">
                <p>{val.name}</p>
                <p>{val.title}</p>
                <p>{val.date}</p>
                <p>{val.time}</p>
                <p>{val.price}</p>
                <p>{val.seat}</p>
                <p>{val.status}</p>
                <p>{val.time_order}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
