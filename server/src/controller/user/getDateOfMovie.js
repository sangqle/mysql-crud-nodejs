const { pool } = require("../../mysql/connect");
const { date_of_movies } = require("../../cache_system/cache_movies");

/**User get all the date of the movie */
exports.getDateOfMovie = (req, res) => {
  
  var id_movie = req.params.id_movie;
  for (e of date_of_movies) {
    if (e.id_movie === id_movie) {
      console.log("Get Date In Cache_DAte");
      return res.status(200).send({
        instaces: e.dates.length,
        dates: e.dates
      });
    }
  }
  let sql = `call chonNgayXem(${id_movie});`;
  try {
    console.log("Get date in MYSQL");
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      var dates = results[0];
      let cache_date = {};
      cache_date.id_movie = req.params.id_movie;
      cache_date.dates = dates;
      date_of_movies.push(cache_date);

      dates = dates.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      res.status(200).send({
        instaces: dates.length,
        dates: dates
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
