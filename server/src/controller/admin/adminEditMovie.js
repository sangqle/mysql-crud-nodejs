const { pool } = require("../../mysql/connect");
const cache_system = require("../../cache_system/cache_movies");
const { getOneMovie } = require("../getOneMoviePromise");

exports.adminEditMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });

  const idMovie = req.params.idMovie;

  const movie = req.body;

  console.log(movie);

  let title = movie.title
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  let director = movie.director
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  let description = movie.description
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  try {
    let sql = `call adminEditMovie(${idMovie}, '${title}', '${description}', ${movie.released}, '${director}', '${movie.imageUrl}', ${movie.price}, ${movie.length})`;
    pool.query(sql, (error, data) => {
      if (error) {
        res.json({
          message: "Error execute SQL from adminEditMovie",
          error: error,
          path: __filename
        });
      }
      cache_system.movies = [];
      res.json({ message: "Edit Thanh Cong" });
    });
  } catch (error) {
    res.json({
      message: "Error in trycatch from adminEditMovie",
      error: error,
      path: __filename
    });
  }
};
