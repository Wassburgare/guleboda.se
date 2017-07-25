import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from 'src/calendar/Calendar';
import { fetchBookings } from 'src/bookings/actions';

class Book extends Component {
  componentWillMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

Book.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchBookings }, dispatch);

export default connect(null, mapDispatchToProps)(Book);
