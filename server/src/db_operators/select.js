//const { connection } = require('../mysql/connect');

const selectAll = (connection, table_name) =>
  new Promise((resolve, reject) => {
    try {
      let sql = `SELECT * FROM ${table_name}`;
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });

const selectAllJoin = (connection, table_name1, table_name2, mave) =>
  new Promise((resolve, reject) => {
    try {
      let sql = `SELECT * 
                FROM ${table_name1} a, ${table_name2} b
                WHERE a.mave = b.mave && a.mave = '${mave}'`;
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });

// selectAllJoin('ve', 'book', 'ct01').then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err.toString());
// });
module.exports = { selectAll, selectAllJoin };
