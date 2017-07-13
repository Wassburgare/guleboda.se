import { combineReducers } from 'redux';

import locale from './localeReducer';
import bookings from './bookingsReducer';

export default combineReducers({
  locale,
  bookings,
});
