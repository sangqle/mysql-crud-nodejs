const { pool } = require("../../mysql/connect");

exports.adminCheckOrderUser = (req, res) => {
  let id_order = req.params.id_order;
  let sql = `call checkOrderUser(${id_order});`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });
      let order = results[0];
      if (order.length) {
        return res.status(200).send({
          user: {
            name: order[0].name,
            email: order[0].email,
            phone_number: order[0].phone_number
          },
          order: {
            title: order[0].title,
            date: order[0].date,
            time: order[0].time,
            seat: order[0].id_seat
          },
          status: order[0].status,
          message: "Success"
        });
      }
      res.status(404).send({
        error: "Can not found!"
      });
    });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
