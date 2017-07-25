const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const moment = require('moment');

const Bookings = require('./bookshelf/collections').Bookings;
const User = require('./bookshelf/models').User;
const Session = require('./bookshelf/models').Session;

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bookings', (req, res) => {
  Bookings.forge().fetch({ columns: ['week', 'year'] }).then((bookings) => {
    res.json(bookings);
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';

  responseBody = { success: true };

  User.login(email, password).tapCatch(() => {
    responseBody.error = 'invalid_login';
  }).tapCatch(User.NotFoundError, () => {
    responseBody.error = 'not_found';
  }).then((user) => {
    return Session.create(user.get('id'));
  }).then((session) => {
    const cookieOptions = { httpOnly: true };
    if (req.body.remember_me) {
      cookieOptions.expires = session.get('expires');
    }
    res.cookie('token', session.get('token'), cookieOptions);
  }).catch((e) => {
    // console.log(e);
    res.status(401);
    responseBody.success = false;
  }).finally(() => {
    res.setHeader('Content-Type', 'application/json');
    res.send(responseBody);
  });
});

app.post('/auth', (req, res) => {
  const token = req.cookies.token || '';

  responseBody = { success: true }

  Session.auth(token).catch((e) => {
    // console.log(e);
    res.status(401);
    responseBody.success = false;
  }).finally(() => {
    res.setHeader('Content-Type', 'application/json');
    res.send(responseBody);
  });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
