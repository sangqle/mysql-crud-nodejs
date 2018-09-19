const { connection } = require('../mysql/connect');

const insert_table = (table_name, data) => {

    let entity = Object.keys(data).map(key => { return [`"${data[key]}"`] }); // must '"property"'
    let fields = Object.keys(data); // take property for fields
    //console.log(fields);
    let stmt = `INSERT INTO ${table_name} (${fields}) VALUES (${entity})`;
    connection.query(stmt, data, (err, result, fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(data);
        return result;
    });

}

let data = {
    mssv: '555',
    maHP: 'ctu9',
}
insert_table('ketqua', data);

module.exports = { insert_table };