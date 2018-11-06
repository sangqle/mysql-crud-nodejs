import React from "react";
import { FormGroup, Label, Input, Container } from "reactstrap";

class Order extends React.Component {
  state = {
    showDay: null,
    times: null,
    days: null,
    seats: null
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
    fetch(
      `http://localhost:8080/user/get/seated/${this.props.order_id}/${
        this.state.days
      }/${e.target.value}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "x-auth": localStorage.getItem("token")
        }
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ seats: data }));
  };

  render() {
    console.log(this.state.seats);
    const { showDay, times, seats } = this.state;
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
              {times &&
                times.map((time, i) => (
                  <option key={i} value={time.id_time}>
                    {time.time} minutes
                  </option>
                ))}
            </Input>
          </FormGroup>
        )}
      </Container>
    );
  }
}

export default Order;
