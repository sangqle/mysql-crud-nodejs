import React from "react";
import Heading from "./container/heading";
import Content from "./container/content";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Heading />
            <Content />
            <button type="button" className="btn btn-indigo btn-block mb">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
