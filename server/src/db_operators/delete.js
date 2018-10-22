//const { connection } = require('../mysql/connect');

const deleteOne = (connection, table_name, field, where) =>
  new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${table_name}
               WHERE ${field} = '${where}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

const deleteBook = (connection, table_name, field1, where1, field2, where2) =>
  new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${table_name}
               WHERE ${field1} = '${where1}' && ${field2} = '${where2}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      if (result) {
        if (result.affectedRows) resolve(result);
        else reject("Can not update check of your data");
      } else reject("Can not update check of your data");
    });
  });

module.exports = { deleteOne, deleteBook };
