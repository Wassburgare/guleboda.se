import React, { Component } from 'react';
import { FormattedMessage, injectIntl, defineMessages, intlShape } from 'react-intl';

import './Todo.scss';

import korroImg from './images/korro.jpg';
import glasriketImg from './images/glasriket.jpg';
import kostaImg from './images/kosta.jpg';
import utvandrarledenImg from './images/utvandrarleden.jpg';

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
        <a name="todo">
          <h2>
            <FormattedMessage
              id={'Todo.heading'}
              defaultMessage={'Things to do'}
            />
          </h2>
        </a>
        <hr />
        <p>
          <FormattedMessage
            id={'Todo.desc'}
            defaultMessage={'Close to the cottage are Korrö Hantverksby, numerous glassworks, Kosta Outlet and Utvandrarleden, among others. And above all, ask Anders, your host of the cottage. They have lived in the village for generations and can give much advice on things to do in this strongly traditional area.'}
          />
        </p>

        <div className="todo-item-row">
          <div className="todo-item">
            <a
              href={this.props.intl.formatMessage(messages.korroHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={korroImg} alt="" />
            </a>
            <h3>Korrö Hantverksby</h3>
            <p>
              <FormattedMessage
                id={'Todo.korro.desc'}
                defaultMessage={'Just within five kilometers is Korrö Hantverksby. This establishment is very popular and well worth a visit. There are things to do for most people.'}
              />
            </p>
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
            <a
              href={this.props.intl.formatMessage(messages.glasriketHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={glasriketImg} alt="" />
            </a>
            <h3>
              <FormattedMessage
                id={'Todo.glasriket.heading'}
                defaultMessage={'Kingdom of Crystal'}
              />
            </h3>
            <p>
              <FormattedMessage
                id={'Todo.glasriket.desc'}
                defaultMessage={'Visit glassworks in Småland. We are located right in the middle of all glassworks, close to many of the most famous ones.'}
              />
            </p>
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
            <a
              href={this.props.intl.formatMessage(messages.kostaHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={kostaImg} alt="" />
            </a>
            <h3>Kosta Outlet</h3>
            <p>
              <FormattedMessage
                id={'Todo.kosta.desc'}
                defaultMessage={'Sweden\'s biggest shopping outlet. It\'s only 35 kilometers to this big outlet.'}
              />
            </p>
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
            <a
              href={this.props.intl.formatMessage(messages.utvandrarledenHref)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={utvandrarledenImg} alt="" />
            </a>
            <h3>Utvandrarleden</h3>
            <p>
              <FormattedMessage
                id={'Todo.utvandrarleden.desc'}
                defaultMessage={'Hike, paddle, and bike. Along this world famous nature trail you get to follow Vilhem Moberg\'s footsteps.'}
              />
            </p>
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
