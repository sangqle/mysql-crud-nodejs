import React from "react";
import { FormGroup, Label, Input, Container, Button, Form } from "reactstrap";

class Order extends React.Component {
  state = {
    showDay: null,
    times: null,
    days: null,
    seated: null,
    seatWanted: []
  };

  componentDidMount() {
    fetch(`http://localhost:8080/user/get/date/${this.props.order_id}`, {
      method: "get",

      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ showDay: data.dates }));
  }

  handleOnChange = e => {
    this.setState({ days: e.target.value });
    fetch(
      `http://localhost:8080/user/get/time/${this.props.order_id}/${
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
      .then(data => this.setState({ times: data.times }));
  };

  getSeat = e => {
    e.preventDefault();
    return fetch("http://localhost:8080/user/booking", {
      method: "post",
      body: JSON.stringify({
        id_movie: this.props.order_id,
        id_date: this.state.showDay,
        id_time: this.state.times,
        id_seat: this.state.seatWanted
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": localStorage.getItem("token")
      },

      credentials: "include" // send cookies, even in CORS
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  getOrder = e => {
    this.setState({
      seatWanted: [...this.state.seatWanted, [e.target.name]]
    });
  };

  setFinal = e => {
    fetch(`http://localhost:8080/user/booking/`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ seated: data }));
  };

  render() {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log(this.state.seated);
    const { showDay, times, seated } = this.state;
    return (
      <Container>
        <FormGroup>
          <Label for="exampleSelect">Select Day</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={this.handleOnChange}
          >
            <option>Chon ngay</option>
            {showDay &&
              showDay.map((day, i) => (
                <option key={i} value={day.id_date}>
                  {day.date}
                  /11/2018
                </option>
              ))}
          </Input>
        </FormGroup>
        {times && (
          <FormGroup>
            <Label for="exampleSelect">Select Time</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.getSeat}
            >
              <option>Chon gios</option>
              {times &&
                times.map((time, i) => (
                  <option key={i} value={time.id_time}>
                    {time.time} minutes
                  </option>
                ))}
            </Input>
          </FormGroup>
        )}
        <Form onSubmit={this.setFinal}>
          <FormGroup check>
            {seated &&
              seats.map((seat, i) => (
                <Label check onChange={this.getOrder} value={seat}>
                  <Input name={i} type="checkbox" id="checkbox2" /> {seat}
                </Label>
              ))}
          </FormGroup>
          <Button>Order</Button>
        </Form>
      </Container>
    );
  }
}

export default Order;
