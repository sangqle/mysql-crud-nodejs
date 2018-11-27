const { pool } = require("../../mysql/connect");
const { Bucket, ACL, ContentType } = require("../../mysql/config");
const cache_system = require("../../cache_system/cache_movies");

const AWS = require("aws-sdk");

exports.adminAddMovie = (req, res) => {
  console.log(req);
  if (req.user.role !== "admin")
    return res.send({
      message: "Please try to login as Admin"
    });

  if (!req.file) {
    return res.json({
      message: "Lose a avatar. Please try again"
    });
  }

  const objParam = {
    Bucket: Bucket,
    Key: `${new Date().getTime().toString()}.jpeg`,
    Body: req.file.buffer,
    ACL: ACL,
    ContentType: ContentType
  };

  //const oRequired = req.body;
  const inputJson = JSON.parse(JSON.stringify(req.body));

  const aMovie = [
    "title",
    "director",
    "released",
    "length",
    "price",
    "discription"
  ];

  let aDateTime = [];
  let objDateTime = {};

  if (inputJson.data) {
    aDateTime = inputJson.data;
    //console.log(aDateTime);
  } else {
    for (key of Object.keys(inputJson)) {
      if (!aMovie.includes(key)) {
        objDateTime = {};
        objDateTime.date = parseInt(key);
        objDateTime.time = inputJson[key].split(/\s+/).map(e => parseInt(e));

        aDateTime.push(objDateTime);
      }
    }
  }

  // res.json(aDateTime)

  uploadPromise = new AWS.S3()
    .putObject(objParam)
    .promise()
    .then(rs => {
      const imageUrl = `https://s3-${AWS.config.region}.amazonaws.com/${
        objParam.Bucket
      }/${objParam.Key}`;

      let sql = `call add_movie('${inputJson.title}', '${
        inputJson.director
      }', ${inputJson.released}, ${inputJson.length}, ${
        inputJson.price
      }, '${imageUrl}','${JSON.stringify(aDateTime)}',
      '${inputJson.discription}');`;

      try {
        pool.query(sql, (error, results, feilds) => {
          if (error) {
            return res.status(400).send({
              error
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
          error
        });
      }
    });
};
