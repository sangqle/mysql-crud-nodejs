const {
  pool
} = require("../../mysql/connect");
const cache_system = require("../../cache_system/cache_movies");

exports.adminDeleteMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin",
      error,
      path: __filename
    });
  let id_movie = req.params.id_movie;
  let sql = `call admin_deleteMovie(${id_movie})`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({
        error
      });
      if (results.affectedRows) {
        cache_system.movies = [];
        cache_system.date_of_movies = [];
        cache_system.time_of_movies = [];
        return res.status(200).send({
          message: "Delete Thanh Cong"
        });
      } else {
        return res.status(404).send({
          error: "Can not found."
        });
      }
    });
  } catch (error) {
    if (error) return res.status(400).send({
      message: 'The error throw from catch final',
      error,
      path: __filename
    });
  }
};