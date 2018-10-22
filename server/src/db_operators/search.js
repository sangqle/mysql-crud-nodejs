//const { connection } = require('../mysql/connect');
const searchDb = (connection, query, table_name) =>
  new Promise((resolve, reject) => {
    let sql = `select *
               from ${table_name} a
               where a.${query.type} like '%${query.key}%';`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

module.exports = { searchDb };
// let query = {
//     key: "ng",
//     type: "hoten"
// }
// searchDb(connection, query, 'book').then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err.toString());
// })
