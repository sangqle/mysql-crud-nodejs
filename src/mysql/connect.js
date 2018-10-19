let mysql = require('mysql');
let  {config}  = require('./config');

let connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) throw err.message;
    console.log('Connected to Mysql server');
});

module.exports = { connection };
