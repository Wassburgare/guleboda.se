const bookshelf = require('../src/bookshelf');
const User = require('../src/bookshelf/models').User;
const Booking = require('../src/bookshelf/models').Booking;

const resetBookingsTable = () => {
  bookshelf.knex.schema.dropTableIfExists('bookings').then(() => {
    console.log('Table "bookings" dropped');
    return bookshelf.knex.schema.createTable('bookings', (table) => {
      table.increments();
      table.integer('week');
      table.integer('year');
      table.unique(['week', 'year']);
      table.boolean('active');
      table.timestamps();
    });
  }).then(() => {
    console.log('Table "bookings" created');
    return Promise.resolve();
  });
}

const resetUsersTable = () => {
  bookshelf.knex.schema.dropTableIfExists('users').then(() => {
    console.log('Table "users" dropped');
    return bookshelf.knex.schema.createTable('users', (table) => {
      table.increments();
      table.text('email');
      table.text('hash');
      table.unique('email');
      table.timestamps();
    });
  }).then(() => {
    console.log('Table "users" created');
    return Promise.resolve();
  });
}

const resetSessionsTable = () => {
  bookshelf.knex.schema.dropTableIfExists('sessions').then(() => {
    console.log('Table "sessions" dropped');
    return bookshelf.knex.schema.createTable('sessions', (table) => {
      table.increments();
      table.integer('user_id');
      table.text('token');
      table.timestamp('expires');
      table.timestamps();
    });
  }).then(() => {
    console.log('Table "sessions" created');
    return Promise.resolve();
  });
}

const createUser = (email, password) => {
  User.create(email, password).then(() => {
    bookshelf.knex.destroy(bookshelf);
  });
}

const createBooking = (week, year) => {
  Booking.forge({ week, year }).save().then(() => {
    bookshelf.knex.destroy(bookshelf);
  });
}

exports.resetBookingsTable = resetBookingsTable;
exports.resetUsersTable = resetUsersTable;
exports.resetSessionsTable = resetSessionsTable;
exports.createUser = createUser;
exports.createBooking = createBooking;
