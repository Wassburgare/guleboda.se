import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/sv';

import WeekRow from './WeekRow';
import previousIcon from './ic_navigate_before_black_24px.svg';
import nextIcon from './ic_navigate_next_black_24px.svg';
import './Calendar.css';

const mod = (n, m) => ((n % m) + m) % m;

moment.locale();

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      hoverIndex: null,
    };
  }

  onMouseEnter = (index) => {
    this.setState({ hoverIndex: index });
  }

  onMouseLeave = () => {
    this.setState({ hoverIndex: null });
  }

  onWeekClick = (week) => {
    if (this.props.onWeekClick) {
      this.props.onWeekClick(week);
    }
  }

  getWeeks = (date) => {
    const firstWeekDay = mod(moment(date).date(1).day() - 1, 7);
    const lastWeekDay = mod(moment(date).endOf('month').day() - 1, 7);

    const currentMonthEndDate = parseInt(moment(date).endOf('month').format('D'), 10);
    const lastMonthEndDate = parseInt(moment(date).subtract(1, 'months').endOf('month').format('D'), 10);

    const listItems = [];

    // Dates in last month
    for (let i = (lastMonthEndDate - firstWeekDay) + 1; i <= lastMonthEndDate; i += 1) {
      listItems.push(
        <li
          className="not-in-month"
          key={listItems.length}
        >
          <span>{i}</span>
        </li>,
      );
    }
    // Dates in current month
    for (let i = 1; i < currentMonthEndDate + 1; i += 1) {
      listItems.push(
        <li key={listItems.length}>
          <span>{i}</span>
        </li>,
      );
    }
    // Dates in next month
    for (let i = 1; i < 7 - lastWeekDay; i += 1) {
      listItems.push(
        <li
          className="not-in-month"
          key={listItems.length}
        >
          <span>{i}</span>
        </li>,
      );
    }

    const year = moment(date).year();
    let week = moment(date).date(1).isoWeek();
    let index = 0;

    const lists = [];
    while (listItems.length) {
      lists.push(
        <WeekRow
          isPrevBooked={this.isBooked(year, week - 1)}
          isBooked={this.isBooked(year, week)}
          isNextBooked={this.isBooked(year, week + 1)}
          weekNumber={week += 1}
          items={listItems.splice(0, 7)}
          index={index += 1}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          hoverIndex={this.state.hoverIndex}
          onClick={this.onWeekClick}
          key={lists.length}
        />,
      );
    }

    return lists;
  };

  getWeekdays = () => {
    const weekdays = moment.weekdaysShort();
    weekdays.push(weekdays.shift());

    return weekdays.map(day => <li key={day}>{day}</li>);
  }

  isBooked = (year, week) =>
    this.props.bookings.some(obj =>
      obj.year === year && obj.week === week,
    );

  nextMonth = () => {
    const date = moment(this.state.date).add(1, 'months');
    this.setState({ date });
  }

  previousMonth = () => {
    const date = moment(this.state.date).subtract(1, 'months');
    this.setState({ date });
  }

  render = () =>
    (
      <div className={classNames('calendar', { bookable: this.props.canBook })}>
        <div className="month-selector">
          <input
            type="image"
            src={previousIcon}
            alt="Previous month"
            tabIndex="0"
            onClick={this.previousMonth}
          />
          <span>{this.state.date.format('MMMM Y')}</span>
          <input
            type="image"
            src={nextIcon}
            alt="Next month"
            tabIndex="0"
            onClick={this.nextMonth}
          />
        </div>
        <ul className="weekdays">
          <li>-</li>
          { this.getWeekdays() }
        </ul>
        { this.getWeeks(this.state.date) }
      </div>
    );
}

Calendar.defaultProps = {
  bookings: [],
  onWeekClick: () => {},
  canBook: false,
};

Calendar.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number,
      year: PropTypes.number,
    }),
  ),
  onWeekClick: PropTypes.func,
  canBook: PropTypes.bool,
};

const mapStateToProps = state => state.bookings;

export default connect(mapStateToProps)(Calendar);
