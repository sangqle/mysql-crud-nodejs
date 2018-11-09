import React from "react";
import { FormGroup, Label, Input, Container, Button, Form } from "reactstrap";
import { navigate } from "@reach/router";

class Order extends React.Component {
  state = {
    showDay: null,
    id_day: null,
    times: null,
    id_time: null,
    seated: null,
    seatWanted: []
  };

  componentDidMount() {
    fetch(`http://localhost:8080/user/get/date/${this.props.id_movie}`, {
      method: "get",

      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ showDay: data.dates }));
  }

  handleSelectDay = e => {
    this.setState({ id_day: e.target.value });
    fetch(
      `http://localhost:8080/user/get/time/${this.props.id_movie}/${
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

  hadleSelectTime = e => {
    this.setState({ id_time: e.target.value });
    const { id_day } = this.state;
    fetch(
      `http://localhost:8080/user/get/seated/${this.props.id_movie}/${id_day}/${
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
      .then(data => this.setState({ seated: data.seated }));
  };

  getCheck = e => {
    this.setState({ seatWanted: [...this.state.seatWanted, [e.target.name]] });
  };

  sendOrder = e => {
    const { seatWanted } = this.state;
    const seats = seatWanted.flat().map(v => parseInt(v));

    console.log(seats);
    e.preventDefault();
    fetch("http://localhost:8080/user/booking", {
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
      },
      credentials: "include" // send cookies, even in CORS
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

  render() {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const { showDay, times, seated, seatWanted } = this.state;
    console.log(seatWanted);
    return (
      <Container>
        <FormGroup>
          <Label for="exampleSelect">Select Day</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={this.handleSelectDay}
          >
            <option> </option>
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
              onChange={this.hadleSelectTime}
            >
              <option> </option>
              {times &&
                times.map((time, i) => (
                  <option key={i} value={time.id_time}>
                    {time.time} minutes
                  </option>
                ))}
            </Input>
          </FormGroup>
        )}
        <Form onSubmit={this.sendOrder}>
          <FormGroup check>
            {seated &&
              seats.map((seat, i) => {
                const arraySeated = seated.map(item => item.id_seat);
                // console.log(arraySeated);
                return arraySeated.indexOf(seat) !== -1 ? (
                  <Label check onChange={this.getCheck} value={seat}>
                    <Input
                      color="pimary"
                      name={i}
                      type="checkbox"
                      id="checkbox2"
                      disabled
                    />{" "}
                    {seat}
                  </Label>
                ) : (
                  <Label check onChange={this.getCheck} value={seat}>
                    <Input name={i} type="checkbox" id="checkbox2" /> {seat}
                  </Label>
                );
              })}
          </FormGroup>
          <Button>Order</Button>
        </Form>
      </Container>
    );
  }
}

export default Order;
