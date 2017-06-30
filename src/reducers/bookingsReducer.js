export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKINGS':
      return { ...state };
    case 'FETCH_BOOKINGS_SUCCESS':
      return { ...state, bookings: action.payload };
    default:
      return state;
  }
};
