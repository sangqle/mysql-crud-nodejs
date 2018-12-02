const { pool } = require("../../mysql/connect");
const { Bucket, ACL, ContentType } = require("../../mysql/config");
const cache_system = require("../../cache_system/cache_movies");

exports.adminAddMovie = (req, res) => {
  console.log(req);
  if (req.user.role !== "admin")
    return res.send({
      message: "Please try to login as Admin"
    });

  //const oRequired = req.body;
  const inputJson = JSON.parse(JSON.stringify(req.body));

  //console.log(aDateTime);

  // res.json(aDateTime)
  let title = inputJson.title
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  let director = inputJson.discription
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  let discription = inputJson.discription
    .split(/\s+/)
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(" ")
    .trim();

  let sql = `call add_movie('${title}', '${director}', ${inputJson.released}, ${
    inputJson.length
  }, ${inputJson.price}, '${inputJson.imageUrl}','${JSON.stringify(
    inputJson.data
  )}',
      '${discription}');`;

  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) {
        return res.status(400).send({
          message: 'The error throw from adminAddMovie when execute SQL statement',
          path: __filename,
          error: error
        });
      }
      if (results.affectedRows) {
        cache_system.movies = [];
        res.status(200).send({ message: "Insert Thanh Cong." });
      } else {
        res.status(400).send({
          message: "Nothing to change."
        });
      }
    });
  } catch (error) {
    res.status(400).send({
      message: 'The error throw from adminAddMovie in trycatch',
      path: __filename,
      error
    });
  }
};
