// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "../src/components/Login";
import signUp from "../src/components/signUp";
import Home from "../src/components/Home";
import Admin from "../src/components/Admin";

import "./styles.css";

const Page = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={signUp} />
      <Route path="/admin" component={Admin} />
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  rootElement
);
