import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DbConnection from 'src/db-connection/DbConnection';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: true,
    };
  }

  onLogin = (response) => {
    if (!response.success) {
      switch (response.error) {
        case 'not_found':
          this.setState({
            userError: 'Fel e-postadress',
            passwordError: undefined,
          });
          break;
        case 'invalid_login':
          this.setState({
            userError: undefined,
            passwordError: 'Fel lösenord',
          });
          break;
        default:
          break;
      }
    } else {
      this.props.onLogin();
    }
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleCheckboxChange = (event) => {
    this.setState({ rememberMe: event.target.checked ? true : undefined });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    DbConnection.login(this.state.email,
      this.state.password,
      this.state.rememberMe,
      this.onLogin);
  }

  render() {
    return (
      <div className="login">
        <div className="login-box">
          <form onSubmit={this.handleSubmit}>
            <div className="error-message">
              <span>{this.state.userError}</span>
            </div>
            <input
              type="text"
              className={this.state.userError ? 'input-error' : null}
              placeholder="E-postadress"
              onChange={this.handleEmailChange}
            />
            <div className="error-message">
              <span>{this.state.passwordError}</span>
            </div>
            <input
              type="password"
              className={this.state.passwordError ? 'input-error' : null}
              placeholder="Lösenord"
              onChange={this.handlePasswordChange}
            />
            <label htmlFor="remember-me-checkbox">Kom ihåg mig:</label>
            <input
              id="remember-me-checkbox"
              type="checkbox"
              checked={this.state.rememberMe}
              onChange={this.handleCheckboxChange}
            />
            <input type="submit" value="Logga in" />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
