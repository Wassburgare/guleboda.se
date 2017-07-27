import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from 'src/calendar/Calendar';
import { fetchBookings, createBooking, deleteBooking } from 'src/bookings/actions';

class Book extends Component {
  componentWillMount() {
    this.props.fetchBookings();
  }

  onWeekClick = (week, year) => {
    const bookingExists = this.props.bookings.some(booking =>
      week === booking.week && year === booking.year,
    );

    if (bookingExists) {
      console.log('Deleting booking:', week, year);
      this.props.deleteBooking({ week, year });
    } else {
      console.log('Creating booking:', week, year);
      this.props.createBooking({ week, year });
    }
  }

  render() {
    return (
      <div>
        <Calendar onWeekClick={this.onWeekClick} />
      </div>
    );
  }
}

Book.defaultProps = {
  bookings: [],
};

Book.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number,
      year: PropTypes.number,
    }),
  ),
  fetchBookings: PropTypes.func.isRequired,
  createBooking: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBookings,
  createBooking,
  deleteBooking,
}, dispatch);

const mapStateToProps = state => ({
  bookings: state.bookings.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
