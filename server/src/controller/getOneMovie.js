const { pool } = require("../mysql/connect");

exports.getOneMovie = (req, res) => {
    const idMovie = req.params.idMovie;
    let sql = `select * from movies where id_movie = ${idMovie}`;
    try {
      pool.query(sql, (error, results) => {
        if (error)
          return res.json({
            message: "Error execute SQL satement in getOneMovie API",
            error: error,
            path: __filename
          });
        let movie = results[0];
        res.json({movie});
      });
    } catch (e) {
      if (e)
        return res.json({
          message: "Error throw from catch getOneMovie",
          error: e,
          path: __filename
        });
    }
};
