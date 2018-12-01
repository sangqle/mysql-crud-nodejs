const { pool } = require("../../mysql/connect");

const { getOneMovie } = require("../getOneMoviePromise");

exports.adminEditMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });

 // const idMovie = req.params.idMovie;
  try {
    let sql = `call adminEditMovie()`;
    pool.query(sql, (error, data) => {
      if (error) {
        res.json({
          message: "Error execute SQL from adminEditMovie.js",
          error: error
        });
      }
      res.json({ message: "Edit Thanh Cong"});
    });
  } catch (error) {
    res.json({
      message: "Error in catch from adminEditMovie.js",
      error: error
    });
  }
};
