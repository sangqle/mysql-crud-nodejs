const { pool } = require("../../mysql/connect");

exports.userUpdateSeat = (req, res) => {
    if (req.user.role !== "user")
      return res.send({ message: "Please login as customer" });
    let { id_order, id_newSeat} = req.body;
    try {
      let sql = `call doiChoNgoi(${req.user.id_user}, ${id_order}, ${id_newSeat});`;
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        if (results) {
          res.status(200).send({
            statusCode: 200,
            results: results
          });
        } else {
          res.status(400).send({
            statusCode: 400,
            message: `The id order ${id_order} or id new seat ${id_newSeat} is invalid`
          });
        }
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  };