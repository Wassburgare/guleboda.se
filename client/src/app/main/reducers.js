import { combineReducers } from 'redux';

import locale from 'src/translations/localeReducer';
import bookings from 'src/bookings/bookingsReducer';

export default combineReducers({
  locale,
  bookings,
});
