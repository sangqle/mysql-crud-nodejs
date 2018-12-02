const {
  pool
} = require("../../mysql/connect");

exports.adminGetAllOrder = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let sql = `call admin_getAllOrder();`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({
        message: 'The error from if (error)',
        error,
        path: __dirname
      });

      let orders = results[0];
      for (order of orders) {
        order.time = `${parseInt(order.time / 60)}h${order.time % 60}`
        order.time_order = new Date(parseInt(order.time_order, 10)).toLocaleString();
      }
      res.status(200).send({
        instance: order.length,
        order: orders
      });
    });
  } catch (error) {
    if (error) return res.status(400).send({
      message: 'The error from final trycatch',
      error,
      path: __filename
    });
  }
};