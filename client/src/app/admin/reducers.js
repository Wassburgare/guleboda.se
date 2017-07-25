import { combineReducers } from 'redux';

import locale from 'src/locale/reducer';
import bookings from 'src/bookings/reducer';

export default combineReducers({
  locale,
  bookings,
});
