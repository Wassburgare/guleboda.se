export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKINGS':
      return { ...state };
    case 'FETCH_BOOKINGS_SUCCESS':
      console.log(action);
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
