import React, { Component } from "react";

class CheckInId extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    fetch(`http://localhost:8080/checkorder/${this.props.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(error => console.error(error));
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            background: "#039be5",
            boxShadow:
              "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
            color: "#ffffff"
          }}
        >
          <a class="navbar-brand">Movie App</a>
        </nav>

        <div className="container" style={{ textAlign: "center" }}>
          {data && data.error && (
            <h2 style={{ color: "red" }}>Sorry! Not check...</h2>
          )}

          {data && data.user && (
            <>
              <h2 style={{ color: "green" }}>Successed! Please come in...</h2>
              <div className="container">
                <table className="table card-table table-striped table-vcenter">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Title movie</th>
                      <th>Seat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.user.name}</td>
                      <td>{data.user.email}</td>

                      <td>{data.order.title}</td>
                      <td>{data.order.seat}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default CheckInId;
