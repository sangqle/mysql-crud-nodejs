const { pool } = require("../../mysql/connect");
const bcrypt = require("bcrypt");

exports.userPostCreateAccount = (req, res) => {
  let { email, password, name, sdt } = req.body;
  if (email && password && name && sdt) {
    let vError = {};
    if (name.length < 2) {
      vError.eName = "Name required at least 2 character.";
    }
    if (password.length < 8 || password > 32) {
      vError.ePassword = "Password requied at least 8 character.";
    }
    if (sdt.match(/[a-z]/i) || sdt.length < 10 || sdt.length > 15) {
      vError.ePhone = "PhoneNumber requied 10 character and not contain text";
    }
    if (Object.keys(vError).length) {
      return res.status(400).json({ error: vError });
    }

    name = name
      .split(/\s+/)
      .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
      .join(" ")
      .trim();
    email = email
      .split(/\s+/)
      .join("")
      .trim()
      .toLowerCase();
    sdt = sdt
      .split(/\s+/)
      .join("")
      .trim();

    let passwordHash = password + "secure";
    bcrypt.hash(passwordHash, 10).then(function(hash) {
      let sql = `call themNguoiDung('${name}', '${email}', '${hash}', '${sdt}');`;
      try {
        pool.query(sql, (error, results, fields) => {
          if (error) {
            return res.status(400).json({
              error: {
                code: error.code,
                errno: error.errno,
                sqlMessage: error.sqlMessage,
                sqlState: error.sqlState,
                index: error.index
              }
            });
          }
          res.status(201).json({ user: { name, email, sdt } });
        });
      } catch (error) {
        res.status(400).send({ error });
      }
    });
  } else {
    return res.status(400).json({
      error: {
        Message: "Require {name, email, password, sdt}",
        YourBody: Object.keys(req.body)
      }
    });
  }
};
