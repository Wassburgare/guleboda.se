import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Book.css';
import Calendar from '../../calendar/Calendar';

import { fetchBookings } from '../../actions/bookingsActions';

class Book extends Component {
  componentWillMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      <div className="book">
        <h2>
          <FormattedMessage
            id={'Book.heading'}
            defaultMessage={'Book'}
          />
        </h2>
        <hr />
        <Lorem count="2" />
        <Calendar />
        <Lorem count="1" />
      </div>
    );
  }
}

Book.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchBookings }, dispatch);

export default injectIntl(
  connect(null, mapDispatchToProps)(Book),
);