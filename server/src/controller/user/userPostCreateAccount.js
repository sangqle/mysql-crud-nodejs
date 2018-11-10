const { pool } = require("../../mysql/connect");
const bcrypt = require("bcrypt");

exports.userPostCreateAccount = (req, res) => {
    // ok
    const { email, password, name, sdt } = req.body;
    if (email && password && name && sdt) {
      let passwordHash = password + "secure";
      bcrypt.hash(passwordHash, 10).then(function(hash) {
        let sql = `call themNguoiDung('${name}', '${email}', '${hash}', '${sdt}');`;
        try {
          pool.query(sql, (error, results, fields) => {
            if (error) {
              return res.status(400).send({
                code: error.code,
                errno: error.errno,
                sqlMessage: error.sqlMessage,
                sqlState: error.sqlState,
                index: error.index
              });
            }
            res.status(201).send({ name, email, sdt });
          });
        } catch (error) {
          res.status(400).send({ error });
        }
      });
    } else {
      return res.status(400).send({
        Message: "Require {name, email, password, sdt}",
        YourBody: Object.keys(req.body)
      });
    }
  };