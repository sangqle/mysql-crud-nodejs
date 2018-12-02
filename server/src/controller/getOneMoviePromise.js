const { pool } = require("../mysql/connect");

exports.getOneMovie = (req, res) => {
  return new Promise((resolve, reject) => {
    const idMovie = req.params.idMovie;
    let sql = `select * from movies where id_movie = ${idMovie}`;
    try {
      pool.query(sql, (error, results) => {
        if (error)
          return reject({
            message: "Error execute SQL satement in getOneMovie API",
            error: error,
            path: __filename
          });
        let movie = results[0];
        return resolve(movie);
      });
    } catch (e) {
      if (e)
        return reject({
          message: "Error throw from catch getOneMovie",
          error: e,
          path: __filename
        });
    }
  });
};
