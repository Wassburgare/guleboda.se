export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKINGS':
      return { ...state };
    case 'FETCH_BOOKINGS_SUCCESS':
      return { ...state, list: action.payload };
    case 'CREATE_BOOKING_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'DELETE_BOOKING_SUCCESS':
      return {
        ...state,
        list: state.list.filter(booking =>
          !(booking.week === action.payload.week && booking.year === action.payload.year),
        ),
      };
    default:
      return state;
  }
};
