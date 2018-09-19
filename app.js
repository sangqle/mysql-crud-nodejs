const express = require('express');

const App = express(); // create app by express.

App.get('/', (req, res) => {
    res.send('hello world');
})

module.exports = {App};