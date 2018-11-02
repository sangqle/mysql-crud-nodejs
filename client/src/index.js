// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../src/container/protectedRoute";
import App from "./App";
import Login from "../src/components/Login";
import signUp from "../src/components/signUp";

import Admin from "../src/components/Admin";

import "./styles.css";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={signUp} />

        <ProtectedRoute exact path="/admin" component={Admin} />
        <Route path="*" component={() => "404 Page Not Found !!"} />
      </Switch>
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
