import React from "react";
import { Container } from "reactstrap";
import { Formik } from "formik";

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
        <Container>
          <h1>Edit your movie now !</h1>
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
                `http://localhost:8080/admin/edit/movie/${this.props.id_movie}`,
                {
                  method: "post",
                  body: JSON.stringify({
                    title: values.title,
                    director: values.director,
                    description: values.discription,
                    length: values.length,
                    released: values.released,
                    price: values.price,
                    imageURL: values.image
                  }),

                  headers: {
                    Accept: "application/json",
                    "x-auth": localStorage.getItem("token"),
                    "Content-Type": "application/json"
                  }
                }
              )
                .then(res => res.json())
                .then(data => console.log(data))
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
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <label>Director</label>
                <input
                  type="text"
                  name="director"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.director}
                />
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.discription}
                />
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                />
                <label>Length</label>
                <input
                  type="text"
                  name="length"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.length}
                />
                <label>Year released</label>
                <input
                  type="text"
                  name="released"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.released}
                />
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Container>
      )
    );
  }
}

export default EditPage;
