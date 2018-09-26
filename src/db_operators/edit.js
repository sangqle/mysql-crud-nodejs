//const { connection } = require('../mysql/connect');
const editTick = (connection, table_name, data) => new Promise((resolve, reject) => {
	let sql = `UPDATE ${table_name}
            SET mave = '${data.mave}', tenve = '${data.tenve}', giave = '${data.giave}'
            WHERE mave = '${data.where}'`;
	connection.query(sql, (err, result) => {
		if (err) {
			reject(err);
		}
		resolve(result);
	})
});

module.exports = { editTick };