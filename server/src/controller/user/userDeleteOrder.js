const { pool } = require("../../mysql/connect");

/* User delete order was booked */
exports.userDeleteOrder = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  let { id_order } = req.params;
  try {
    let sql = `call xoaVe(${req.user.id_user}, ${id_order});`;
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.affectedRows) {
        res.status(200).send({
          statusCode: 200,
          results: `The order '${id_order}' was deleted.`
        });
      } else {
        res.status(400).send({
          statusCode: 400,
          message: `The id order ${id_order} dose not exist`
        });
      }
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
