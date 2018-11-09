const { pool } = require("../../../src/mysql/connect");
const cache_system = require('../../cache_system/cache_movies')

exports.userGetMovies = (req, res) => {
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
