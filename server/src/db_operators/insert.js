//const { connection } = require('../mysql/connect');

const insertOne = (connection, table_name, data) =>
  new Promise((resolve, reject) => {
    try {
      let entity = Object.keys(data).map(key => {
        return [`"${data[key]}"`];
      }); // must '"property"'
      let fields = Object.keys(data);
      let stmt = `INSERT INTO ${table_name} (${fields}) VALUES (${entity})`;
      connection.query(stmt, data, (err, result, fields) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });

// test Inset record to db
// let data = {
// 	mave: 'ct01',
// 	hoten: 'Nguyen Phuoc Dong',
// 	sdt: '035444256',
// 	thoigian: '2h30'
// }
// insertOne('book', data).then((result) => {
// 	console.log(result);
// }, (err) => {
// 	console.log(err.toString());
// }).catch((err) => {
// 	console.log(err.toString());
// });

module.exports = { insertOne };
