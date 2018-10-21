const { pool } = require('../../src/mysql/connect');

exports.addMovie = (req, res) => {
    const { title, director, released, length, price, data } = req.body;
    let dataString = JSON.stringify(data);

    let sql = `call add_movie('${title}', '${director}', ${released}, ${length}, ${price}, '${dataString}');`;

    try {
        pool.query(sql, (error, results, feilds) => {
            if (error) {
                return res.status(400).send({ error });
            }
            if (results.affectedRows) {
                res.status(200).send({
                    "results": results,
                    "query": { title, director, released, length, price, data }
                });
            } else {
                res.status(400).send({
                    "message": "Nothing to change."
                });
            }
        })
    } catch (error) {
        res.status(400).send({ error });
    }
}