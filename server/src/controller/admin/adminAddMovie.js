const {
  pool
} = require("../../mysql/connect");
const {
  Bucket,
  ACL,
  ContentType
} = require('../../mysql/config');
const cache_system = require("../../cache_system/cache_movies");

const AWS = require('aws-sdk');

exports.adminAddMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "Please try to login as Admin"
    });

  if (!req.file) {
    return res.json({
      message: 'Lose a avatar. Please try again'
    });
  }

  const objParam = {
    Bucket: Bucket,
    Key: `${new Date().getTime().toString()}.jpeg`,
    Body: req.file.buffer,
    ACL: ACL,
    ContentType: ContentType
  }

  uploadPromise = new AWS.S3().putObject(objParam).promise().then((rs) => {

    const {
      title,
      director,
      released,
      length,
      price,
      data
    } = req.body;

    const imageUrl = `s3-${AWS.config.region}.amazonaws.com/${objParam.Bucket}/${objParam.Key}`
    const dataJson = JSON.stringify(data);

    let sql = `call add_movie('${title}', '${director}', ${released}, ${length}, ${price}, '${imageUrl}','${dataJson}');`;
    try {
      pool.query(sql, (error, results, feilds) => {
        if (error) {
          return res.status(400).send({
            error
          });
        }
        if (results.affectedRows) {
          cache_system.movies = [];
          res.status(200).send({
            results: results,
            query: {
              title,
              director,
              released,
              length,
              price,
              data
            }
          });
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