//const { connection } = require('../mysql/connect');
const editTick = (connection, table_name, data) =>
  new Promise((resolve, reject) => {
    let sql = `UPDATE ${table_name}
			   SET mave = '${data.mave}',
			   	   tenve = '${data.tenve}',
			       giave = '${data.giave}'
               WHERE mave = '${data.mave}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

const editBook = (connection, table_name, data) =>
  new Promise((resolve, reject) => {
    let sql = `UPDATE ${table_name}
			   SET mave = '${data.new_mave}',
				   hoten = '${data.new_hoten}',
				   sdt = '${data.new_sdt}',
				   thoigian = '${data.new_thoigian}'
			   WHERE mave = '${data.mave}' && sdt = '${data.sdt}'`;
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
module.exports = { editTick, editBook };
