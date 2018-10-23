const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userController = require("./src/controller/user");
const adminController = require("./src/controller/admin");

const App = express(); // create app by express.
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Add headers
// Add headers
App.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

// Route
App.get("/", (req, res) => {
  res.send("hello world");
});

App.post("/user/create/account", userController.addAccount); // ok.
App.post("/user/login", userController.userLogin);
App.get("/user/get/all/movie", userController.getAllMovie); // ok
App.post("/user/get/all/movie/date", userController.getAllDateOfMovie); // ok
App.post(
  "/user/get/all/movie/date/time",
  userController.getAllTimeOfDateInMovie
); // ok
App.post(
  "/user/get/all/movie/date/time/seat",
  userController.getChoNgoiDaDuocDat
); // ok
App.post(
  "/user/get/all/movie/date/time/seat/booking",
  userController.userBooking
); // ok

App.post("/user/get/all/order", userController.getAllOrder); // ok
App.post("/user/delete/order", userController.deleteOrder); // ok
App.post("/user/update/seat", userController.editBooking); // ok

/*Administrator*/
App.post("/admin/add/movie", adminController.addMovie); // ok
App.get("/admin/get/all/order", adminController.getAllOrder); // ok
App.get("/admin/get/all/order/:date", adminController.getAllOrderByDate); // ok

module.exports = { App };
