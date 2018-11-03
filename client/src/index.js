// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import App from "./App";
import Login from "../src/components/Login";
import SignUp from "../src/components/signUp";
import Admin from "../src/components/Admin";
import PageNotFound from "../src/components/404";

import "./styles.css";

const Page = () => {
  return (
    <Router>
      <App path="/" />
      <Login path="login" />
      <SignUp path="signUp" />
      <Admin path="admin" />
      <PageNotFound path="*" />
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
