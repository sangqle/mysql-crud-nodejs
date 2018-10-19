const { connection } = require('../../src/mysql/connect');

exports.addAccount = (req, res) => {
	const dataPost2 = {
		name: "le quang sang",
		email: "sang.lequang@gmail.com",
		password: "pass222",
		sdt: "09899697979"
	};
	const dataPost = req.body;
	let sql = `call themNguoiDung('${dataPost.name}', '${dataPost.email}', '${dataPost.password}', '${dataPost.sdt}');`;
	
	try {
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return res.status(400).send({error});
			}
			res.status(200).send({ results: results, data: dataPost, fields: fields });
		})
	} catch (error) {
		res.status(400).send({ error });
	}
}
// user request all movie
exports.getAllMovie = (req, res) => {
	let sql = `call chonPhim();`;
	try {
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return res.status(400).send({error});
			}
			res.status(200).send({results});
		})
	} catch (error) {
		res.status(400).send({ error });
	}
};

exports.getAllDateOfMovie = (req, res) => {
    let sql = `call chonNgayXem(${id_movie});`;
	try {
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return res.status(400).send({error});
			}
			res.status(200).send({results});
		})
	} catch (error) {
		res.status(400).send({ error });
	}
};

exports.getAllTimeOfDateInMovie = (req, res) => {
	res.send('All the time of date in this moive');
};