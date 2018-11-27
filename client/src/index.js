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
import Order from "../src/container/order";
import VerifyOrder from "../src/container/orderSuccess";
import AddMovie from "../src/container/addmovie";
import User from "../src/components/user";
import EditPage from "./components/editMovie";
//import App from "../src/components/OrderPage/App";

import "./styles.css";
//import "./Styles/global.scss";

const Page = () => {
  return (
    <Router>
      <App path="/" />
      <Login path="login" />
      <SignUp path="signUp" />
      <Admin path="admin" />
      <Order path="order/:id_movie" />
      <VerifyOrder path="order/success/:id_order" />
      <AddMovie path="admin/add_movie" />
      <EditPage path="admin/edit_movie/:movie" />
      <PageNotFound path="*" />
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<User/>, rootElement)
//ReactDOM.render(<Page />, rootElement);
