const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const { authentication } = require("./src/middleware/authentication");
//const getLog = require('./src/middleware/getlog');
const userController = require("./src/controller/user");
const { userGetMovies } = require("./src/controller/user/userGetMovies");
const { userPostLogin } = require("./src/controller/user/userPostLogin");
const {
  userPostCreateAccount
} = require("./src/controller/user/userPostCreateAccount");
const { getDateOfMovie } = require("./src/controller/user/getDateOfMovie");
const {
  getTimeOfDateByMovie
} = require("./src/controller/user/getTimeOfDateByMovie");
const {
  userGetSeatedOfMovie
} = require("./src/controller/user/userGetSeatedOfMovie");
const { userBooking } = require("./src/controller/user/userBooking");
const { userGetOrder } = require("./src/controller/user/userGetOrder");
const { userDeleteOrder } = require("./src/controller/user/userDeleteOrder");
const { userUpdateSeat } = require("./src/controller/user/userUpdateSeat");

const adminController = require("./src/controller/admin");

const App = express();
//App.use(cors());

//App.use(getLog.getTime);
//App.use(morgan('short'));
App.use(
  morgan({
    format: "dev",
    skip: function(req, res) {
      return res.statusCode === 304;
    }
  })
);
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
// Add headers
App.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  //Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "x-auth, content-type");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  //res.setHeader("Access-Control-Allow-Origin", "");
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Access-Control-Allow-Headers, Origin,Accept, x-auth, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  // );
  next();
});

App.get("/logout", function(req, res) {
  res.redirect("you hit logout page");
});

App.get("/secure", authentication, (req, res) => {
  if (req.user.role === "admin") {
    res.send("you are in authrequired page");
  } else {
    res.send("please try as admin again!");
  }
});

App.post("/user/create/account", userPostCreateAccount); // ok.
App.post("/user/login", userPostLogin);
App.get("/user/get/all/movie", userGetMovies); // ok
App.get("/user/get/date/:id_movie", getDateOfMovie); // ok
App.get("/user/get/time/:id_movie/:id_date", getTimeOfDateByMovie); // ok
App.get("/user/get/seated/:id_movie/:id_date/:id_time", userGetSeatedOfMovie); // ok
App.post("/user/booking", authentication, userBooking); // ok

App.get("/user/get/order", authentication, userGetOrder); // ok
App.delete("/user/delete/:id_order", authentication, userDeleteOrder); // ok
App.patch("/user/update/seat", authentication, userUpdateSeat); // ok

/*Administrator*/
App.post("/admin/add/movie", authentication, adminController.addMovie); // ok
App.get("/admin/get/all/order", authentication, adminController.getAllOrder); // ok
App.delete(
  "/admin/delete/movie/:id_movie",
  authentication,
  adminController.admin_deleteMovie
);
App.get(
  "/admin/get/all/order/bydate/:date",
  authentication,
  adminController.getAllOrderByDate
); // ok

App.get(
  "/admin/get/all/order/bymovie/:id_movie",
  authentication,
  adminController.getAllOrderByMovie
);
App.get(
  "/admin/get/all/order/bytime/:s_time/:e_time",
  authentication,
  adminController.getAllOrderByTime
);

App.get("/checkOrder/:id_order", adminController.checkOrderUser);
module.exports = { App };
