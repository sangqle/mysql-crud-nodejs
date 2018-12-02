const { pool } = require("../../mysql/connect");

exports.adminCheckOrderUser = (req, res) => {
  let id_order = req.params.id_order;
  let checkoutPromise = new Promise((resolve, reject) => {
    try {
      let sql = `call checkOrderUser(${id_order});`;
      pool.query(sql, (error, results, feilds) => {
        if (error)
          return reject({
            message:
              "The error throw from adminCheckOrerUser when execute SQL statement",
            path: __filename,
            error
          });
        let order = results[0];
        if (order.length) {
          return resolve({
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
        return reject({
          error: "Can not found that order!"
        });
      });
    } catch (error) {
      return reject({
        message: "Error throw from trycatch statement at admincheckOrderUser",
        path: __filename,
        error
      });
    }
  })
    .then(data => {
      let sql = `update reservation
               set status = 'processed'
               where id_order = ${id_order}`;
      try {
        pool.query(sql, (error, results, feilds) => {
          if (error)
            return res.send({
              error
            });
          data.status = "processed";
          return res.send(data);
        });
      } catch (error) {
        return res.send({
          message: "Error throw from trycatch in promise exectue.",
          path: __filename,
          error
        });
      }
    })
    .catch(error => {
      return res.send({
        message: "The error throw from trycatch final",
        error,
        path: __filename,
      });
    });
};
