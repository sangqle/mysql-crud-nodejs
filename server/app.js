const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { pool } = require('./src/mysql/connect');
const userController = require("./src/controller/user");
const adminController = require("./src/controller/admin");

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    let passwordLogin = password + 'secure';
    console.log('Inside localStrategy call back');
    let sql = `call userLogin('${email}');`;
    try {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return done(null, false);
        }
        const data = results[0][0];// return array
        if (data) {
          const user = {
            id_user: data.id_user, name: data.name, email: data.email, sdt: data.sdt
          }
          bcrypt.compare(passwordLogin, data.password, function (err, res) {
            if (res) return done(null, user);
            else return done(null, false);
          });
        } else { return done(null, false); }
      });
    } catch (error) { return done(null, false); }
  }
));

passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here');
  let token = jwt.sign(user, 'secureKey');
  done(null, token);
});
passport.deserializeUser((token, done) => {
  try {
    let userDecode = jwt.verify(token, 'secureKey');
    let sql = `select * from user where email = '${userDecode.email}';`;
    pool.query(sql, (error, results, fields) => {
      if (error) { return done(null, false); }
      const data = results[0];
      if (data) {
        const user = {
          id_user: data.id_user, name: data.name, email: data.email, sdt: data.sdt, role: data.role
        }
        if (user.email === userDecode.email && user.sdt === userDecode.sdt && user.id_user === userDecode.id_user)
          return done(null, user);
        else return done(null, false);
      } else { return done(null, false); }
    });
  } catch (error) { return done(null, false); }
});

const App = express();
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(session({
  genid: (req) => {
    console.log('Inside the session middleware');
    console.log(`Request object sessionID from client: ${req.sessionId}`);
    return uuid(); // Use UUIDs for session Ids
  },
  store: new FileStore(),
  secret: 'Keyboard cat',
  resave: false,
  saveUninitialized: true
}));

App.use(passport.initialize());
App.use(passport.session());
// Add headers
App.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

App.get('/user/login', (req, res) => {
  console.log('Inside GET /user/login callback function')
  console.log(req.sessionID);
  res.send(`You got the User login page!\n`)
});

App.post('/user/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (info) { return res.send(info.message) }
    if (err) { return next(err); }
    if (!user) { return res.redirect('/user/login'); }
    console.log('Inside passport.authenticate() Thanh Cong');
    req.login(user, (err) => {
      return res.send(user);
    })
  })(req, res, next);
});

App.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

App.get('/authrequired', (req, res) => {
  console.log('Inside GET /authrequired callback')
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if (req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n');
  } else {
    res.redirect('/')
  }
});

// Route
App.post("/user/create/account", userController.addAccount); // ok.
App.get("/user/get/all/movie", userController.getAllMovie); // ok
App.get("/user/get/date/:id_movie", userController.getAllDateOfMovie); // ok
App.get("/user/get/time/:id_movie/:id_date", userController.getAllTimeOfDateInMovie); // ok
App.get("/user/get/seated/:id_movie/:id_date/:id_time", userController.getChoNgoiDaDuocDat); // ok
App.post("/user/booking", userController.userBooking); // ok

App.get("/user/get/all/order", userController.getAllOrder); // ok
App.post("/user/delete/order", userController.deleteOrder); // ok
App.post("/user/update/seat", userController.editBooking); // ok

/*Administrator*/
App.post("/admin/add/movie", adminController.addMovie); // ok
App.get("/admin/get/all/order", adminController.getAllOrder); // ok
App.get("/admin/get/all/order/:date", adminController.getAllOrderByDate); // ok



App.get('/', (req, res) => {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID)
  res.send(`You hit home page!\n`)
})

App.get('/user', (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'user') {

    console.log('Inside the User homepage')
    console.log(req.sessionID)
    res.send(req.user)
  } else {
    res.send('you do not have permission')
  }

});

App.get('/admin', (req, res) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    console.log('Inside the Admin homepage')
    console.log(req.sessionID)
    res.send(`You hit Admin page!\n`)
  } else {
    res.send('You do not have permission')
  }
});

App.get('/admin/login', (req, res) => {
  res.send('You Got Administrator login')
})
module.exports = { App };
