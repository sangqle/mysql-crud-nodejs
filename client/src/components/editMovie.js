import React from "react";
import { Formik } from "formik";
import { navigate } from "@reach/router";

import "./editMoive.css";

class EditPage extends React.Component {
  state = {
    movie: null
  };

  componentWillMount() {
    console.log(this.props.id_movie);
    fetch(`http://localhost:8080/admin/get/movie/${this.props.id_movie}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "x-auth": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ movie: data.movie });
      });
  }

  render() {
    const { movie } = this.state;
    console.log(this.state);
    return (
      movie && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Formik
                initialValues={{
                  director: movie.director,
                  discription: movie.discription,
                  image: movie.image,
                  length: movie.length,
                  price: movie.price,
                  released: movie.released,
                  title: movie.title
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                  console.log(values);
                  fetch(
                    `http://localhost:8080/admin/edit/movie/${
                      this.props.id_movie
                    }`,
                    {
                      method: "post",
                      body: JSON.stringify({
                        title: values.title,
                        director: values.director,
                        description: values.discription,
                        length: values.length,
                        released: values.released,
                        price: values.price,
                        imageUrl: values.image
                      }),

                      headers: {
                        Accept: "application/json",
                        "x-auth": localStorage.getItem("token"),
                        "Content-Type": "application/json"
                      }
                    }
                  )
                    .then(res => res.json())
                    .then(data => navigate("/admin"))
                    .catch(err => console.log(err));
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="card">
                    <div className="card-header">
                      <h3>Edit your movie here !</h3>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Director</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="director"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.director}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Description</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="discription"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.discription}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Image</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="image"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.image}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Length</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="length"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.length}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Year released</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="released"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.released}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Price</label>
                        <input
                          className="form-control is-valid"
                          type="text"
                          name="price"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price}
                        />
                      </div>
                      <button
                        className="btn btn-purple"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Edit this moive
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default EditPage;
