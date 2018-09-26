const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./src/mysql/connect');

const { selectAll, selectAllJoin } = require('./src/db_operators/select');
const { insertOne } = require('./src/db_operators/insert');
const { editTick } = require('./src/db_operators/edit');

const App = express(); // create app by express.
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Xem tinh trang dat hang cua toan bo ve
App.get('/bookstatus', (req, res) => {
  selectAll(connection, 've')
    .then((data) => {
      if (!data.length) {
        return res.status(400).send({
          message: 'Can not found'
        });
      }
      res.send({ data }); // array
    })
    .catch((error) => {
      res.status(400).send({ error });
    });
});
// Them mot ve vao trong co so du lieu
App.post('/admin/add', (req, res) => {
  const { mave, tenve, giave } = req.body;
  const data = { mave, tenve, giave };
  insertOne(connection, 've', data)
    .then((result) => {
      res.status(200).send({ result, data });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});
// Sua thong tin ve xe cua admin 
App.patch('/admin/update', (req, res) => {
  const { mave, tenve, giave, where } = req.body;
  const data = { mave, tenve, giave, where };
  editTick(connection, 've', data)
    .then((result) => {
      res.status(200).send({ result, data });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});
// Xoa ve onlline
App.delete('/admin/delete', (req, res) => {
    
});

// hien thi thong tin chi tiet cua mot loai ve, co bao nhieu khac hang dat va thong tin khach
App.get('/bookstatus/:mave', (req, res) => {
  const mave = req.params.mave;
  selectAllJoin(connection, 've', 'book', mave)
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((error) => {
      res.status(400).send({ error });
    });
});

// Khach hang tien hanh dat ve
App.post('/book', (req, res) => {
  const { mave, hoten, sdt, thoigian } = req.body;
  const data = { mave, hoten, sdt, thoigian };
  insertOne(connection, 'book', data)
    .then((result) => {
      res.status(200).send({ result, data });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});


module.exports = { App };