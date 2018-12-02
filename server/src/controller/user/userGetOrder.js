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
      var orders = results[0];
      for (t of orders) {
        t.time = `${parseInt(t.time / 60, 10)}h${t.time % 60}`;
      }
      //console.log('Array: ', time_of_movies);

      orders = orders.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

      for (order of orders) {
        order.time_order = new Date(
          parseInt(order.time_order, 10)
        ).toLocaleString();
      }
      res.status(200).send({
        id_user: req.user.id_user,
        name: req.user.name,
        instance: orders.length,
        order: orders
      });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
