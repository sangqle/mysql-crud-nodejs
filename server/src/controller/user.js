const { pool } = require("../../src/mysql/connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cache_system = require("../cache_system/cache_movies");

/**User register a account to booking */
exports.userGetLogin = (req, res) => {
  res.send("you are get login page");
};

exports.addAccount = (req, res) => {
  // ok
  const { email, password, name, sdt } = req.body;
  if (email && password && name && sdt) {
    let passwordHash = password + "secure";
    bcrypt.hash(passwordHash, 10).then(function(hash) {
      let sql = `call themNguoiDung('${name}', '${email}', '${hash}', '${sdt}');`;
      try {
        pool.query(sql, (error, results, fields) => {
          if (error) {
            return res.status(400).send({
              code: error.code,
              errno: error.errno,
              sqlMessage: error.sqlMessage,
              sqlState: error.sqlState,
              index: error.index
            });
          }
          res.status(201).send({ name, email, sdt });
        });
      } catch (error) {
        res.status(400).send({ error });
      }
    });
  } else {
    return res.status(400).send({
      Message: "Require {name, email, password, sdt}",
      YourBody: Object.keys(req.body)
    });
  }
};

exports.userPostLogin = (req, res) => {
  const { email } = req.body;
  let sql = `call userLogin('${email}')`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({
          code: error.code,
          errno: error.errno,
          sqlMessage: error.sqlMessage,
          sqlState: error.sqlState,
          index: error.index
        });
      }
      const user = results[0][0];
      if (!user) {
        return res.send({
          error: 404,
          message: `Email:  '${email}' is not exist`
        });
      }
      bcrypt
        .compare(req.body.password + "secure", user.password)
        .then(check => {
          const token = jwt.sign(
            {
              id_user: user.id_user,
              name: user.name,
              email: user.email,
              role: user.role
            },
            "secure"
          );
          return res
            .status(200)
            .header("x-auth", token)
            .send({
              id_user: user.id_user,
              name: user.name,
              email: user.email,
              role: user.role,
              token: token
            });
        });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/**User get all the movies is avaible */
exports.getAllMovie = (req, res) => {
  if (cache_system.movies.length) {
    console.log("Get Movie from cache");
    return res.status(200).send({
      instaces: cache_system.movies.length,
      movies: cache_system.movies
    });
  }
  let sql = `call chonPhim();`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var movies = results[0];
      for (movie of movies) {
        cache_system.movies.push(movie);
      }
      console.log("Get Movie from MSYQL");
      return res.status(200).send({
        instaces: movies.length,
        movies: movies
      });
    });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

/**User get all the date of the movie */
exports.getAllDateOfMovie = (req, res) => {
  var id_movie = req.params.id_movie;
  let sql = `call chonNgayXem(${id_movie});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var dates = results[0];
      res.status(200).send({
        instaces: dates.length,
        dates: dates
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/* Get all the time of movie in the date*/
exports.getAllTimeOfDateInMovie = (req, res) => {
  var { id_movie, id_date } = req.params;
  let sql = `call chonGioXem(${id_movie}, ${id_date});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var times = results[0];
      res.status(200).send({
        instaces: times.length,
        times: times
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/* API check seated*/
exports.getChoNgoiDaDuocDat = (req, res) => {
  console.log(req.params);
  var { id_movie, id_date, id_time } = req.params;
  let sql = `call choNgoiDaDuocDat(${id_movie}, ${id_date}, ${id_time});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var seated = results[0];
      res.status(200).send({
        instaces: seated.length,
        seated: seated
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/* User booking*/
exports.userBooking = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  var { id_movie, id_date, id_time, id_seat } = req.body;
  var id_user = req.user.id_user;
  const seatedJson = JSON.stringify(id_seat);
  let sql = `call datVe(${id_user}, ${id_movie}, ${id_date}, ${id_time}, '${seatedJson}');`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      let orders = [];
      for (order of results[0]) {
        if (id_seat.includes(order.id_seat)) orders.push(order);
      }
      res.status(200).send({
        order: orders
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/* User get all the order booking */
exports.getAllOrder = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  let sql = `call xemVeDaDat(${req.user.id_user});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var order = results[0];
      res.status(200).send({
        id_user: req.user.id_user,
        name: req.user.name,
        instance: order.length,
        order: order
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
/* User delete order was booked */
exports.deleteOrder = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  let { id_order } = req.body;
  try {
    let sql = `call xoaVe(${req.user.id_user}, ${id_order});`;
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.affectedRows) {
        res.status(200).send({
          statusCode: 200,
          results: `The order '${id_order}' was deleted.`
        });
      } else {
        res.status(400).send({
          statusCode: 400,
          message: `The id order ${id_order} dose not exist`
        });
      }
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/* User edit the seat after call function choNgoiDaDuocDat(id_movie, id_date, id_time) */
exports.editBooking = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  let { id_order, id_newSeat } = req.body;
  try {
    let sql = `call doiChoNgoi(${id_order}, ${id_newSeat});`;
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results) {
        res.status(200).send({
          statusCode: 200,
          results: results
        });
      } else {
        res.status(400).send({
          statusCode: 400,
          message: `The id order ${id_order} or id new seat ${id_newSeat} is invalid`
        });
      }
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
