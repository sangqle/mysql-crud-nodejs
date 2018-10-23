const { connection } = require("../mysql/connect");

const createDatabse = (table_name, fields) => {
  connection.query("CREATE DATABASE mydb", function(err, result) {
    if (err) throw err.message;
    console.log("Database created");
  });
};

module.exports = { createDatabse };
