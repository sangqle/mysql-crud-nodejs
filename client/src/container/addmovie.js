import React, { Component } from "react";
import { Container, FormGroup, Label, Input } from "reactstrap";
import CatInputs from "./CatInputs";
import "./addMovie.scss";

export default class addmovie extends Component {
  state = {
    movie_name: "",
    director: "",
    description: "",
    avatar: null,
    length: null,
    year_rel: null,
    price: null,
    cats: [{ name: "", age: "" }]
  };

  handleInputChange = e => {
    if (["name", "age"].includes(e.target.className)) {
      let cats = [...this.state.cats];
      cats[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ cats }, () => console.log(this.state.cats));
    } else {
      this.setState({ [e.target.name]: e.target.value }, () =>
        console.log(this.state)
      );
    }
  };

  addCart = e => {
    e.preventDefault();
    this.setState({ cats: [...this.state.cats, { name: "", age: "" }] });
  };

  fileSelectHandler = e => {
    this.setState({
      avatar: e.target.files[0]
    });
  };

  handleAdd = e => {
    e.preventDefault();
    const {
      director,
      length,
      cats,
      year_rel,
      price,
      movie_name,
      description,
      avatar
    } = this.state;
    const data1 = cats.map(val => {
      return {
        date: parseInt(val.name),
        time: val.age.split(" ").map(v => parseInt(v))
      };
    });

    

    

    var data = new FormData();
    data.append("title", "Mission Impossible");
    data.append("director", "Sang Le");
    data.append("released", "2108");
    data.append("length", "100");
    data.append("price", "190");
    data.append("avatar", "C:\\Users\\lqs\\Desktop\\dims.jpg");
    data.append("discription", "Two most important day in you day");
    data.append("23", "1114 1200");
    data.append("24", "1200");
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "http://localhost:8080/admin/add/movie");
    xhr.setRequestHeader("x-auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNSwibmFtZSI6Ik5ndXllbiBQaHVvYyBUaGFuaCIsImVtYWlsIjoidGhhbmhuZ3V5ZW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTQzMjU0NTUyfQ._Yv_D4AOQHaSb20QImrul4ijq8StUIe-r6Zr6NCTnHE");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "bed90fb1-f95b-485d-b094-b2112a890c1b");
    
    xhr.send(data);
  }

  render() {
    const { cats } = this.state;
    return (
      <Container>
        <FormGroup onChange={this.handleInputChange}>
          <Label for="exampleText">Movie name</Label>
          <Input type="text" name="movie_name" />
          <Label for="exampleText">Director</Label>
          <Input type="text" name="director" />
          <label for="avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            accept="image/png, image/jpeg"
            onChange={this.fileSelectHandler}
          />
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="description" />
          <Label for="exampleText">Length</Label>
          <Input type="number" name="length" />
          <Label for="exampleText">Year release</Label>
          <Input type="number" name="year_rel" />
          <Label for="exampleText">Price</Label>
          <Input type="text" name="price" />
          <button onClick={this.addCart}>Add new date</button>
          <CatInputs cats={cats} />
          <button className="btn btn-danger" onClick={this.handleAdd}>
            Add this movie
          </button>
        </FormGroup>
      </Container>
    );
  }
}
