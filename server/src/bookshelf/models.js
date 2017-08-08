import bookshelf from './';
import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

const Booking = bookshelf.Model.extend({
  tableName: 'bookings',
  hasTimestamps: true,
}, {
  create: (week, year) => {
    return new Booking({
      week,
      year,
    }).fetch({ require: true }).then((booking) => {
      return booking.save({ active: true }, { patch: true });
    }).tap((booking) => {
      console.log('Booking marked as active:', booking.get('week'), booking.get('year'));
    }).catch(Booking.NotFoundError, () => {
      return new Booking({
        week,
        year,
        active: true,
      }).save();
    }).tap((booking) => {
      console.log('Booking created:', booking.get('week'), booking.get('year'));
    });
  },

  delete: (week, year) => {
    return Booking
      .where({ week, year})
      .save({ active: false }, { patch: true })
      .tap((booking) => {
        console.log('Booking marked as inactive:', week, year);
      });
  },
});

const Session = bookshelf.Model.extend({
  tableName: 'sessions',
  hasTimestamps: true,
}, {
  create: (userId) => {
    return Session.forge({
      user_id: userId,
      token: uuidv4(),
      expires: moment().add(2, 'month').toDate(),
    }).save().tap((session) => {
      console.log('Session saved:', session.get('user_id'), session.get('token'));
    });
  },

  auth: (token) => {
    return new Session({
      token,
    }).where('expires', '>=', new Date()).fetch({ require: true }).tap((session) => {
      console.log('Session found:', session.get('token'), session.get('expires'));
    });
  },
});

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
}, {
  create: (email, password) => {
    return bcrypt.hash(password, 10).then((hash) => {
      return User.forge({
        email,
        hash,
      }).save();
    }).then((user) => {
      console.log('User saved:', user.get('email'));
      return Promise.resolve();
    });
  },

  login: (email, password) => {
    return new User({ email: email.toLowerCase().trim() }).fetch({ require: true }).tap((user) => {
      return bcrypt.compare(password, user.get('hash')).then((res) => {
        if (!res) {
          throw new Error('Invalid password');
        }
      });
    });
  },
});

export { Booking, User, Session };
