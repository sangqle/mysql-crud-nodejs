const { pool } = require("../../mysql/connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userPostLogin = (req, res) => {
  const { email } = req.body;
  let sql = `call userLogin('${email}')`;
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
      const user = results[0][0];
      if (!user) {
        return res.send({
          error: 404,
          message: `Email:  '${email}' is not exist`
        });
      }
      bcrypt
        .compare(req.body.password + "secure", user.password)
        .then(check => {
          if (check) {
            const token = jwt.sign(
              {
                id_user: user.id_user,
                name: user.name,
                email: user.email,
                role: user.role
              },
              "secure"
            );
            return res
              .status(200)
              .header("x-auth", token)
              .send({
                id_user: user.id_user,
                name: user.name,
                email: user.email,
                role: user.role,
                token: token
              });
          } else {
            res.status(400).send({error: 400, message: "Password is incorrect"})
          }
        }, (error) => {
          res.status(400).send({ error });
        });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
