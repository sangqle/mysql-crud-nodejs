const { pool } = require("../../mysql/connect");

exports.userBooking = (req, res) => {
    if (req.user.role !== "user")
      return res.send({ message: "Please login as customer" });
    var { id_movie, id_date, id_time, id_seat } = req.body;
    var id_user = req.user.id_user;
    const seatedJson = JSON.stringify(id_seat);
    let sql = `call datVe(${id_user}, ${id_movie}, ${id_date}, ${id_time}, '${seatedJson}');`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return res.status(400).send({ error });
        }
        let orders = [];
        for (order of results[0]) {
          if (id_seat.includes(order.id_seat)) orders.push(order);
        }
        res.status(200).send({
          order: orders
        });
      });
    } catch (error) {
      res.status(400).send({ error });
    }
  };