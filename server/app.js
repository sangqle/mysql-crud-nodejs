const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const AWS = require("aws-sdk");
const morgan = require("morgan");
const cors = require("cors");
const { accessKey, secretKey } = require("../server/src/mysql/config");

// config AWS for access S3
AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  region: "ap-southeast-1"
});

const upload = multer(); // create middleware upload file

const { authentication } = require("./src/middleware/authentication");
//const getLog = require('./src/middleware/getlog');
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

const { adminAddMovie } = require("./src/controller/admin/adminAddMovie");
const {
  adminCheckOrderUser
} = require("./src/controller/admin/adminCheckOrderUser");
const { adminDeleteMovie } = require("./src/controller/admin/adminDeleteMovie");
const { adminGetAllOrder } = require("./src/controller/admin/adminGetAllOrder");
const {
  adminGetAllOrderByDate
} = require("./src/controller/admin/adminGetAllOrderByDate");
const {
  adminGetAllOrderByMovie
} = require("./src/controller/admin/adminGetAllOrderByMovie");
const {
  adminGetAllOrderByTime
} = require("./src/controller/admin/adminGetAllOrderByTime");

const { adminEditMovie } = require("./src/controller/admin/adminEditMovie");
const { getOneMovie } = require("./src/controller/getOneMovie");
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
App.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Add headers
//App.use(cors());

App.use(function(req, res, next) {
  //res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
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
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, x-auth, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

// App.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   next();
// });

App.post("/user/create/account", userPostCreateAccount);
App.post("/user/login", userPostLogin);
App.get("/user/get/all/movie", userGetMovies);
App.get("/user/get/date/:id_movie", getDateOfMovie);
App.get("/user/get/time/:id_movie/:id_date", getTimeOfDateByMovie);
App.get("/user/get/seated/:id_movie/:id_date/:id_time", userGetSeatedOfMovie);
App.post("/user/booking", authentication, userBooking);

App.get("/user/get/order", authentication, userGetOrder);
App.delete("/user/delete/:id_order", authentication, userDeleteOrder);
App.patch("/user/update/seat", authentication, userUpdateSeat);

/*Administrator*/
App.post(
  "/admin/add/movie",
  authentication,
  // upload.single("avatar"),
  adminAddMovie
);
App.get("/admin/get/all/order", authentication, adminGetAllOrder);
App.delete("/admin/delete/movie/:id_movie", authentication, adminDeleteMovie);
App.get(
  "/admin/get/all/order/bydate/:date",
  authentication,
  adminGetAllOrderByDate
);

App.get(
  "/admin/get/all/order/bymovie/:id_movie",
  authentication,
  adminGetAllOrderByMovie
);
App.get(
  "/admin/get/all/order/bytime/:s_time/:e_time",
  authentication,
  adminGetAllOrderByTime
);

App.get("/admin/get/movie/:idMovie", authentication, getOneMovie);
App.post("/admin/edit/movie/:idMovie", authentication, adminEditMovie);

App.get("/checkOrder/:id_order", adminCheckOrderUser);


const client = require("./redis-database");

const limiter = require("express-limit-api")(App, client);
App.get(
  "/",
  limiter({
    path: "/users",
    method: "get",
    lookup: ["connection.remoteAddress"],
    total: 1000,
    expire: 1000 * 60 * 60,
    onRateLimited: function(request, response, next) {
      return response
        .status(429)
        .json("You are not welcome here, Rate limit exceeded");
    }
  }),
  (req, res) => res.json({ message: "Welcome To APIs" })
);

module.exports = {
  App
};
