const { pool } = require("../../mysql/connect");

exports.adminGetAllOrder = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let sql = `call admin_getAllOrder();`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });

      let order = results[0];
      res.status(200).send({
        instance: order.length,
        order: order
      });
    });
  } catch (error) {
    if (error) return res.status(400).send({ error });
  }
};
