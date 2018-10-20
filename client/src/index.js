// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom'
import App from "./App";
import LoginForm from './components/Login'

const Page = () => (
<Switch>
  <Route exact path="/" component={App} />
  <Route path="/login" component={LoginForm} />
</Switch>
);

export default Page

const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Page /></BrowserRouter>, rootElement);
