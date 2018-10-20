var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'test',
  insecureAuth: true
});
// create databse
const createDatabse = async (dataBaseName) => {
  await connection.connect((err) => {
    if (err) {
      throw err.toString();
    }
    console.log("connected");
    let sql = `create database ${dataBaseName}`;
    connection.query(sql, (err, result) => {
      if (err) throw err.toString();
      console.log(`Database ${dataBaseName} is created!`);
    });
  });
}
// createDatabse('dbSang');
// // create talbe

const createTable = async (tableName) => {
  connection.connect((err) => {
    if (err) {
      throw err.toString();
    }
    console.log("connected");
    let sql = `CREATE TABLE nhanien 
              (name VARCHAR(255), address VARCHAR(255))`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Table created");
    });
  })
}

const test = async () =>{
  //await createDatabse('test');
  await createTable('test');
}
test();
// var sql = "select * from hocphan";
// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   connection.query(sql , function (err, result) {
//     if (err) throw err;
//     for(let i = 0; i < result.length; i++) {
//       console.log(result[i]);
//     }
//   });
// });