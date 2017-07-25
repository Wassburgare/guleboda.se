import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class WeekRow extends Component {
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  }

  onMouseLeave = () => {
    this.props.onMouseLeave(this.props.index);
  }

  onClick = () => {
    this.props.onClick(this.props.weekNumber, this.props.year);
  }

  render = () =>
    (
      <ul
        className={classNames('week-row', {
          'prev-booked': this.props.isPrevBooked,
          booked: this.props.isBooked,
          'next-booked': this.props.isNextBooked,
          hovered: this.props.index === this.props.hoverIndex,
          'next-hovered': this.props.index + 1 === this.props.hoverIndex,
        })}
      >
        <div
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
          role="button"
          tabIndex="0"
        >
          <li className="week-number">
            <span>{this.props.weekNumber}</span>
          </li>
          {this.props.items}
        </div>
      </ul>
    );
}

WeekRow.defaultProps = {
  hoverIndex: -1,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
};

WeekRow.propTypes = {
  index: PropTypes.number.isRequired,
  weekNumber: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  hoverIndex: PropTypes.number,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number,
      year: PropTypes.number,
    }),
  ).isRequired,

  isPrevBooked: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
  isNextBooked: PropTypes.bool.isRequired,

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
};

export default WeekRow;
