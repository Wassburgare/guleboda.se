import DbConnection from '../db-connection/DbConnection';

export const fetchBookings = () =>
  (dispatch) => {
    DbConnection.getBookings((bookings) => {
      dispatch({
        type: 'FETCH_BOOKINGS_SUCCESS',
        payload: bookings,
      });
    });
  };

export const createBooking = booking =>
  (dispatch) => {
    DbConnection.createBooking(booking.week, booking.year, () => {
      dispatch({
        type: 'CREATE_BOOKING_SUCCESS',
        payload: booking,
      });
    });
  };

export const deleteBooking = booking =>
  (dispatch) => {
    DbConnection.deleteBooking(booking.week, booking.year, () => {
      dispatch({
        type: 'DELETE_BOOKING_SUCCESS',
        payload: booking,
      });
    });
  };
