import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from 'src/calendar/Calendar';
import { fetchBookings } from 'src/bookings/actions';

import './Book.scss';

class Book extends Component {
  componentWillMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      <div className="book">
        <a name="book" >
          <h2>
            <FormattedMessage
              id={'Book.heading'}
              defaultMessage={'Book'}
            />
          </h2>
        </a>
        <hr />
        <p>
          <FormattedMessage
            id={'Book.desc.price'}
            defaultMessage={'Price.'}
          />
        </p>
        <p>
          <FormattedMessage
            id={'Book.desc.time'}
            defaultMessage={'Time.'}
          />
        </p>
        <p>
          <FormattedMessage
            id={'Book.desc.cleaning'}
            defaultMessage={'Cleaning.'}
          />
        </p>
        <Calendar />
        <p className="contact">
          <FormattedMessage
            id={'Book.desc.contact'}
            defaultMessage={'Contact.'}
          />
          <a className="tel" href="tel:+46-703-43-98-45">+46 703 43 98 45</a>
        </p>
        <p className="bankgiro">
          <FormattedMessage
            id={'Book.desc.bankgiro'}
            defaultMessage={'Bank giro.'}
          />
          <span className="bg-number">8006-9,644 002 211-6</span>
        </p>
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
