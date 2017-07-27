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
    DbConnection.createBooking(booking.week, booking.year, (response) => {
      if (response.success === true) {
        dispatch({
          type: 'CREATE_BOOKING_SUCCESS',
          payload: booking,
        });
      } else {
        dispatch({
          type: 'CREATE_BOOKING_FAIL',
          payload: booking,
        });
      }
    });
  };

export const deleteBooking = booking =>
  (dispatch) => {
    DbConnection.deleteBooking(booking.week, booking.year, (response) => {
      if (response.success === true) {
        dispatch({
          type: 'DELETE_BOOKING_SUCCESS',
          payload: booking,
        });
      } else {
        dispatch({
          type: 'DELETE_BOOKING_FAIL',
          payload: booking,
        });
      }
    });
  };
