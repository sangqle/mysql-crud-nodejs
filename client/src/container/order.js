// import React from "react";
// import { FormGroup, Label, Input, Container, Button, Form } from "reactstrap";
import { navigate } from "@reach/router";
// import "./order.css";
import { apiLocalhost } from "../env/api";

// class Order extends React.Component {
//   state = {
//     showDay: null,
//     id_day: null,
//     times: null,
//     id_time: null,
//     seated: null,
//     seatWanted: []
//   };

//   componentDidMount() {
//     fetch(`${apiLocalhost}/user/get/date/${this.props.id_movie}`, {
//       method: "get",

//       headers: {
//         Accept: "application/json",
//         "x-auth": localStorage.getItem("token")
//       }
//     })
//       .then(res => res.json())
//       .then(data => this.setState({ showDay: data.dates }));
//   }

//   handleSelectDay = e => {
//     this.setState({ id_day: e.target.value });
//     fetch(
//       `${apiLocalhost}/user/get/time/${this.props.id_movie}/${
//         e.target.value
//       }`,
//       {
//         method: "get",
//         headers: {
//           Accept: "application/json",
//           "x-auth": localStorage.getItem("token")
//         }
//       }
//     )
//       .then(res => res.json())
//       .then(data => this.setState({ times: data.times }));
//   };

//   hadleSelectTime = e => {
//     this.setState({ id_time: e.target.value });
//     const { id_day } = this.state;
//     fetch(
//       `${apiLocalhost}/user/get/seated/${
//         this.props.id_movie
//       }/${id_day}/${e.target.value}`,
//       {
//         method: "get",
//         headers: {
//           Accept: "application/json",
//           "x-auth": localStorage.getItem("token")
//         }
//       }
//     )
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ seated: data.seated });
//         console.log(data);
//       });
//   };

//   getCheck = e => {
//     this.setState({ seatWanted: [...this.state.seatWanted, [e.target.name]] });
//   };

//   sendOrder = e => {
//     const { seatWanted } = this.state;
//     const seats = seatWanted
//       .flat()
//       .map(v => parseInt(v) + 1); /* Really powerful features */

//     console.log(seats);
//     e.preventDefault();
//     fetch(`${apiLocalhost}/user/booking`, {
//       method: "post",
//       body: JSON.stringify({
//         id_movie: this.props.id_movie,
//         id_date: this.state.id_day,
//         id_time: this.state.id_time,
//         id_seat: seats
//       }),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "x-auth": localStorage.getItem("token")
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.order);
//         const id_order = data.order.map(value => value.id_order).join("-");
//         console.log(id_order);
//         navigate(`/order/success/${id_order}`);
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     const { showDay, times, seated, seatWanted } = this.state;
//     console.log(seatWanted);
//     return (
//       <Container>
//         <FormGroup>
//           <Label for="exampleSelect">Select Day</Label>
//           <Input
//             type="select"
//             name="select"
//             id="exampleSelect"
//             onChange={this.handleSelectDay}
//           >
//             <option> </option>
//             {showDay &&
//               showDay.map((day, i) => (
//                 <option key={i} value={day.id_date}>
//                   {day.date}
//                   /11/2018
//                 </option>
//               ))}
//           </Input>
//         </FormGroup>
//         {times && (
//           <FormGroup>
//             <Label for="exampleSelect">Select Time</Label>
//             <Input
//               type="select"
//               name="select"
//               id="exampleSelect"
//               onChange={this.hadleSelectTime}
//             >
//               <option> </option>
//               {times &&
//                 times.map((time, i) => (
//                   <option key={i} value={time.id_time}>
//                     {time.time} minutes
//                   </option>
//                 ))}
//             </Input>
//           </FormGroup>
//         )}
//         <Form onSubmit={this.sendOrder}>
//           <FormGroup check>
//             {seated &&
//               seats.map((seat, i) => {
//                 const arraySeated = seated.map(item => item.id_seat);
//                 // console.log(arraySeated);
//                 return arraySeated.indexOf(seat) !== -1 ? (
//                   <Label check onChange={this.getCheck} value={seat}>
//                     <Input
//                       color="pimary"
//                       name={i}
//                       type="checkbox"
//                       id="checkbox2"
//                       disabled
//                     />{" "}
//                     {seat}
//                   </Label>
//                 ) : (
//                   <Label check onChange={this.getCheck} value={seat}>
//                     <Input name={i} type="checkbox" id="checkbox2" /> {seat}
//                   </Label>
//                 );
//               })}
//           </FormGroup>
//           <Button>Order</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default Order;

import React, { Component } from "react";
// import logo from './logo.svg'
import "./order.css";

class Order extends Component {
  state = {
    showDay: null,
    id_day: null,
    times: null,
    id_time: null,
    seated: null,
    seatWanted: []
  };

