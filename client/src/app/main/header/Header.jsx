import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changeLocale } from 'src/locale/actions';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="language-picker">
          <input
            type="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABr0lEQVRoQ+2bPUvDUBSG3yNUrV0FJyf1Pzi6qG3FQfFjUUQc3B2qo2Ps4O4igi5SVBBaFP9Ap/6BRhxcLOIoIqJHEkmtsWk5dZCGN1NJLk3u0+e8Tci5goYtm3fTUGwCGAcwBEAajzf7XJzcaTlk5sZp9xX/eVwB1ACUITgo5UavgovxJz6xe9c/kHw/ArBsvcouBxOe7mkq0bde2Bp+8cFk87fHUF2xQvHGxwwMIHJSyo2sSiZfnRKV606gxBIMABWdluyeewZgnmC+CajiwgPzCGCQYH4QePDAeMnc8Ra7jPki8UEwEUoQDMHY0oLG0BgaYyNAY2y8mDE0hsbYCNAYGy9mDI0xGqOVhT89XdtO1z2jhWCa/1gEE5UxNIbGmAKOpcRSMgkDGsMbPKMxfH0S8a9EMARjqiU+XTN8TcKAxtAYGmMjQGNsvJgxNIbG2Ai0MIY9eCE4CjxJxnHPRTDXKeY49uD5XZvs8/2thKim2Rke5hJ0hnv7F/fvk89vr95agiVrScWrlKSQSvSu1dcSBDAyTnVWemQDWl990pZTDMDUICiL6mFxe+wymPAnwmQnZu8TaGQAAAAASUVORK5CYII="
            alt="Swedish"
            className="swedish"
            onClick={() => {
              this.props.changeLocale('sv');
            }}
          />
          <input
            type="image"
            src="data:image/png;base64,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"
            alt="English"
            className="english"
            onClick={() => {
              this.props.changeLocale('en');
            }}
          />
        </div>
        <h1>
          <FormattedMessage
            id={'Header.main'}
            defaultMessage={'Summer cottage by the lake'}
          />
        </h1>
        <p>
          <FormattedMessage
            id={'Header.sub'}
            defaultMessage={'Rent a summer cottage in idyllic Småland, only 50 meters from the lake'}
          />
        </p>
        <a type="button" href="#book">
          <FormattedMessage
            id={'Heading.book'}
            defaultMessage={'Book'}
          />
        </a>
      </div>
    );
  }
}

Header.propTypes = {
  changeLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.locale.language,
});
const mapDispatchToProps = dispatch => bindActionCreators({ changeLocale }, dispatch);

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(Header),
);
