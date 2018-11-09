const { pool } = require("../../mysql/connect");
const cache_system = require("../../cache_system/cache_movies");
exports.adminAddMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({ message: "Please try to login as Admin" });
  const { title, director, released, length, price, imageUrl, data } = req.body;
  const dataJson = JSON.stringify(data);
  let sql = `call add_movie('${title}', '${director}', ${released}, ${length}, ${price}, '${imageUrl}','${dataJson}');`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.affectedRows) {
        cache_system.movies = [];
        res.status(200).send({
          results: results,
          query: { title, director, released, length, price, data }
        });
      } else {
        res.status(400).send({
          message: "Nothing to change."
        });
      }
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};