const { pool } = require("../../src/mysql/connect");
const passport = require('passport');

/**User register a account to booking */

exports.addAccount = (req, res) => {
  const dataPost = req.body;
  let sql = `call themNguoiDung('${dataPost.name}', '${dataPost.email}', '${
    dataPost.password
    }', '${dataPost.sdt}');`;

  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      res.status(200).send({
        results: results,
        data: dataPost,
        fields: fields
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/**User get all the movies is avaible */
exports.getAllMovie = (req, res) => {
  console.log('Inside the GetAllTheMovie');
  let sql = `call chonPhim();`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var movies = results[0];
      res.status(200).send({
        instaces: movies.length,
        movies: movies
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

/**User get all the date of the movie */
exports.getAllDateOfMovie = (req, res) => {
  var id_movie = req.body.id_movie;
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
  var { id_movie, id_date } = req.body;
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
  var { id_movie, id_date, id_time } = req.body;

  let sql = `call choNgoiDaDuocDat(${id_movie}, ${id_date}, ${id_time});
			   select max(number_row) from seat;
			   select max(number_col) from seat;
			  `;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var seated = results[0];
      var max_numRow = results[2][0]["max(number_row)"];
      var max_numCol = results[3][0]["max(number_col)"];
      res.status(200).send({
        max_numRow: max_numRow,
        max_numCol: max_numCol,
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
  var { id_movie, id_date, id_time, id_user, id_seat } = req.body;
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if (req.isAuthenticated()) {
    let sql = `call datVe(${id_user}, ${id_movie}, ${id_date}, ${id_time}, ${id_seat});`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        var order = results[0];
        res.status(200).send({
          order: order[0]
        });
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  } else {
    res.redirect('/login');
  }

};

/* User get all the order booking */
exports.getAllOrder = (req, res) => {
  var { id_user } = req.body;
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if (req.isAuthenticated()) {
    let sql = `call xemVeDaDat(${id_user});`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        var order = results[0];
        res.status(200).send({
          instance: order.length,
          order: order
        });
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  } else {
    res.redirect('/')
  }
};


// sua toi day roi. di ngu thoi ------------------ 


/* User delete order was booked */
exports.deleteOrder = (req, res) => {
  let { id_user, id_order } = req.body;
  let sql = `call xoaVe(${id_user}, ${id_order});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.affectedRows) {
        res.status(200).send({
          statusCode: 200,
          results: results
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
  let { id_order, id_newSeat } = req.body;
  let sql = `call doiChoNgoi(${id_order}, ${id_newSeat});`;
  try {
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.effectedRows) {
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
