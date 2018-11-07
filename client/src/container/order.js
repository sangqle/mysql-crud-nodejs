import React from "react";
import { FormGroup, Label, Input, Container, Button, Form } from "reactstrap";

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

  handleSelectDay = e => {
    this.setState({ id_date: e.target.value });
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

  hadleSelectTime = e => {
    this.setState({ id_time: e.target.value });
    const { id_date } = this.state;
    fetch(
      `http://localhost:8080/user/get/seated/${
        this.props.order_id
      }/${id_date}/${e.target.value}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "x-auth": localStorage.getItem("token")
        }
      }
    )
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log(this.state.id_day);
    const { showDay, times, seated } = this.state;
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
        {/*  <Form onSubmit={this.setFinal}>
          <FormGroup check>
            {seated &&
              seats.map((seat, i) => (
                <Label check onChange={this.getOrder} value={seat}>
                  <Input name={i} type="checkbox" id="checkbox2" /> {seat}
                </Label>
              ))}
          </FormGroup>
          <Button>Order</Button>
        </Form> */}
      </Container>
    );
  }
}

export default Order;
