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
            defaultMessage={'For June, July and August, as well as week 51, 52 and 53, the price is 6000 SEK/week. For all other weeks of the year, the price is 4000 SEK/week.'}
          />
        </p>
        <p>
          <FormattedMessage
            id={'Book.desc.time'}
            defaultMessage={'Day of change are Sundays, leave by 11:00 at the latest and access by 15:00.'}
          />
        </p>
        <p>
          <FormattedMessage
            id={'Book.desc.cleaning'}
            defaultMessage={'The house and the area around the house must be clean upon leaving. If cleaning help is desired an extra cost of 1500 SEK will be added. Cleaning help must be reported two days before leaving. If cleaning is deemed unsufficient, a cost of 1500 SEK for cleaning help will be added.'}
          />
        </p>
        <Calendar />
        <p className="contact">
          <FormattedMessage
            id={'Book.desc.contact'}
            defaultMessage={'To book, contact Anders at:'}
          />
          <a className="tel" href="tel:+46-703-43-98-45">+46 703 43 98 45</a>
        </p>
        <p className="bankgiro">
          <FormattedMessage
            id={'Book.desc.bankgiro'}
            defaultMessage={'The booking is confirmed once an advance payment of 1000 SEK has been made to bank account:'}
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
