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
    const data = cats.map(val => {
      return {
        date: parseInt(val.name),
        time: val.age.split(" ").map(v => parseInt(v))
      };
    });

    const file = new FormData();

    file.append("avatar", this.state.avatar)
    console.log(this.state.avatar);
    //fd.append("avatar", avatar);

    return fetch("http://localhost:8080/admin/add/movie", {
      method: "POST",
     // mode: "no-cors",
     // body: file.avatar, // post body
      // body: JSON.stringify({
      //   title: movie_name,
      //   data: data,
      //   price: parseInt(price),
      //   length: parseInt(length),
      //   description: description,
      //   director: director,
      //   released: parseInt(year_rel)
      // }),

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "type": "formData",
        "x-auth": localStorage.getItem("token")
      },
    }).then(function (res) {
      if (res) {
        console.log(res);
      } else if (res.status == 401) {
        console.log('Loi toi ban oi');
      }
    }, function (e) {
      alert("Error submitting form!");
    });
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
