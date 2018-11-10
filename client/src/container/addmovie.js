import React, { Component } from "react";
import { Container, FormGroup, Label, Input } from "reactstrap";
import "./addMovie.scss";

export default class addmovie extends Component {
  state = {
    movie_name: "",
    director: "",
    description: "",
    length: null,
    year_rel: null,
    price: null
  };

  handleInputChange = e => {
    this.setState({ [e.targer.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <FormGroup>
          <Label for="exampleText">Movie name</Label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="movie_name"
          />
          <Label for="exampleText">Director</Label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="director"
          />
          <Label for="exampleText">Description</Label>
          <Input
            onChange={this.handleInputChange}
            type="textarea"
            name="description"
          />
          <Label for="exampleText">Length</Label>
          <Input
            onChange={this.handleInputChange}
            type="number"
            name="length"
          />
          <Label for="exampleText">Year release</Label>
          <Input
            onChange={this.handleInputChange}
            type="number"
            name="year_rel"
          />
          <Label for="exampleText">Price</Label>
          <Input onChange={this.handleInputChange} type="text" name="price" />
        </FormGroup>
      </Container>
    );
  }
}
