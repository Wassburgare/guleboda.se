const bookshelf = require('./');
const Booking = require('./models').Booking;

exports.Bookings = bookshelf.Collection.extend({
  model: Booking,
});
