const jwt = require("jsonwebtoken");
const { pool } = require("../mysql/connect");
const authentication = (req, res, next) => {
  const token = req.header("x-auth");
  jwt.verify(token, "secure", (err, tokenDecode) => {
    if (err) {
      err.announced = "Please login to try again";
      return res.send({ err });
    }
    let sql = `call userLogin('${tokenDecode.email}')`;
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
          return res.send({ message: `Email:  '${email}' is not exist` });
        }
        if (
          tokenDecode.id_user === user.id_user &&
          tokenDecode.name === user.name &&
          tokenDecode.email === user.email &&
          tokenDecode.role === user.role
        ) {
          req.token = token;
          req.user = user;
          next();
        }
      });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  });
};

module.exports = { authentication };
