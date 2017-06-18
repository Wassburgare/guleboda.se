import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import PropTypes from 'prop-types';
import './Book.css';
import Calendar from '../../calendar/Calendar';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h2>Boka</h2>
        <hr />
        <Lorem count="2" />
        <Calendar bookings={this.props.bookings} />
        <Lorem count="1" />
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
};

export default Book;
