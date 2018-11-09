const { pool } = require("../../mysql/connect");

exports.userGetSeatedOfMovie = (req, res) => {
    console.log(req.params);
    var { id_movie, id_date, id_time } = req.params;
    let sql = `call choNgoiDaDuocDat(${id_movie}, ${id_date}, ${id_time});`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        var seated = results[0];
        res.status(200).send({
          instaces: seated.length,
          seated: seated
        });
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  };