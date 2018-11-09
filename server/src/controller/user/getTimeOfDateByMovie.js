const { pool } = require("../../mysql/connect");

exports.getTimeOfDateByMovie = (req, res) => {
    var { id_movie, id_date } = req.params;
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