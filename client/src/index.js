// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/tabler.css";
import { Router } from "@reach/router";
import App from "./App";
import Login from "../src/components/Login";
import SignUp from "../src/components/signUp";
import Admin from "../src/components/Admin";
import PageNotFound from "../src/components/404";
import Order from "../src/container/order";
import VerifyOrder from "../src/container/orderSuccess";
import AddMovie from "../src/container/addmovie";
import ViewOrder from "./container/adminViewOrders";
import User from "../src/container/userViewOrder";
import EditPage from "./components/editMovie";

import Checkin from "./components/Checkin";
import CheckInId from "./components/CheckInId";
//import App from "../src/components/OrderPage/App";

const Page = () => (
  <Router>
    <App path="/" />
    <Login path="login" />
    <SignUp path="signUp" />
    <Admin path="admin" />
    <Order path="order/:id_movie" />
    <VerifyOrder path="order/success/:id_order" />
    <AddMovie path="admin/add_movie" />
    <EditPage path="admin/edit_movie/:id_movie" />
    <ViewOrder path="admin/view_ordered" />
    <PageNotFound path="*" />
    <User path="/user" />
    <Checkin path="checkin" />
    <CheckInId path="checkin/:id" />
  </Router>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<Page />, rootElement);
