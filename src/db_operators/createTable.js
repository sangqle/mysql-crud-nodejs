const { connection } = require('../mysql/connect');

const createTable = (table_name) => {
    var sql = `CREATE TABLE ${table_name} (mave VARCHAR(8), hoten VARCHAR(50), sdt VARCHAR(30), thoigian VARCHAR(40))`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

}

createTable('book');
module.exports = { createTable };