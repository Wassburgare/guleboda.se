import { combineReducers } from 'redux';

import locale from 'src/locale/localeReducer';
import bookings from 'src/bookings/bookingsReducer';

export default combineReducers({
  locale,
  bookings,
});
