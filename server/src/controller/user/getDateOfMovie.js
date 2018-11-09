const { pool } = require("../../mysql/connect");

/**User get all the date of the movie */
exports.getDateOfMovie = (req, res) => {
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
