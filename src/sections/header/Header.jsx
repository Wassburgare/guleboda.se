import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>
          <FormattedMessage
            id={'Header.main'}
            defaultMessage={'Summer house by the lake'}
          />
        </h1>
        <p>
          <FormattedMessage
            id={'Header.sub'}
            defaultMessage={'Rent a summer house in idyllic Småland, only 50 meters from the lake'}
          />
        </p>
      </div>
    );
  }
}

export default Header;
