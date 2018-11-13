const { pool } = require("../../mysql/connect");
const uuid = require("uuid/v4");
exports.userBooking = (req, res) => {
  if (req.user.role !== "user")
    return res.send({ message: "Please login as customer" });
  var { id_movie, id_date, id_time, id_seat } = req.body;
  var id_user = req.user.id_user;
  const seatedJson = JSON.stringify(id_seat);

  let orders = [];
  const promise = new Promise((resolve, reject) => {
    for (seat of id_seat) {
      id_order = uuid();
      let sql = `call datVe('${id_order}', ${id_user}, ${id_movie}, ${id_date}, ${id_time}, ${seat});`;
      try {
        pool.query(sql, (error, results, fields) => {
          if (error) {
            reject(error);
          }
          let data = JSON.stringify(results[0][0]);
          order.push(data);
        });
      } catch (error) {
        reject(error);
      }
    }
  });

  console.log(orders);
  res.status(200).send({
    order: orders
  });
};
