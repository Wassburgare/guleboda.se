import bookshelf from './';
import { Booking } from './models';

exports.Bookings = bookshelf.Collection.extend({
  model: Booking,
});