  componentDidMount() {
    fetch(`${apiLocalhost}/user/get/date/${this.props.id_movie}`, {
      method: "get",

      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ showDay: data.dates }));
  }
  initPaymentRequest = () => {
    let networks = ["mastercard", "visa"];
    let types = ["debit", "credit", "prepaid"];
    let supportedInstruments = [
      {
        supportedMethods: "basic-card",
        data: { supportedNetworks: networks, supportedTypes: types }
      }
    ];

    let details = {
      total: {
        label: "Venom Ticket",
        amount: { currency: "USD", value: "10.00" }
      },
      displayItems: [
        {
          label: "#1 Ticket",
          amount: { currency: "USD", value: "10.00" }
        }
      ]
    };
    return new window.PaymentRequest(supportedInstruments, details);
  };

  handleSelectDay = e => {
    this.setState({ id_day: e.target.value });
    fetch(
      `${apiLocalhost}/user/get/time/${this.props.id_movie}/${e.target.value}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "x-auth": localStorage.getItem("token")
        }
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ times: data.times }));
  };

  hadleSelectTime = e => {
    this.setState({ id_time: e.target.value });
    const { id_day } = this.state;
    fetch(
      `${apiLocalhost}/user/get/seated/${this.props.id_movie}/${id_day}/${
        e.target.value
      }`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "x-auth": localStorage.getItem("token")
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ seated: data.seated });
        console.log(data);
      });
  };

  getCheck = e => {
    this.setState({ seatWanted: [...this.state.seatWanted, [e.target.name]] });
  };

  sendOrder = () => {
    const { seatWanted } = this.state;
    const seats = seatWanted
      .flat()
      .map(v => parseInt(v) + 1); /* Really powerful features */

    console.log(seats);
    fetch(`${apiLocalhost}/user/booking`, {
      method: "post",
      body: JSON.stringify({
        id_movie: this.props.id_movie,
        id_date: this.state.id_day,
        id_time: this.state.id_time,
        id_seat: seats
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.order);
        const id_order = data.order.map(value => value.id_order).join("-");
        console.log(id_order);
        navigate(`/order/success/${id_order}`);
      })
      .catch(err => console.log(err));
  };

  handleOrder = e => {
    if (window.PaymentRequest) {
      let request = this.initPaymentRequest();
      request
        .show()
        .then(result => {
          console.log(result);
          this.sendOrder();
          return result.complete("success");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("This browser does not support web payments");
    }
  };
  render() {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const { showDay, times, seated, seatWanted } = this.state;

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
        <div className="container" style={{ marginTop: 0 }}>
          <div className="row">
            <div className="col-md-6 offset-md-3 mr">
              <div className="card card-aside">
                <a
                  className="card-aside-column"
                  style={{
                    backgroundImage:
                      "url(https://www.movienewsletters.net/photos/VNM_247729R1.jpg)"
                  }}
                >
                  {""}
                </a>
                <div className="card-body d-flex flex-column">
                  <h4>Venom (2018)</h4>
                  <div className="text-muted ">
                    When Eddie Brock acquires the powers of a symbiote, he will
                    have to release his alter-ego "Venom" to save his life.
                  </div>
                  <div className="mt">
                    <button type="button" className="btn  btn-pill btn-info">
                      <i className="fe fe-message-circle mr-2" />
                      View Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card-play">
                <div className="form-group">
                  <h4>Select date play</h4>
                  <div className="selectgroup w-100">
                    {showDay &&
                      showDay.map((day, i) => (
                        <label key={i} className="selectgroup-item">
                          <input
                            type="radio"
                            name="id_date"
                            value={day.id_date}
                            className="selectgroup-input"
                            onChange={this.handleSelectDay}
                          />
                          <span className="selectgroup-button">
                            {day.date}/11
                          </span>
                        </label>
                      ))}
                  </div>
                </div>
                {times && (
                  <>
                    <h4>Selected schedule</h4>
                    <div className="selectgroup selectgroup-pills">
                      {times.map((time, i) => (
                        <label key={i} className="selectgroup-item">
                          <input
                            type="radio"
                            name="id_time"
                            value={time.id_time}
                            className="selectgroup-input"
                            onChange={this.hadleSelectTime}
                          />
                          <span className="selectgroup-button selectgroup-button-icon p-10">
                            <i className="fe fe-sun icon-r" />
                            {time.time}
                          </span>
                        </label>
                      ))}
                    </div>
                  </>
                )}
                <div className="form-group">
                  {seated && (
                    <>
                      <h4>Select seat</h4>
                      <div className="row">
                        <div className="col-8 col-md-8">
                          <div className="row gutters-xs">
                            {seats.map((seat, i) => {
                              const arraySeated = seated.map(
                                item => item.id_seat
                              );
                              return arraySeated.indexOf(seat) !== -1 ? (
                                <div key={i} className="col-auto">
                                  <label className="colorinput">
                                    <input
                                      name={i}
                                      type="checkbox"
                                      onChange={this.getCheck}
                                      value={seat}
                                      className="colorinput-input"
                                      disabled
                                    />
                                    <span className="colorinput-color bg-orange" />
                                  </label>
                                </div>
                              ) : (
                                <div key={i} className="col-auto">
                                  <label className="colorinput">
                                    <input
                                      name={i}
                                      type="checkbox"
                                      className="colorinput-input"
                                      onChange={this.getCheck}
                                      value={seat}
                                    />
                                    <span className="colorinput-color bg-azure" />
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="row gutters-xs">
                            <div className="col-auto">
                              <label className="colorinput ">
                                <span className="colorinput-color bg-orange" />
                                <span className="mr-seat-info">Reserved</span>
                              </label>
                            </div>
                          </div>
                          <div className="row gutters-xs">
                            <div className="col-auto">
                              <label className="colorinput ">
                                <span className="colorinput-color bg-azure" />
                                <span className="mr-seat-info">Free</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={this.handleOrder}
                type="button"
                className="btn btn-indigo btn-block mb"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
