const bookshelf = require('./');

exports.Booking = bookshelf.Model.extend({
  tableName: 'bookings',
});
