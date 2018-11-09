const { pool } = require("../../mysql/connect");

/* User get all the order booking */
exports.userGetOrder = (req, res) => {
    if (req.user.role !== "user")
      return res.send({ message: "Please login as customer" });
    let sql = `call xemVeDaDat(${req.user.id_user});`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        var order = results[0];
        res.status(200).send({
          id_user: req.user.id_user,
          name: req.user.name,
          instance: order.length,
          order: order
        });
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  };