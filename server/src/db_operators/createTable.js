const { connection } = require("../mysql/connect");

const createTableBook = (connection, table_name) =>
  new Promise((resolve, reject) => {
    try {
      var sql = `CREATE TABLE ${table_name} (
                   mave VARCHAR(8),
                   hoten VARCHAR(50),
                   sdt VARCHAR(30),
                   thoigian VARCHAR(40),
                   FOREIGN KEY(mave) references Ve (mave))
                   `;
      connection.query(sql, function(err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });

const createTableTick = (connection, table_name) =>
  new Promise((resolve, reject) => {
    try {
      var sql = `CREATE TABLE ${table_name} (mave VARCHAR(8), tenve VARCHAR(50), giave int`;
      connection.query(sql, function(err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });

createTableBook(connection, "ld02").then(data => {
  console.log(data);
});
module.exports = { createTableBook, createTableTick };
