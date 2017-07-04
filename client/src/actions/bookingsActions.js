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
