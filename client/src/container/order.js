import React from "react";
import { FormGroup, Label, Input, Container, Button } from "reactstrap";

class Order extends React.Component {
  state = {
    showDay: null,
    times: null,
    days: null,
    seated: null,
    seatWanted: null
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
      .then(data => this.setState({ seated: data }));
  };

  getOrder = (e) => {
    this.setState({[e.target.name]: e.target.checked})
    // console.log(this.state.seatWanted)
    
  }

  render() {
    const seats = [1,2,3,4,5,6,7,8,9,10,11,12]
    console.log(this.state.seated)
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
          ><option>Chon ngay</option>
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
        <FormGroup check >
        {seated && seats.map((seat, i) => (
              <Label check onChange={this.getOrder} value={seat}>
                <Input name={i} type="checkbox" id="checkbox2" />{' '}
                {seat}
              </Label>
            ))}
            <Button>Order</Button>
            </FormGroup>
      </Container>
    );
  }
}

export default Order;
