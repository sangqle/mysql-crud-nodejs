const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./src/controller/user');
const adminController = require('./src/controller/admin');

const App = express(); // create app by express.
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Route
App.get('/', (req, res) => {
	res.send('hello world');
});
App.post('/user/create/account', userController.addAccount); // ok.
App.get('/user/get/all/movie', userController.getAllMovie); // ok
App.post('/user/get/all/movie/date', userController.getAllDateOfMovie); // ok
App.post('/user/get/all/movie/date/time', userController.getAllTimeOfDateInMovie); // ok
App.post('/user/get/all/movie/date/time/seat', userController.getChoNgoiDaDuocDat); // ok
App.post('/user/get/all/movie/date/time/seat/booking', userController.userBooking); // ok

App.post('/user/get/all/order', userController.getAllOrder); // ok
App.post('/user/delete/order', userController.deleteOrder); // ok
App.post('/user/update/seat', userController.editBooking); // ok

/*Administrator*/
App.post('/admin/add/movie', adminController.addMovie);
module.exports = { App };