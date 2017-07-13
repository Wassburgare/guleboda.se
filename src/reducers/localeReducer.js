export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
