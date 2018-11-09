const { pool } = require("../../src/mysql/connect");
const cache_system = require("../cache_system/cache_movies");
exports.addMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({ message: "Please try to login as Admin" });
  const { title, director, released, length, price, imageUrl, data } = req.body;
  const dataJson = JSON.stringify(data);
  let sql = `call add_movie('${title}', '${director}', ${released}, ${length}, ${price}, '${imageUrl}','${dataJson}');`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) {
        return res.status(400).send({ error });
      }
      if (results.affectedRows) {
        cache_system.movies = [];
        res.status(200).send({
          results: results,
          query: { title, director, released, length, price, data }
        });
      } else {
        res.status(400).send({
          message: "Nothing to change."
        });
      }
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.admin_deleteMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let id_movie = req.params.id_movie;
  let sql = `call admin_deleteMovie(${id_movie})`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });
      if (results.affectedRows) {
        cache_system.movies = [];
        return res.status(200).send({ message: "Thanh Cong" });
      } else {
        return res.status(404).send({ error: "Can not found." });
      }
    });
  } catch (error) {
    if (error) return res.status(400).send({ error });
  }
};

exports.getAllOrder = (req, res) => {
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

exports.getAllOrderByMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let id_movie = req.params.id_movie;
  let sql = `call admin_getAllOrderByMovie(${id_movie});
              select count (id_order) as n_order from reservation;`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });

      let order = results[0];
      let data = {
        n_order: results[2][0].n_order,
        instance: order.length,
        ratio_order: order.length / results[2][0].n_order,
        order: order
      };
      res.status(200).send(data);
    });
  } catch (error) {
    if (error) return res.status(400).send({ error });
  }
};

exports.getAllOrderByTime = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let { s_time, e_time } = req.params;
  let sql = `call admin_getAllOrderByTime(${s_time}, ${e_time});
            select count (id_order) as n_order from reservation;`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });

      let order = results[0];
      let data = {
        n_order: results[2][0].n_order,
        instance: order.length,
        ratio_order: order.length / results[2][0].n_order,
        order: order
      };
      res.status(200).send(data);
    });
  } catch (error) {
    if (error) return res.status(400).send({ error });
  }
};

exports.getAllOrderByDate = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please login as Admin"
    });
  let date = req.params.date;
  let sql = `call admin_getAllOrderByDate(${date});
              select count (id_order) as n_order from reservation;`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });
      let order = results[0];
      let data = {
        n_order: results[2][0].n_order,
        instance: order.length,
        ratio_order: order.length / results[2][0].n_order,
        order: order
      };
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

exports.checkOrderUser = (req, res) => {
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
