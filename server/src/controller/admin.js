const { pool } = require("../../src/mysql/connect");

exports.addMovie = (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    const { title, director, released, length, price, data, imageUrl } = req.body;
    let dataString = JSON.stringify(data);
    let sql = `call add_movie('${title}', '${director}', ${released}, ${length}, ${price}, '${imageUrl}','${dataString}');`;
    try {
      pool.query(sql, (error, results, feilds) => {
        if (error) {
          return res.status(400).send({ error });
        }
        if (results.affectedRows) {
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
  } else {
    res.redirect('/admin/login');
  }
};

exports.getAllOrder = (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
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
  } else {
    res.redirect('/admin/login');
  }
};

exports.getAllOrderByDate = (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    let date = req.params.date;
    let sql = `call admin_getAllOrderByDate(${date});`;
    try {
      pool.query(sql, (error, results, feilds) => {
        if (error) return res.status(400).send({ error });
        let order = results[0];
        res.status(200).send({
          instance: order.length,
          order: order
        });
      });
    } catch (error) { return res.status(400).send({ error }) }
  } else {
    res.redirect('/admin/login');
  }
};
