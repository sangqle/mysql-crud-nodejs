let mysql = require('mysql');
let {config} = require('./config');

let connection = mysql.createConnection(config);

connection.connect((err) => {
    if(err) {
        return console.log(err.toString());
    }
    console.log('Connected to Mysql server');
});

module.exports = {connection};
// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });
