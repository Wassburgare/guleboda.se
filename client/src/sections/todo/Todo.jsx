import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import { FormattedMessage, injectIntl, defineMessages, intlShape } from 'react-intl';
import './Todo.css';

const messages = defineMessages({
  korroHref: {
    id: 'Todo.korro.href',
    defaultMessage: 'http://www.korro.se',
  },
  glasriketHref: {
    id: 'Todo.glasriket.href',
    defaultMessage: 'https://www.glasriket.se/en/The-Glassworks',
  },
  kostaHref: {
    id: 'Todo.kosta.href',
    defaultMessage: 'http://www.kostaoutlet.se',
  },
  utvandrarledenHref: {
    id: 'Todo.utvandrarleden.href',
    defaultMessage: 'http://www.utvandrarleden.se/en-GB',
  },
});

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <h2>
          <FormattedMessage
            id={'Todo.heading'}
            defaultMessage={'Things to do'}
          />
        </h2>
        <hr />
        <Lorem count="1" />

        <div className="todo-item-row">
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/450/280'} alt="" />
            <h3>Korrö Hantverksby</h3>
            <Lorem count="1" />
            <a
              href={this.props.intl.formatMessage(messages.korroHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage
                id={'Todo.korro.linkText'}
                defaultMessage={'www.korro.se'}
              />
            </a>
          </div>
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/451/280'} alt="" />
            <h3>
              <FormattedMessage
                id={'Todo.glasriket.heading'}
                defaultMessage={'Kingdom of Crystal'}
              />
            </h3>
            <Lorem count="1" />
            <a
              href={this.props.intl.formatMessage(messages.glasriketHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage
                id={'Todo.glasriket.linkText'}
                defaultMessage={'www.glasriket.se/en/The-Glassworks'}
              />
            </a>
          </div>
        </div>

        <div className="todo-item-row">
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/452/280'} alt="" />
            <h3>Kosta Outlet</h3>
            <Lorem count="1" />
            <a
              href={this.props.intl.formatMessage(messages.kostaHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage
                id={'Todo.kosta.linkText'}
                defaultMessage={'www.kostaoutlet.se'}
              />
            </a>
          </div>
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/453/280'} alt="" />
            <h3>Utvandrarleden</h3>
            <Lorem count="1" />
            <a
              href={this.props.intl.formatMessage(messages.utvandrarledenHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage
                id={'Todo.utvandrarleden.linkText'}
                defaultMessage={'www.utvandrarleden.se/en-GB'}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Todo);
