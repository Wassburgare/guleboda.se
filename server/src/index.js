import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import moment from 'moment';

import { User } from './bookshelf/models';
import { Session } from './bookshelf/models';
import { Booking } from './bookshelf/models';

import { Bookings } from './bookshelf/collections';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bookings', (req, res) => {
  Booking.where({ active: true }).fetchAll({ columns: ['week', 'year'] }).then((bookings) => {
    res.json(bookings);
  });
});

app.post('/bookings', (req, res) => {
  const token = req.cookies.token || '';

  const week = req.body.week;
  const year = req.body.year;

  const responseBody = { success: true };

  Session.auth(token).then(() => {
    if (req.body.type === 'create') {
      return Booking.create(week, year);
    } else if (req.body.type === 'delete') {
      return Booking.delete(week, year);
    }
  }).catch((e) => {
    // console.log(e);
    res.status(401);
    responseBody.success = false;
  }).finally(() => {
    res.setHeader('Content-Type', 'application/json');
    res.send(responseBody);
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';

  const responseBody = { success: true };

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

  const responseBody = { success: true }

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
