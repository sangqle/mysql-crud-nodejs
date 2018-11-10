const { pool } = require("../../mysql/connect");
const bcrypt = require("bcrypt");

exports.userPostCreateAccount = (req, res) => {
  let { email, password, name, sdt } = req.body;
  let vError = {};
  if (name && name.length < 2) {
    vError.eName = "Name required 2 character.";
  }
  if (password && (password.length < 8 || password > 32)) {
    vError.ePassword = "Password requied 8 character.";
  }
  if (sdt && (sdt.length < 10 || sdt.length > 15)) {
    vError.ePhone = "PhoneNumber requied 10 character.";
  }
  if (Object.keys(vError).length) {
    return res.status(400).json({ error: vError });
  }

  if (email && password && name && sdt) {

    name = name
      .split(/\s+/)
      .join(" ")
      .trim();
    email = email
      .split(/\s+/)
      .join('')
      .trim();
    sdt = sdt
      .split(/\s+/)
      .join('')
      .trim();

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
