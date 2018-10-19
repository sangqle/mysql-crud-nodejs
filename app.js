const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./src/controller/user');

const App = express(); // create app by express.
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Route
App.get('/', (req, res) => {
	res.send('hello world');
});
App.post('/add/user', userController.addAccount); // complete.
App.get('/get/movie/all', userController.getAllMovie); // complete
App.get('/get/date/:idmovie', userController.getAllDateOfMovie);
// user get all the time of date of the moive;
App.get('/get/time/:idmovie/:iddate', userController.getAllTimeOfDateInMovie);

// user booking
App.post('/booking', (req, res) => {
	res.send('Booking');
});

// user view thier order
App.get('/user/view/order', (req, res) => {
	res.send('History order');
});

// user update seat
App.post('/user/update/booking', (req, res) => {
	res.send('User update thier booking');
});

// User delete booking
App.delete('/user/delete/booking', (req, res) => {
	res.send('User delelte booking');
});

// User choose seat.


module.exports = { App };