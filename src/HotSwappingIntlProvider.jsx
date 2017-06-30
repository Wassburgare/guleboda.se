import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { IntlProvider, addLocaleData } from 'react-intl';
import sv from 'react-intl/locale-data/sv';
import en from 'react-intl/locale-data/en';

import localeMessages from './translations/locales/localeMessages';
import { changeLocale } from './actions/localeActions';

addLocaleData([...sv, ...en]);

let language = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  navigator.browserLanguage ||
  navigator.systemLanguage;
language = language.toLowerCase().split(/[_-]+/)[0];

class HotSwappingIntlProvider extends Component {
  componentWillMount() {
    this.props.changeLocale(language);
  }

  render() {
    const locale = this.props.language;
    const messages = localeMessages[this.props.language];

    return (
      <IntlProvider
        locale={locale}
        messages={messages}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

HotSwappingIntlProvider.defaultProps = {
  language: 'en',
};

HotSwappingIntlProvider.propTypes = {
  changeLocale: PropTypes.func.isRequired,
  language: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  language: state.locale.language,
  messages: state.locale.messages,
});
const mapDispatchToProps = dispatch => bindActionCreators({ changeLocale }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HotSwappingIntlProvider);
