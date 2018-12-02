const { pool } = require("../../mysql/connect");
const { time_of_movies } = require("../../cache_system/cache_movies");

exports.getTimeOfDateByMovie = (req, res) => {
 
  var { id_movie, id_date } = req.params;
  for(e of time_of_movies) {
    if(e.id_movie === id_movie && e.id_date === id_date) {
      console.log('Query Time From cache');
      return res.status(200).send({
        instaces: e.times.length,
        times: e.times
      });
    }
  }
  let sql = `call chonGioXem(${id_movie}, ${id_date});`;
  try {
    console.log('Query Time in MYSQL');
    pool.query(sql, (error, results, fields) => {
      let cache_time = {};
      if (error) {
        return res.status(400).send({ error });
      }
      var times = results[0];
      for(t of times) {
        t.time = `${parseInt(t.time/60, 10)}h${t.time%60}`
      }
      cache_time.id_movie = id_movie;
      cache_time.id_date = id_date;
      cache_time.times = times;
      time_of_movies.push(cache_time);
      //console.log('Array: ', time_of_movies);

      times = times.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      
      return res.status(200).send({
        instaces: times.length,
        times: times
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
